// Terminal typing animation
const terminalText = [
    "Welcome to my workspace!",
    "I'm currently working on exciting projects...",
    "Feel free to explore my tech stack and current work."
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
    const typingElement = document.getElementById('typing-text');
    const currentText = terminalText[currentTextIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingDelay = 50;
    } else {
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % terminalText.length;
        typingDelay = 500; // Pause before typing next text
    }

    setTimeout(typeText, typingDelay);
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        // Update icons
        sunIcon.style.display = isDark ? 'none' : 'block';
        moonIcon.style.display = isDark ? 'block' : 'none';
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Workspace card animations
function initWorkspaceCards() {
    const cards = document.querySelectorAll('.workspace-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
}

// Initialize GitHub activity placeholder animation
function initGitHubPlaceholder() {
    const placeholder = document.querySelector('.placeholder-animation');
    if (placeholder) {
        let dots = 0;
        setInterval(() => {
            dots = (dots + 1) % 4;
            placeholder.textContent = 'Loading' + '.'.repeat(dots);
        }, 500);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    initThemeToggle();
    initWorkspaceCards();
    initGitHubPlaceholder();
}); 