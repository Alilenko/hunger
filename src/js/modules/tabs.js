const tabs = () => {

    const tabsBtn = document.querySelectorAll('.menu__link'),
          tabsContent = document.querySelectorAll('.menu__content');  

    tabsBtn.forEach(function(item) {
        item.addEventListener('click', function(e){
            e.preventDefault();
           let currentBtn = item;
           let tabId = currentBtn.getAttribute('data-tab');
           let currentTab = document.querySelector(tabId);

           if(!currentBtn.classList.contains('active')){
               
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
 
            tabsContent.forEach(function(item) {
                item.classList.remove('active');
            });
 
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
           }
        
           
        });
    });



/*    const header = document.querySelector('.menu__list'),
          tab = document.querySelectorAll('.menu__item'),
          content = document.querySelectorAll('.menu__content');

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove('menu__link_active');
        });
    }

    function showTabContent(i) {
       content[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tab) ||
        target.parentNode.classList.contains(tab)) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });*/
};

export default tabs;