// show humberger menu
var show_humberger_menu = $('.humberger');
var menu = $('.menu-of-humberger');
menu.css('opacity' , 0);
show_humberger_menu.click(function() {
    menu.css('visibility' , 'visible');
    menu.css('transition' , 'all .8s ease');
        setTimeout(function(){
            if(menu.css('opacity') == 0) {
                menu.css('opacity' , 1);
            }else {
                menu.css('opacity' , 0);
            }
        }, 100);
})

// hide hmuberger menu
var hide_humberger_menu = $('.cancel');
menu.css('display' ,'block');
hide_humberger_menu.click(function (){
    menu.css('transition' , 'all .5s ease-in');
    menu.css('visibility' , 'hidden');
    setTimeout(function(){
        if(menu.css('opacity') == 1) {
            menu.css('opacity' , 0);
        }else {
            menu.css('opacity' , 1);
        }
    }, 100);
})
// =========================================================