$(document).ready(function(){
 // using jquery methed
  if ($(window).width() <= 734) {
     $(".footer-links-wrapper h5").on("click", function() {
         $("ul").toggle();
         $(".footer-links-wrapper h5").next("ul").toggle();
         $(this).next("ul").toggle();
          $(this).toggleClass("times");
          //var footer=$(".footer-links-wrapper h5");
         //footer.addClass("times");

      

      //  The toggleClass() method toggles between adding and removing one or more class names from the selected elements. This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.

       

        
     });
    
    
 }

if ($(window).width() > 734) {
  $("ul").stop();
}


});
