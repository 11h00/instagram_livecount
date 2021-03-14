const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var incre = 1000;
var folo = 0;
var updatecount = 10000
var useuname
var UPsound = new Audio("lesonn/up_follower.mp3");
var downsound = new Audio("lesonn/followdown.mp3");

var UPsound_mathias = new Audio("lesonn/up_follower_mathias.mp3");
var downsound_mathias = new Audio("lesonn/followdown_mathias.mp3");
var oldcount = 0;

var lastuser = user_pref.last_user
var sounHD = Boolean(parseInt(user_pref.have_sound));

if (lastuser == undefined){
	useuname = "mathias_santourian"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "mathias_santourian"
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

function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://www.instagram.com/" + useuname + "/channel/?__a=1");
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    	if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				degar = JSON.parse(CULER.responseText);
				folo = degar.graphql.user.edge_followed_by.count;
				wownon = degar.graphql.user.full_name;
				if (sounHD == true){
					if (folo > oldcount){
						switch(useuname){
							case "mathias777_minecraft":
							case "mathias77710":
								UPsound_mathias.cloneNode(true).play();
							break;
							default:
								UPsound.cloneNode(true).play();
							break;
						}
					}
					if (folo < oldcount){
						switch(useuname){
							case "mathias777_minecraft":
							case "mathias77710":
								downsound_mathias.cloneNode(true).play();
							break;
							default:
								downsound.cloneNode(true).play();
							break;
						}
					}
				oldcount = folo
				}
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = wownon;
			}
		}
   }      
         tg();               
   }, updatecount)
}

tg();  
