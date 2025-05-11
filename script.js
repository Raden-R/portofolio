 const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        function toggleMenu() {
            navLinks.classList.toggle('open');
        }
        hamburger.addEventListener('click', toggleMenu);

        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });

        // Highlight active link based on scroll position
        const sections = document.querySelectorAll('section');
        const navAnchors = document.querySelectorAll('.nav-links a');

        function setActiveLink() {
            let index = sections.length;

            while (--index && window.scrollY + 100 < sections[index].offsetTop) { }
            navAnchors.forEach((link) => link.classList.remove('active'));
            navAnchors[index].classList.add('active');
        }
        window.addEventListener('scroll', setActiveLink);
        window.addEventListener('load', setActiveLink);