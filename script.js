
document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll('.nav-links a');
  
    
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); 
  
        
        const targetId = link.getAttribute('href').slice(1); 
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  