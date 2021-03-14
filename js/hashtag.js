const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var folo = 0;
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var updatecount = 0
var hashtag
var oldcount = 0
var sonHD = false;
var sonounon = Boolean(parseInt(user_pref.have_sound));
var photo
var lasthashtag = user_pref.last_hashtag;

if (lasthashtag == undefined){
	hashtag = "mathiassantourian";
}else{
	hashtag = lasthashtag;
}

if (hashtag.length == 0){
	hashtag = "mathiassantourian";
}
if (sonounon == true){
	$(document).ready(function(){
		document.getElementById("soundstting").innerText = "sound : ON"
		document.getElementById("soundstting").style.background = "#00FF00"	
		sonHD = true
	})
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function soundtest(){
	if (oldcount < photo){
		UPsound.play();
	}
	if (oldcount > photo){
		DOWNsound.play();
	}
}
function sonsetting(){
if (sonHD == true){
	document.getElementById("soundstting").innerText = "sound : OFF"
	user_pref.setItem("have_sound", 0)
	sonHD = false
	document.getElementById("soundstting").style.background = "#FF0000"	
}else{
	document.getElementById("soundstting").innerText = "sound : ON"
	user_pref.setItem("have_sound", 1)
	document.getElementById("soundstting").style.background = "#00FF00"	
	sonHD = true
}
}
function tg() {        
		oldcount = photo
   setTimeout(function () {
	CULER.open('GET', "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			photo = degar.graphql.hashtag.edge_hashtag_to_media.count;
			prifile = degar.graphql.hashtag.profile_pic_url;

			if (hashtag == 'mathiassantourian'){
				$("#pfp").css("animation", "mathias infinite 1s alternate-reverse");
				document.getElementById('pfp').style.border = 'solid blue'
				odometer.style.color = "#00c5ff"
			}else{
				$("#pfp").css("animation", "");
				document.getElementById('pfp').style.border = 'solid'
				odometer.style.color = "white"
			}
			
			document.getElementById('pfp').src = prifile;
			if (sonHD == true){
				soundtest()
			}
			odometer.innerHTML = photo;
			document.getElementById("coconu").innerHTML = "#" + hashtag;
        }
    }
}     
         tg(); 
updatecount = 10000		 
   }, updatecount)
}

tg();  