function validationContactForm(){
   
    var fname = document.forms["contactForm"]["firstname"].value;
    var lname = document.forms["contactForm"]["lastname"].value;
    var comment = document.forms["contactForm"]["subject"].value;
    if (fname == "" || lname == "" || comment == "") {
      alert("All field must be filled");
       document.getElementById("containerContact").style.border ="2px solid red"
       return false;
    }
}