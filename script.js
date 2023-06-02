window.onload = function() {
    document.getElementById("home").style.marginTop="10px";
    document.getElementById("aboutme").style.display = "none";
    document.getElementById("b1").style.borderRadius="20%"
    document.getElementById("b1").style.borderBottom="2px solid red";
    document.getElementById("contactme").style.display = "none";
    document.getElementById("projects").style.display = "none";
}
var deviceWidth = window.innerWidth;

home =() =>{
    document.getElementById("home").style.marginTop="10px";
    document.getElementById("home").style.display="block";
    //document.getElementById("home").style.justifyContent = "center";
    document.getElementById("aboutme").style.display="none";
    document.getElementById("b2").style.borderBottom="none";
    document.getElementById("b1").style.borderBottom="2px solid red";
    document.getElementById("b1").style.borderRadius="20%";
    document.getElementById("b4").style.borderBottom="none";
    document.getElementById("contactme").style.display = "none";
    document.getElementById("b3").style.borderBottom="none";
    document.getElementById("projects").style.display="none";
}
aboutme =() =>{
    document.getElementById("aboutme").style.marginTop="10px";
    document.getElementById("home").style.display = "none";
    document.getElementById("b1").style.borderBottom="none";
    document.getElementById("b2").style.borderBottom="2px solid red";
    document.getElementById("b2").style.borderRadius="20%"
    document.getElementById("aboutme").style.display = "block";
    //document.getElementById("aboutme").style.justifyContent = "center";
    document.getElementById("b4").style.borderBottom="none";
    document.getElementById("contactme").style.display = "none";
    document.getElementById("b3").style.borderBottom="none";
    document.getElementById("projects").style.display="none";
}

projects =() => {
    document.getElementById("b3").style.borderBottom="2px solid red";
    document.getElementById("b3").style.borderRadius="20%";
    document.getElementById("b1").style.borderBottom="none";
    document.getElementById("b2").style.borderBottom="none";
    document.getElementById("b4").style.borderBottom="none";
    document.getElementById("projects").style.display="block";
    //document.getElementById("projects").style.justifyContent="center";
    document.getElementById("home").style.display="none";
    document.getElementById("contactme").style.display="none";
    document.getElementById("aboutme").style.display="none";

}



contactme =() => {
    document.getElementById("b1").style.borderBottom="none";
    document.getElementById("b2").style.borderBottom="none";
    document.getElementById("b4").style.borderBottom="2px solid red";
    document.getElementById("b4").style.borderRadius="20%";
    document.getElementById("home").style.display = "none";
    document.getElementById("aboutme").style.display="none";
    document.getElementById("contactme").style.display="block";
    //document.getElementById("contactme").style.justifyContent = "center";
    document.getElementById("b3").style.borderBottom="none";
    document.getElementById("projects").style.display="none";

}