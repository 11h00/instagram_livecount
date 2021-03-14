function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
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
$("button").click(function(){
    switch($(this).attr("bid")){
    	case "EV1":
    	window.location = '../../';
    	break;
    	case "EV2":
    	window.location = 'livemedia.html';
    	break;
    	case "EV3":
    	window.location = 'hashtags.html';
    	break;
    	case "EV4":
    	window.location = 'battle.html';
    	break;
        case "EV6":
        window.location.href = 'index.html';
        break;
    	case "EV5":
    	useuname = $(this).attr("nun")
        user_pref.setItem("last_user", useuname);
    	switch(methoddemerde){
	    case 0:
		CULER.open('GET', "https://www.instagram.com/" + useuname + "/channel/?__a=1");
		break
		case 1:
		CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
		break
		}
		CULER.send(null);
		break;
    }
})
$("#odometer2").click(function(){
	window.location.href = "fullscreen.html";
})
$("#sole").click(function(){
    if (lanui == false){
        //foutre le nu ?!
        user_pref.setItem("is_night_mode", 1)
        document.documentElement.style.setProperty('--lightmode_background', "black");
        document.documentElement.style.setProperty('--livecountdiv_background', "rgba(119, 119, 119, 0.133)");
        document.documentElement.style.setProperty('--livecountdiv_borders', "2px solid rgba(189, 189, 189, 0.133)");
        document.documentElement.style.setProperty('--feature_button', "rgb(66, 66, 66)");
        document.getElementById("sole").src = "img/lue.png"
        lanui = true;
    }else{
        //foutre le joue !
        user_pref.setItem("is_night_mode", 0)
        document.documentElement.style.setProperty('--lightmode_background', "linear-gradient(217deg, rgba(166, 55, 55, 0), rgba(255,0,0,0)), linear-gradient(127deg, rgba(255, 115, 9, 0.8), rgba(0,255,0,0)), linear-gradient(336deg, rgba(0, 0, 255, 0.92), rgba(0,0,255,0))");
        document.documentElement.style.setProperty('--livecountdiv_background', "#11111122");
        document.documentElement.style.setProperty('--livecountdiv_borders', "solid 2px #11111122");
        document.documentElement.style.setProperty('--feature_button', "rgb(153, 160, 79)");
        document.getElementById("sole").src = "img/sole.png"
        lanui = false;
    }
})
$('button').mousedown(function(){
$(this).css({"-webkit-transform":"translate(4px, 4px)"});
})
$('button').mouseup(function(){
$(this).css({"-webkit-transform":"translate(0px, 0px)"});
})