// The following function adds a smooth scrolling to all links

$(document).ready(function(){   
    $("a").on('click', function(event) {
        
      // Make sure this.Link has a value before overriding default behavior
      if (this.Link !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store Link
        var Link = this.Link;
  
        // smooth page scroll
        // 2000 mili scroll
        $('html, body').animate({
          scrollTop: $(Link).offset().top
        }, 2000, function(){
     
          // Add Link (#) to URL when done scrolling
          window.location.Link = Link;
        });
      } // End if
    });
  });
  
  // open and close the contact form 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  }
  