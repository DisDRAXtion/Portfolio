const headerHTML = `
    <header>
        <nav>
             <ul>
                <li><a href="index.html">Home</a></li>
                <li></li>
                <li><a href="graphicdesign.html">Graphic Design</a></li>
                <li></li>
                <li><a href="webdesign.html">Webdesign</a></li>
                <li></li>
                <li><a href="branding.html">Branding</a></li>
            </ul>
        </nav>
    </header>
`;

// Footer template
const footerHTML = `
    <footer>
        <p>&copy;<span id="year"></span> Tim Liekens - Works created during my employment at Newton Agency - All rights reserved.</p>
    </footer>
`;

// Load templates when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerElement = document.getElementsByClassName('header')[0];
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
    
    // Load footer
    const footerElement = document.getElementsByClassName('footer')[0];
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        document.getElementById('year').textContent = new Date().getFullYear();
    }
});