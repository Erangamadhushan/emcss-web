// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Update URL hash
            history.pushState(null, '', `#${targetId}`);
        });
    });

    // Handle initial load and browser navigation
    function handleHashChange() {
        const hash = location.hash.substring(1) || 'installation';
        const targetLink = document.querySelector(`[href="#${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});