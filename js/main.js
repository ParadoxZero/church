document.addEventListener('DOMContentLoaded', function() {
    //M.AutoInit();
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {});

    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        //fullWidth: true,
        indicators: true,
    });
  });

  window.onresize = function(){ location.reload(); }
