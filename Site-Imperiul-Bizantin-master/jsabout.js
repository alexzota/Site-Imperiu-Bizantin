window.onload = function(){
	var x = document.getElementById("opt").children;
	x[0].innerHTML = Math.floor(Math.random() * 35000000);
	x[1].innerHTML = 35000000;
	x[2].innerHTML = Math.floor(Math.random() * 35000000);
	
}
function a1(){
	var x = document.getElementById("armata");
	var a = document.getElementById("a1");
	x.innerHTML = a.innerHTML;
	x.style.color="red";
}
function a2(){
	var x = document.getElementById("armata");
	x.innerHTML = "35000000";
	x.style.color="green";
}
function a3(){
	var x = document.getElementById("armata");
	var a = document.getElementById("a3");
	x.innerHTML = a.innerHTML;
	x.style.color="red";
}