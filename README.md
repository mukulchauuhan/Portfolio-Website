# 🌐 Mukul Chauhan's Developer Portfolio

A modern, responsive portfolio website showcasing my journey, projects, and skills as a software developer. The website features a clean design, smooth animations, and interactive elements to provide an engaging user experience.

## 🎯 Purpose & Audience

This portfolio website serves as a professional showcase for:
- Potential employers and recruiters
- Fellow developers and tech enthusiasts
- Open source collaborators
- Anyone interested in my work and journey

The site aims to:
- Present my professional background and skills
- Showcase completed and ongoing projects
- Share my vision and goals
- Provide easy contact options
- Demonstrate technical capabilities through the site itself

## 🛠️ Tech Stack

### Frontend
- **HTML5**
  - Semantic markup
  - SEO optimization
  - Accessibility features
  - Responsive meta tags

- **CSS3**
  - Custom properties (variables)
  - Flexbox and Grid layouts
  - Media queries for responsiveness
  - CSS animations and transitions
  - Dark/Light theme support

- **JavaScript (ES6+)**
  - Vanilla JS (no frameworks)
  - DOM manipulation
  - Event handling
  - Dynamic content loading
  - Smooth animations
  - Form validation
  - Theme toggling

### External Resources
- Font Awesome (icons)
- Google Fonts (typography)
- Inter font family

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── projects.html           # Projects showcase
├── journey.html           # Professional journey
├── desk.html              # Workspace overview
├── vision.html            # Future goals
├── contact.html           # Contact form
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript file
├── assets/
│   ├── images/            # Image assets
│   └── favicon/           # Favicon files
└── README.md              # Project documentation
```

## 🚀 Features

### Core Features
- Responsive design (mobile-first approach)
- Dark/Light theme toggle
- Smooth page transitions
- Interactive project cards
- Progress tracking for WIP projects
- Contact form with validation
- Real-time IST clock
- Timeline animations
- Terminal-style typing effect

### Navigation
- Collapsible mobile menu
- Active page highlighting
- Smooth scrolling
- Breadcrumb navigation

### Projects Section
- Tabbed interface (Completed/WIP)
- Project cards with tech stack
- Progress indicators
- Modal details view
- GitHub and live preview links

### Contact Section
- Form validation
- Real-time feedback
- Working hours display
- Availability status
- IST time display

## 💻 Local Development

### Prerequisites
- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Open the project in your code editor:
   ```bash
   code .
   ```

4. Launch a local server:
   - Using Python:
     ```bash
     # Python 3
     python -m http.server 8000
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   - Using Node.js:
     ```bash
     npx serve
     ```
   - Using VS Code's Live Server extension

5. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Development Tips
- Use browser dev tools for responsive testing
- Test across different devices and browsers
- Check accessibility using browser tools
- Validate HTML and CSS
- Test JavaScript functionality
- Ensure all links work correctly

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #fff;
    --bg-secondary: #f8f9fa;
    --text-primary: #2d3436;
    --text-secondary: #636e72;
    --accent-color: #0984e3;
    /* Add more variables as needed */
}
```

### Content Updates
- Modify HTML files to update content
- Add new projects in the projects section
- Update timeline in journey.html
- Modify goals in vision.html
- Update contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Security

- Form validation on both client and server side
- No sensitive data stored in client-side code
- HTTPS recommended for production
- Regular security updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, please reach out through:
- The contact form on the website
- GitHub issues
- LinkedIn profile

---

Made with ❤️ by Mukul Chauhan 