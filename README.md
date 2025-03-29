# Om's AI/ML Engineer Portfolio

This is a modern, responsive portfolio website built with React, showcasing my skills and experience as an AI/ML Engineer.

## Features

- Dark theme with modern UI design
- Responsive layout for all devices
- Interactive components with animations using Framer Motion
- Comprehensive sections for projects, skills, experience, and education
- Contact form and social media links

## Technologies Used

- React
- React Router for navigation
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm start
   ```
4. Build for production:
   ```
   npm run build
   ```

## Deployment

The site is deployed using GitHub Pages and can be accessed at [https://yourusername.github.io/om-portfolio](https://yourusername.github.io/om-portfolio)

## Resume Upload Feature

The portfolio includes a feature to upload and parse resume data. Currently, it supports:

- PDF files
- DOCX files

The parser extracts information about:
- Personal details
- Skills and qualifications
- Work experience
- Education
- Projects

## Customization

You can customize the default resume data by editing the `src/components/ResumeData.js` file.

## Project Structure

```
/src
  /components
    /AboutPage.js     # About page component
    /ContactPage.js   # Contact page component 
    /HomePage.js      # Home page component
    /Navbar.js        # Navigation component
    /Portfolio.js     # Original portfolio view component
    /ProjectsPage.js  # Projects page component
    /ResumeData.js    # Default resume data
    /ResumeUploader.js # Resume upload component
  /utils
    /resumeParser.js  # Resume parsing utility
  App.js              # Main application component
  index.js            # Application entry point
  index.css           # Global styles with Tailwind
```

## Build and Deploy

To build the project for production:

```
npm run build
```

The build output will be placed in the `build` folder, ready for deployment.

## Technologies Used

- React for the UI components
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons 