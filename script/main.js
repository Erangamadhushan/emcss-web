document.addEventListener("DOMContentLoaded", () => {
    renderNavber();
    renderSidebar();
    renderSection();
});

const renderNavber = () => {
    const navber = document.querySelector(".header");
    const navberHtml = `
        <div class="logo"> <h1>EMCSS</h1> </div>
        <button  class="theme-toggle" id="theme-toggle">
            <img src="" alt="sun icon" id="toggle-theme-icon">
        </button>
        <div class="header-right"> <a href="#" target="_blank"><img src="assets/icons/github.png" alt="github repository"/></a> </div>
    `;
    navber.innerHTML = navberHtml;
}

const renderSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarHtml = `
        <nav>
            <!-- Getting Started -->
            <div class="nav-group">
                <div class="nav-group-title">Getting Started</div>
                <a href="#introduction" class="nav-link">Introduction</a>
                <a href="#installation" class="nav-link">Installation</a>
                <a href="#usage" class="nav-link">Basic Usage</a>
                <a href="#browser-support" class="nav-link">Browser Support</a>
            </div>

            <!-- Utilities -->
            <div class="nav-group">
                <div class="nav-group-title">Utilities</div>
                <a href="#spacing" class="nav-link">Spacing</a>
                <a href="#colors" class="nav-link">Colors</a>
                <a href="#typography" class="nav-link">Typography</a>
                <!-- Add more utilities -->
            </div>

            <!-- Components -->
            <div class="nav-group">
                <div class="nav-group-title">Components</div>
                <a href="#buttons" class="nav-link">Buttons</a>
                <a href="#cards" class="nav-link">Cards</a>
                <a href="#forms" class="nav-link">Form Elements</a>
                <!-- Add more components -->
            </div>

            <!-- Customization -->
            <div class="nav-group">
                <div class="nav-group-title">Customization</div>
                <a href="#variables" class="nav-link">CSS Variables</a>
                <a href="#theming" class="nav-link">Theming</a>
            </div>
        </nav>
    `;
    sidebar.innerHTML = sidebarHtml;
}

const renderSection = () => {
    const sectionContainer = document.querySelector(".main-content");
    const sectionHtml = `
        <!-- Installation Section -->
        <section id="introduction" class="section active">
            <h1>EMCSS Library</h1>
            <h2>A lightweight, versatile CSS framework for modern web development</h2>
            <p>EMCSS provides developers with a comprehensive set of tools to build responsive, attractive websites without the bloat of larger frameworks. With an emphasis on performance and flexibility, EMCSS helps you create beautiful interfaces with minimal effort.</p>
            <p>Whether you're building a simple landing page or a complex web application, EMCSS has you covered. Its modular design allows you to include only the components you need, ensuring that your project remains lightweight and efficient.</p>
            <p>With a focus on best practices and modern design principles, EMCSS is the perfect choice for developers looking to streamline their workflow and enhance their projects. Dive into the documentation to explore the full range of features and components available in EMCSS.</p>

            <h2>Why Choose EMCSS?</h2>

            <ul>
                <li>Lightweight: Only 18kb minified and gzipped</li>
                <li>Modular: Use only what you need</li>
                <li>Responsive: Built with mobile-first approach</li>
                <li>Easy to learn: Intuitive class naming conventions</li>
                <li>Customizable: Easily adapt to your project's needs</li>
                <li>Modern: Uses CSS variables and modern CSS features</li>
                <li>Performance-focused: Minimal impact on page load times</li>
            </ul>
            <h2>Getting Started</h2>
            <p>To get started with EMCSS, simply include the CSS and JavaScript files in your project. You can either link to the CDN version or install it via npm. Once included, you can start using the pre-defined classes to style your HTML elements.</p>
            <p>Start building beautiful, responsive websites with EMCSS today!</p>

        </section>
        <section id="installation" class="section active">
            <h1>Installation</h1>
            <h2>Add the following link to your HTML file:</h2>
            <div class="code-area">
                <code>
                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Erangamadhushan/emcss-library@1.0.5/css/style.css"&gt;
                </code>
            </div>
            <div class="code-area">
                <code>
                    &lt;script src="https://cdn.jsdelivr.net/gh/Erangamadhushan/emcss-library@1.0.5/js/jquery.js"&gt;&lt;/script&gt;
                </code>
            </div>
            <div class="code-area">
                <code>
                    &lt;script src="https://cdn.jsdelivr.net/gh/Erangamadhushan/emcss-library@1.0.5/js/script.js"&gt;&lt;/script&gt;
                </code>
            </div>

            <h2>Alternatively, you can install EMCSS via npm:</h2>
            <div class="code-area">
                <code>
                    npm install emcss
                </code>
            </div>
        </section>
        <section id="usage" class="section active">
            <h1>Basic Usage</h1>
            <h2>EMCSS uses intuitive class names that are easy to remember and implement. Simply add the appropriate classes to your HTML elements:</h2>

            <div class="code-examples">
                <h3>Example:</h3>
                <h3>For Example, to create a form element, you can use the following HTML:</h3>
                <div class="code-area">
                    <code>
                        &lt;input type="text" class="your-input" placeholder="Enter text"&gt;
                    </code>
                </div>
                <h3>For example, to create a card, you can use the following HTML:</h3>
                <div class="code-area">
                    <code>
                        &lt;div class="em-card"&gt;<br/>
                            &lt;img src="path/to/image.jpg" alt="Card Image" class="em-card-img"&gt;<br/>
                            &lt;h2 class="em-card-title"&gt;Card Title&lt;/h2<br/>
                            &lt;p class="em-card-text"&gt;Card content goes here.&lt;/p&gt;<br/>
                            &lt;a href="#" class="em-card-btn"&gt;Read More&lt;/a&gt;<br/>
                        &lt;/div&gt;
                    </code>
                </div>
                
                <h3>For example, to create a button, you can use the following HTML:</h3>
                <div class="code-area">
                    <code>
                        &lt;button class="your-btn"&gt;Default Button&lt;/button&gt;
                        
                    </code>
                </div>
                <div class="code-area">
                    <code>
                        &lt;button class="your-btn your-btn-primary"&gt;Primary Button&lt;/button&gt;
                    </code>
                </div>
                
                <div class="code-area">
                    <code>
                        &lt;button class="your-btn"&gt;Click Me&lt;/button&gt;
                    </code>
                </div>
            </div>
        </section>
        <section id="browser-support" class="section active">
            <h1>Browser Support</h1>
            <h2>EMCSS is compatible with all modern browsers:</h2>
            <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
                <li>Safari</li>
                <li>Opera</li>
                <li>Internet Explorer 11 (with limited features)</li>
            </ul>
            <p>For the best experience, we recommend using the latest version of your preferred browser. EMCSS is designed to work seamlessly across all devices and screen sizes, ensuring a consistent and enjoyable user experience.</p>
        </section>
        <section id="buttons" class="section active">
            <h1>EMCSS Library</h1>
            <h2>A lightweight, versatile CSS framework for modern web development</h2>
            <p>EMCSS provides developers with a comprehensive set of tools to build responsive, attractive websites without the bloat of larger frameworks. With an emphasis on performance and flexibility, EMCSS helps you create beautiful interfaces with minimal effort.</p>
        </section>
        <section id="cards" class="section active">
            <h1>EMCSS Library</h1>
            <h2>A lightweight, versatile CSS framework for modern web development</h2>
            <p>EMCSS provides developers with a comprehensive set of tools to build responsive, attractive websites without the bloat of larger frameworks. With an emphasis on performance and flexibility, EMCSS helps you create beautiful interfaces with minimal effort.</p>
        </section>
        <section id="forms" class="section active">
            <h1>EMCSS Library</h1>
            <h2>A lightweight, versatile CSS framework for modern web development</h2>
            <p>EMCSS provides developers with a comprehensive set of tools to build responsive, attractive websites without the bloat of larger frameworks. With an emphasis on performance and flexibility, EMCSS helps you create beautiful interfaces with minimal effort.</p>
        </section>
        <section id="spacing" class="section active">
            <h1>EMCSS Library</h1>
            <h2>A lightweight, versatile CSS framework for modern web development</h2>
            <p>EMCSS provides developers with a comprehensive set of tools to build responsive, attractive websites without the bloat of larger frameworks. With an emphasis on performance and flexibility, EMCSS helps you create beautiful interfaces with minimal effort.</p>
        </section>
        

        <!-- Component Documentation Template -->
        <section id="buttons" class="section">
            <h2>Buttons</h2>
            <p>Description of button components and their usage.</p>

            <!-- Component Preview -->
            <div class="component-preview">
                <div class="preview-area">
                    <!-- Button examples using your library classes -->
                    <button class="your-btn">Default Button</button>
                    <button class="your-btn your-btn-primary">Primary Button</button>
                </div>
                <div class="code-area">
                    <code>
                        &lt;button class="your-btn"&gt;Default Button&lt;/button&gt;
                        &lt;button class="your-btn your-btn-primary"&gt;Primary Button&lt;/button&gt;
                    </code>
                </div>
            </div>

            <!-- Component API/Options -->
            <h3>Available Classes</h3>
            <ul>
                <li><code>.your-btn</code> - Base button class</li>
                <li><code>.your-btn-primary</code> - Primary button variant</li>
            </ul>
        </section>
        <!-- Add more sections for each component -->
    `;
    sectionContainer.innerHTML = sectionHtml;
}

