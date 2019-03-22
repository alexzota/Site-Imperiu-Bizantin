function punctaj(){
	  var c = document.getElementById("intrebari");
	  var txt = "";
	  var i;
	  var j = 0;
	  for (i = 0; i < c.length; i++) {
		  j = i+1;
		txt = j+"T";
		if(document.getElementById("txt").checked) i++;
	  }
	alert("Ai punctajul "+i+"/5");
}
function sol(){
	if(document.getElementById("B1").checked && document.getElementById("B2").checked && document.getElementById("F1").checked==false) alert("Corect!")
}
window.onload = function(){

	if (localStorage.i) {
	var i = localStorage.getItem("i");
	var o;
	for(o = 1; o <= i; o++){
	var op = "opinie"+o;
	var d = "data"+o;
	var txt = localStorage.getItem(op);
	var data = localStorage.getItem(d);
	var elemP = document.createElement('p');
	elemP.innerHTML = data+"<br>"+txt+"<br><br>";
	var str = elemP.innerHTML.toLowerCase();
	elemP.innerHTML = str;

	document.body.appendChild(elemP);
	 }
	}
	var x = document.getElementById("p1");
	var d = document.getElementsByClassName("div1");
	x.addEventListener("click", function(event){
	var a = window.getComputedStyle(d[0], null).getPropertyValue("color");
    document.getElementById("p2").innerHTML = a;
    event.stopPropagation();
   }, true);
}
function f(e){
	e.parentElement.style.display = 'none';
}
function div1(event){
	var x = event.pageX;
    var y = event.pageY;
	var z = document.getElementsByClassName("div1");
	z.prop = "Proprietate noua?";
	z[0].style.backgroundColor= "#"+x+y;
}
function p2(event){
	alert("Nu mai poti afla punctajul deoarece ai dat click pe "+event.target.nodeName+ "2");
	document.getElementById("p1").classList.add("customStyle");
	event.stopPropagation();
	document.getElementById("s1").addEventListener("click", function(event){
	event.preventDefault()
}, true);
}

function myFunction(event){
	var x = event.key;
  document.getElementById("ls").innerHTML = "The pressed key was: " + x;
}

function ls()
{
	if(document.getElementById("op1").value){
	if (localStorage.i) {
	localStorage.i = Number(localStorage.i) + 1;
	}else {
	localStorage.i = 1;
	}
	var i = localStorage.getItem("i");
	var x = "opinie"+i;
	var y = "data"+i;
	var y1 = new Date();
	var op = document.getElementById("op1").value;
	localStorage.setItem(x, op);
	localStorage.setItem(y, y1);
	}
}