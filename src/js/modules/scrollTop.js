const scrollTop = () => {

    let lastScroll = 0;
    
    const arrowTop = document.querySelector('.arrow__top');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const conteinHide = () => arrowTop.classList.contains('hide');

    window.addEventListener('scroll', () => {
        if(scrollPosition() < 1400){
            arrowTop.classList.add('hide');
        } else if(scrollPosition() > 1401) {
            arrowTop.classList.remove('hide');
        }

        lastScroll = scrollPosition();
    });
    
    
    arrowTop.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    });

};

export default scrollTop;