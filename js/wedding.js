//Creating a drop-down menu with accordion style when each section is hovered over.
//https://www.learningjquery.com/2015/10/using-jquery-to-create-a-drop-down-menu

$(document).ready(function(){ 
    $("#menu li").hover(function() { 
        //when the mouse enters the menu item, the submenu slides out and becomes visible
        $(".dropdown-menu", this).slideDown(100); 
    }, 
    function() { 
        //when the mouse exits the menu item, the submenu slides up and becomes invsible
        $(".dropdown-menu", this).stop().slideUp(100); 
    }); 
});


//Creating an email form
//The email functionality is in the HTML file
//This add some chained effects to the form: th eform hides, and an animated thank you message displays instead.
$('.submit-button').click(function() {
    $(this).parent().parent().hide();
    $('#rsvp-form-title').html('<p>Thank you for getting in touch!</p>').css('text-align','center').animate({
        opacity: '0.5',
  });
});

