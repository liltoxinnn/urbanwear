document.addEventListener('DOMContentLoaded', function() {
    
    const toggler = document.querySelector('#toggler');
    const navbar = document.querySelector('.navbar');
    
    toggler.addEventListener('change', function() {
        if (this.checked) {
            navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        } else {
            navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
        }
    });

    // hado variables ta3na
    const userIcon = document.getElementById('user-icon');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginClose = document.getElementById('login-close');
    const signupClose = document.getElementById('signup-close');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const body = document.body;

    // hadi when u click ela user icon ji taelogin model
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.remove('hidden');
        body.classList.add('modal-open');
    });

    // w hadi when u click troh
    loginClose.addEventListener('click', function() {
        loginModal.classList.add('hidden');
        body.classList.remove('modal-open');
    });

    signupClose.addEventListener('click', function() {
        signupModal.classList.add('hidden');
        body.classList.remove('modal-open');
    });

    // hadi bah t9dr tswitchi bin signup w login sema ki tban wa7da lo5ra nn
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('hidden');
        signupModal.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.classList.add('hidden');
        loginModal.classList.remove('hidden');
    });

    
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
            body.classList.remove('modal-open');
        }
        if (e.target === signupModal) {
            signupModal.classList.add('hidden');
            body.classList.remove('modal-open');
        }
    });

    

});