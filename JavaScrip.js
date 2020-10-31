/*let controlArray = [forwardBtn, backwardBtn];
 
 controlArray.forEach((control) => {
	 control.addEventListener('click',() => {
		 switch(control) {
			 case forwardBtn :
			 nextSong()
			 break;
			 
			 case backwardBtn :
			 prevSong()
			 break;
		 }
	 })
 }) */
alert("Songs may take time to load . Sorry for that 😢")
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
}