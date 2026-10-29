const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync(require('node:path').join(__dirname, '../index.html'), 'utf8');
const code = html.match(/<script>([\s\S]*?)<\/script>/)[1];
class Element {
  constructor() { this.children = []; this.textContent = ''; }
  set innerHTML(value) { assert.equal(value, '', 'dynamic HTML is forbidden'); this.children = []; }
  append(...children) { this.children.push(...children); }
  appendChild(child) { this.children.push(child); }
  removeChild() { this.children.shift(); }
}
function setup(fetch) {
  const elements = new Map();
  const document = {
    getElementById(id) { if (!elements.has(id)) elements.set(id, new Element()); return elements.get(id); },
    createElement() { return new Element(); },
    createTextNode(text) { return { textContent: text }; },
    addEventListener() {},
  };
  const context = vm.createContext({document, fetch, console, setTimeout});
  vm.runInContext(code + ';globalThis.types = {DebugLogger, APIManager, FrameAnalyzer};', context);
  return { ...context.types, document };
}
test('model output and filenames remain text, never HTML', () => {
  const {DebugLogger, FrameAnalyzer, document} = setup();
  const payload = '<img src=x onerror="sentinel()">';
  new DebugLogger('logs').info(payload);
  assert.equal(document.getElementById('logs').children[0].children[2].textContent, payload);
  const analyzer = Object.create(FrameAnalyzer.prototype);
  analyzer.results = [{}];
  analyzer.displayResult({description: payload, formattedTime: payload, dataUrl: 'javascript:sentinel()', perspectiveKey: 'objective'});
  const result = document.getElementById('resultsContainer').children[0];
  assert.equal(result.children[0].src, undefined);
  assert.equal(result.children[1].children[1].textContent, payload);
});
test('API key is in header and raw error is not consumed', async () => {
  const {APIManager} = setup(async (url, options) => {
    assert.ok(!url.includes('secret-sentinel'));
    assert.equal(options.headers['x-goog-api-key'], 'secret-sentinel');
    return {ok:false, status:403, text() { throw new Error('raw body should never be read'); }};
  });
  const logs = [];
  const api = new APIManager({info(){},error(m){logs.push(m);}}, {getCurrentPerspective(){return {name:'test',prompt:'test'};}});
  api.setApiKey('secret-sentinel');
  await assert.rejects(api.analyzeFrame('image'), /Gemini request failed/);
  assert.ok(!logs.join().includes('secret-sentinel'));
});
test('all-failed, partial and successful batches have distinct status', () => {
  const {FrameAnalyzer} = setup();
  const analyzer = Object.create(FrameAnalyzer.prototype);
  analyzer.logger = {error(){},warning(){},success(){}};
  analyzer.updateStatus = message => analyzer.status = message;
  analyzer.results=[]; analyzer.finishAnalysis(2); assert.match(analyzer.status,/failed/);
  analyzer.results=[{}]; analyzer.finishAnalysis(2); assert.match(analyzer.status,/partial/);
  analyzer.results=[{},{}]; analyzer.finishAnalysis(2); assert.equal(analyzer.status,'Analysis complete');
});
