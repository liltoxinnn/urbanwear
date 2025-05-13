
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars i');
    
    stars.forEach((star, index1) => {
        star.addEventListener('click', () => {
            stars.forEach((star, index2) => {
                
                index1 >= index2 
                    ? star.classList.add('active')
                    : star.classList.remove('active');
            });
        });
    });
    
   
    const toggler = document.querySelector('#toggler');
    const navbar = document.querySelector('.navbar');
    
    if (toggler) {
        toggler.addEventListener('change', function() {
            if (this.checked) {
                navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            } else {
                navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
            }
        });
    }
});