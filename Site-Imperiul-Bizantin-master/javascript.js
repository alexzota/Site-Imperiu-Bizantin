window.onload = function start(){	
	if (document.documentElement.scrollTop < document.getElementById("origini").offsetTop) 
        document.getElementById("sb1").className = "active";
	
	  var elem = document.getElementById("a1"); 
	  let i = 0;
	  var id = setInterval(function frame(){ if (i == 255) {
		  i=0;
		} else {
		  i++; 
		  elem.style.color = "rgb(0,"+i+",0)";
		} }, 4);

}



window.onscroll = function myFunction(){
	if (document.documentElement.scrollTop < document.getElementById("origini").offsetTop) {
        document.getElementById("sb1").className = "active";
    } else {
        document.getElementById("sb1").className = "";
    }
	if (document.documentElement.scrollTop >= document.getElementById("origini").offsetTop && document.documentElement.scrollTop < document.getElementById("migratii").offsetTop) {
        document.getElementById("sb2").className = "active";
    } else {
        document.getElementById("sb2").className = "";
    }
	if (document.documentElement.scrollTop >= document.getElementById("migratii").offsetTop && document.documentElement.scrollTop < document.getElementById("apogeu").offsetTop) {
        document.getElementById("sb3").className = "active";
    } else {
        document.getElementById("sb3").className = "";
    }
	if (document.documentElement.scrollTop >= document.getElementById("apogeu").offsetTop && document.documentElement.scrollTop < document.getElementById("declin").offsetTop) {
        document.getElementById("sb4").className = "active";
    } else {
        document.getElementById("sb4").className = "";
    }
	if (document.documentElement.scrollTop >= document.getElementById("declin").offsetTop && document.documentElement.scrollTop < document.getElementById("mostenire").offsetTop) {
        document.getElementById("sb5").className = "active";
    } else {
        document.getElementById("sb5").className = "";
    }
	if (document.documentElement.scrollTop >= document.getElementById("mostenire").offsetTop ) {
        document.getElementById("sb6").className = "active";
    } else {
        document.getElementById("sb6").className = "";
    }
}


