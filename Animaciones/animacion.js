const script = document.createElement('script');
script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
document.head.appendChild(script);

script.onload = () => {
    
    AOS.init({
        duration: 900, 
        once: true     
    });
};

// Volver arriba
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆ Volver Arriba';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none'; // Ocultar inicialmente
backToTopButton.style.padding = '10px';
backToTopButton.style.background = '#1b3231';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});