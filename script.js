//your JS code here. If required.
let mybutton=document.getElementById("incrementBtn");
let myPara=document.getElementById("counter");

let c=0;
mybutton.addEventListener("click",()=>{
	myPara.textContent=c+1;
	alert(c);
	c++;
})
