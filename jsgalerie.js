function one() {
	var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%"; 
    }
}
function two() {
	var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%"; 
    }
}
function four() {
	var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%"; 
	}
}

function imgbonus(){
	var x = document.createElement("IMG");
	x.setAttribute("src", "imagini/bonus.jpg");
    x.setAttribute("width", "100");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The latin Empire");
    document.body.appendChild(x);
	x.onclick= function onc(){
		this.parentNode.removeChild(this)
	}
}
   