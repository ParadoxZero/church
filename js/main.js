function initMaterialCSS() {
     //M.AutoInit();
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems, {});
 
     var elems = document.querySelectorAll('.fixed-action-btn');
     var instances = M.FloatingActionButton.init(elems, {});
 
     var elems = document.querySelectorAll('.tooltipped');
     var instances = M.Tooltip.init(elems, {});
 
     var elems = document.querySelectorAll('.parallax');
     var instances = M.Parallax.init(elems, {});
 
     var elems = document.querySelectorAll('.dropdown-trigger');
     var instances = M.Dropdown.init(elems, {});
}
function initialize() {
    initMaterialCSS();
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-div").offset().top
        }, 500);
    });
}
document.addEventListener('DOMContentLoaded', initialize);

