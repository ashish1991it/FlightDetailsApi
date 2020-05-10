
$(document).ready(function() {

      $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        // $('.collapse.in').toggleClass('in');
        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');

        if($("#menu-toggle").children().hasClass("glyphicon-menu-left")==true){
                	$("#menu-toggle").children().removeClass("glyphicon-menu-left");
                	$("#menu-toggle").children().addClass("glyphicon-menu-right");
                }else{
                	$("#menu-toggle").children().removeClass("glyphicon-menu-right");
                	$("#menu-toggle").children().addClass("glyphicon-menu-left");
                }
      });
      
    });