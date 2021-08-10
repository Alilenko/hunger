
const burger = () => {

    const body = document.querySelector('body'); 
    const headerBurger = document.querySelector('.header__burger'),
          menuBody = document.querySelector('.header__menu');
    

    function closeBurger() {
        menuBody.classList.remove('active');
        headerBurger.classList.remove('active');
        body.classList.remove('lock');
    }  

    headerBurger.addEventListener('click', function() {
        menuBody.classList.toggle('active');
        headerBurger.classList.toggle('active');
        body.classList.toggle('lock');
    
    

    body.addEventListener('click', function(e) {
           
            const target = e.target;
            const its_menu = target == menuBody;
            const its_btnMenu = target == headerBurger;
            const menu_is_active = menuBody.classList.contains('active');
           
           
           if(!its_menu && !its_btnMenu && menu_is_active ) {
            closeBurger();
           } 
        
        });
    });
};

export default burger;


