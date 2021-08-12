const modalImage = () => {

    const imgs = document.querySelectorAll('.image');
    const modal = document.querySelector('.modal');
    const activeImage = document.querySelector('#active-image');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('#close');
    const prev = document.querySelector('#left');
    const next = document.querySelector('#right');

    imgs.forEach(img => img.addEventListener('click', displayImage));

    function displayImage(e){
        activeImage.src = e.target.src;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    closeIcon.addEventListener('click', closeImage);
    overlay.addEventListener('click', closeImage);

    function closeImage(){
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    next.addEventListener('click', nextImage);
    prev.addEventListener('click', prevImage);

    function nextImage() {
        for(let i = 0; i < imgs.length; i++){
            if(activeImage.src === imgs[i].src){
                var nextImageVar = imgs[i].nextElementSibling;
            }
        }

        if(nextImageVar === null){
            activeImage.src = imgs[0].src;
        } else{
            activeImage.src = nextImageVar.src;
        }
    
    }

    function prevImage(){
        for(let i = 0; i < imgs.length; i++){
            if(activeImage.src === imgs[i].src){
                var nextImageVar = imgs[i].previousElementSibling;
            }
        }

        if(nextImageVar === null){
            activeImage.src = imgs[imgs.length - 1].src;
        } else{
            activeImage.src = nextImageVar.src;
        }
    }
    

};

export default modalImage;
