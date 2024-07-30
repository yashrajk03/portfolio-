document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header .right ul li a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
