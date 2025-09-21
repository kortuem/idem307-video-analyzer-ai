# idem307-video-analyzer-ai
IDEM307 video-analyzer-ai


# AI Video Analyzer

**Course Project for IDEM307 Generative AI and Design**  
*TU Delft, Industrial Design Engineering*  
*Prof. Gerd Kortuem*

A powerful, AI-driven video analysis tool that provides frame-by-frame descriptions with multiple analytical perspectives. Built with vanilla JavaScript and powered by Google Gemini AI as part of a hands-on tutorial series teaching AI collaboration and web development.

## Project Overview

This video analyzer was developed through a 4-part tutorial series focusing on:
- Learning to collaborate with AI for code generation
- API integration with external AI services
- Production deployment and security practices
- Understanding AI's capabilities and limitations in video analysis

## Features

### Multiple Analysis Perspectives
- **Objective Description**: Factual, detailed frame descriptions
- **Urban Planning Analysis**: Traffic flow, infrastructure, accessibility assessment
- **Social Dynamics Analysis**: Social interactions, group behavior, community patterns
- **Safety Assessment**: Hazard identification, risk evaluation, compliance review
- **Accessibility Review**: Barrier identification, inclusive design evaluation
- **Creative Fiction**: First-person narrative storytelling (clearly marked as fiction)

### Technical Capabilities
- **Frame-by-Frame Analysis**: Automatic extraction and analysis at 5-second intervals
- **Visual Frame Display**: Shows captured frames alongside AI descriptions for transparency
- **Re-analysis Support**: Switch perspectives without re-uploading video
- **Export Functionality**: Download detailed analysis reports as text files
- **Secure API Management**: Environment variable support for production deployment
- **Debug Logging**: Comprehensive logging for learning and troubleshooting

## Tutorial Series Structure

This project was built incrementally through 4 tutorial parts:

1. **Part 1**: Basic video player with logging system
2. **Part 2**: Frame-by-frame AI analysis integration
3. **Part 3**: Multiple analytical perspectives and export functionality
4. **Part 4**: Secure production deployment to Vercel

## Quick Start

### Prerequisites
- Modern web browser with HTML5 video support
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Local Usage
1. Download the HTML file
2. Open in your web browser
3. Enter your Gemini API key
4. Upload a video file (MP4 recommended, under 50MB)
5. Select an analysis perspective
6. Click "Analyze Video"
7. View frame-by-frame results and download reports

### Video Recommendations
For best results, use videos with:
- Clear action or movement (people crossing streets, cooking, working)
- 30-60 second duration to avoid API rate limits
- Good lighting and resolution
- Avoid static scenes (they produce repetitive descriptions)

## Educational Learning Objectives

Through building this application, students learn:

### AI Collaboration Skills
- How to effectively prompt AI for code generation
- Iterative development with AI assistance
- Understanding AI capabilities and limitations
- Debugging AI-generated code

### Technical Skills
- API integration and authentication
- Environment variable management for security
- Git/GitHub workflow and version control
- Production deployment practices
- Client-side JavaScript and Canvas API

### Design Thinking
- How different analytical frameworks yield different insights from the same data
- Understanding the importance of prompt engineering
- Recognizing the subjective nature of AI analysis

## Technical Implementation

### Architecture
- **Frontend**: Vanilla JavaScript, HTML5, CSS3 with Tailwind
- **AI Integration**: Google Gemini 1.5 Flash API
- **Deployment**: Static HTML (Vercel/Netlify compatible)
- **Security**: Environment variables for API key management

### Key Technical Concepts Demonstrated
- Canvas API for frame extraction from video
- Asynchronous JavaScript for API calls
- File handling and blob operations for exports
- Environment variable injection for secure deployment
- Error handling and user feedback systems

## Course Context

This project demonstrates several key concepts from IDEM307:

### Generative AI Applications
- Practical integration of LLMs for visual analysis
- Understanding prompt engineering for different analytical perspectives
- Learning about AI limitations (frame isolation vs. temporal understanding)

### Design Process
- Iterative development from simple to complex features
- User experience design for AI-powered tools
- Balancing automation with user control

### Professional Development
- Modern web development workflows
- Security practices for production applications
- Portfolio-ready project development

## Troubleshooting

### Common Issues
- **API Rate Limits**: Free tier allows 50 requests/day. Use shorter videos or longer intervals.
- **Video Format Issues**: MP4 works most reliably across browsers.
- **API Key Errors**: Ensure key starts with "AIza" and has Generative AI permissions.

### Debug Features
The application includes comprehensive logging to help understand:
- When frames are captured and sent to AI
- API response timing and content
- Error conditions and recovery attempts

## Deployment

The application is designed for easy deployment to platforms like:
- **Vercel** (recommended for tutorial)
- **Netlify**
- **GitHub Pages**

Environment variable `VITE_GEMINI_API_KEY` should be set for production deployments.

## Acknowledgments

- **Course**: IDEM307 Generative AI and Design, TU Delft
- **Instructor**: Prof. Gerd Kortuem
- **AI Platform**: Powered by Google Gemini AI
- **Development Approach**: Tutorial-based learning with AI collaboration

## License

Educational use for IDEM307 course. Built as a learning exercise in AI collaboration and web development.

---

**Note**: This is a student project demonstrating AI integration techniques. Video files are processed locally - only individual frames are sent to the Gemini API for analysis.
