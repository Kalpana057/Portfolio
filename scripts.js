// Smooth Scroll & Navigation Effects
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  
    // Hover and click color effects using plum theme
    anchor.addEventListener('mouseover', () => {
      anchor.style.color = 'plum';
      anchor.style.transition = 'color 0.3s';
    });
  
    anchor.addEventListener('mouseout', () => {
      anchor.style.color = '#FFFFFF';
    });
  
    anchor.addEventListener('click', () => {
      anchor.style.color = '#8B008B';
    });
  });

  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,      
      duration: 800,    
      easing: 'ease-in-out'
    });
  }
  