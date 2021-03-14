const CULER = new XMLHttpRequest();
const VS = new XMLHttpRequest();
let oldcount = 0;
let methoddemerde = 0;
let folo = 0;
let updatecount = 200
let mode1 = 3;
let mode2 = 3;
let useuname1 = "mathias_santourian";
let useuname2 = "mathias_santourian";
let vsresult = 0;
let post1 = 0;
let post2 = 0;
let sonHD = livecount.GetSoundPreference();
function gotoprofile(){
	Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'nah rener'
}).then((result) => {
  if (result.value) {
   window.open("https://www.instagram.com/" + useuname1)
  }
})
}

function gotoprofile2(){
	Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'nah rener'
}).then((result) => {
  if (result.value) {
   window.open("https://www.instagram.com/" + useuname2)
  }
})
}
VS.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			try {
				User2Responce = JSON.parse(VS.responseText); //gen 2
				switch(mode2){
				case 1:
				post2 = User2Responce.graphql.user.edge_owner_to_timeline_media.count;	
				break;
				case 2:
				switch(useuname2){
						case "ilove_51":
						case "mathias_santoutou_videos":
						case "51.6m":
						case "m777l24j":
							post2 = User2Responce.graphql.user.edge_felix_video_timeline.count
						break;
						default:
							post2 = User2Responce.graphql.user.highlight_reel_count
						break;
					}
				break;
				case 3:
				post2 = User2Responce.graphql.user.edge_followed_by.count;	
				break;
				case 4:
				post2 = User2Responce.graphql.user.edge_follow.count;	
				break;
				}
				document.getElementById('pfp3').src = User2Responce.graphql.user.profile_pic_url_hd;
				oldcount = vsresult;
				conmapere();
				checkuser(User1Responce.graphql.user.id, User2Responce.graphql.user.id);
				odometer3.innerHTML = post2;
				odometer2.innerHTML = post1;
			} catch (error) {
				livecount.blockLevel++;
			}
        }
		if (this.status === 404){
			swal.fire('404: no found! C!bien doma!')
		}
    }
};
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			try {
				User1Responce = JSON.parse(CULER.responseText); //utilisateu! 1
				switch(mode1){
				case 1:
					post1 = User1Responce.graphql.user.edge_owner_to_timeline_media.count;	
				break;
				case 2:
					switch(useuname1){
						case "ilove_51":
						case "mathias_santoutou_videos":
						case "51.6m":
						case "m777l24j":
							post1 = User1Responce.graphql.user.edge_felix_video_timeline.count
						break;
						default:
							post1 = User1Responce.graphql.user.highlight_reel_count
						break;
					}
				break;
				case 3:
				post1 = User1Responce.graphql.user.edge_followed_by.count;	
				break;
				case 4:
				post1 = User1Responce.graphql.user.edge_follow.count;	
				break;
				}
				document.getElementById('pfp').src = User1Responce.graphql.user.profile_pic_url_hd;				
			} catch (error) {
				livecount.blockLevel++;
			}
        }
		if (this.status === 404){
			swal.fire('404: no found! C!bien doma!')
		}
		VS.open("GET", livecount.GetRequestUrl(useuname2))
   		VS.send(null);
    }
};
 function sonsetting(){
if (sonHD == true){
	document.getElementById("soundstting").style.background  = "#FF0000"
	document.getElementById("soundstting").innerText = "sound : OFF"
	sonHD = false
}else{
    document.getElementById("soundstting").style.background  = "#00FF00"
	document.getElementById("soundstting").innerText = "sound : ON"
	sonHD = true
}
 }
 function conmapere(){
	 if (post1 < post2){
		vsresult = post2 - post1
		odometer1.innerHTML = vsresult;
		document.getElementById("lecomba").innerText = "before " + useuname1 + " beat " + useuname2
		document.getElementById("name2lol").innerText = useuname2
		document.getElementById("name1").innerText = useuname1 
		if (sonHD == true) {testcount();} //play sound if user enabled it
	 }else{
		vsresult = post1 - post2
	 	odometer1.innerHTML = vsresult;
		document.getElementById("lecomba").innerText = "before " + useuname2 + " beat " + useuname1
		document.getElementById("name1").innerText = useuname1
		document.getElementById("name2lol").innerText = useuname2
		if (sonHD == true) {testcount();} //play sound if user enabled it
	 }
 }

function testcount(){
	if (vsresult > oldcount){
		soundManager.PlayUpSound()
	}
	if (vsresult < oldcount){
		soundManager.PlayDownSound()
	}
}

function tg() {
   setTimeout(function () {  
			CULER.open("GET", livecount.GetRequestUrl(useuname1));
			CULER.send(null);
			updatecount = 5000;
         tg();                  		 
   }, updatecount)
}
tg();  
