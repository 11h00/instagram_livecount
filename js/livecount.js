const CULER = new XMLHttpRequest();
let user_pref = window.localStorage;
let oldcount = 0, FollowerCount = 0, updatecount = 0, UserFullName, milestonz, ID, HighlightCount, PostCount, FollowingCount;
let timeset = false;
let wew = false;
let useuname = livecount.GetLastUsername() || "mathias_santourian";
let prifle = "";
let pnz = false;
let paused = false;
let sonHD = false;
let OldHighlightCount = 0;
let OldFollowingCount = 0;
let nofoundmsg = { "text": " was no found please try again with a other instagram username:", "title": "404: account no found" };
let lanui = false;
let customrefresg = parseInt(user_pref.custom_update)
let getdayornoght = livecount.GetSoundPreference();
let sonounon = livecount.GetSoundPreference();
let lastuser = user_pref.last_user;

if (lastuser == undefined || useuname.length == 0) {
	useuname = livecount.DefaultUser;
} else {
	useuname = lastuser;
}
if (!isNaN(customrefresg)) {
	$(document).ready(function () {
		$("#textcount").text(customrefresg / 1000);
		rateres = customrefresg / 1000;
		document.documentElement.style.setProperty('--transsecond', (customrefresg / 1000) + "s");
	})
} else {
	$(document).ready(function () {
		$("#textcount").text("5");
		user_pref.setItem("custom_update", 5000);
		rateres = 5;

	})
}

function checkcookie() {
	if (sonounon == true) {
		sonHD = false;
		sonsetting();
	}
	if (getdayornoght == true) {
		document.documentElement.style.setProperty('--lightmode_background', "black");
		document.documentElement.style.setProperty('--livecountdiv_background', "rgba(119, 119, 119, 0.133)");
		document.documentElement.style.setProperty('--livecountdiv_borders', "2px solid rgba(189, 189, 189, 0.133)");
		document.documentElement.style.setProperty('--feature_button', "rgb(66, 66, 66)");
		document.getElementById("sole").src = "img/lue.png";
		lanui = true;
	}
}
function gotoprofile() {
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
			window.open("https://www.instagram.com/" + useuname);
		}
	})
}

function sonsetting() {
	if (sonHD == true) {
		if (lanui == false) {
			document.getElementById("soundstting").style.background = "#FF0000";
		}
		document.getElementById("soundstting").innerText = "sound : OFF";
		user_pref.setItem("have_sound", 0);
		sonHD = false;
	} else {
		if (lanui == false) {
			document.getElementById("soundstting").style.background = "#00FF00";
		}
		document.getElementById("soundstting").innerText = "sound : ON";
		user_pref.setItem("have_sound", 1);
		sonHD = true;
	}

}
function milestonztest() {
	switch (FollowerCount.toString().length) {
		case 1:
			var milestonz = FollowerCount;
			milestonz += 1;
			break;
		case 2:
			var milestonz = parseInt((Math.floor(FollowerCount / 10)) + "0");
			milestonz += 10;
			break;
		case 3:
			var milestonz = parseInt((Math.floor(FollowerCount / 100)) + "00");
			milestonz += 100;
			break;
		case 4:
			var milestonz = parseInt((Math.floor(FollowerCount / 1000)) + "000");
			milestonz += 1000;
			break;
		case 5:
			var milestonz = parseInt((Math.floor(FollowerCount / 10000)) + "0000");
			milestonz += 10000;
			break;
		case 6:
			var milestonz = parseInt((Math.floor(FollowerCount / 100000)) + "00000");
			milestonz += 100000;
			break;
		case 7:
			var milestonz = parseInt((Math.floor(FollowerCount / 1000000)) + "000000");
			milestonz += 1000000;
			break;
		case 8:
			var milestonz = parseInt((Math.floor(FollowerCount / 10000000)) + "0000000");
			milestonz += 10000000
			break;
		case 9:
			var milestonz = parseInt((Math.floor(FollowerCount / 100000000)) + "00000000");
			milestonz += 100000000;
		break;
		case 10:
			var milestonz = parseInt((Math.floor(FollowerCount / 1000000000)) + "000000000");
			milestonz += 1000000000;
		break;
	}
	document.getElementById('milestona').innerHTML = 'before ' + milestonz;
	odometer5.innerHTML = milestonz - FollowerCount;
}

function testcount() {
	if (FollowerCount > oldcount) {
		soundManager.PlayUpSound()
	}
	if (FollowerCount < oldcount) {
		soundManager.PlayDownSound()
	}
	if (HighlightCount > OldHighlightCount) {
		soundManager.PlayHighlightUpSound()
	}
	if (HighlightCount < OldHighlightCount) {
		soundManager.PlayHighlightDownSound()
	}
	if (OldFollowingCount > FollowingCount) {
		soundManager.PlayFollowingDownSound()
	}
	if (OldFollowingCount < FollowingCount) {
		soundManager.PlayFollowingUpSound()
	}
	if (PostCount > OldPostCount) {
		soundManager.PlayFollowerUpSound()
	}
	if (PostCount < OldPostCount) {
		soundManager.PlayFollowerDownSound()
	}
}
CULER.onreadystatechange = function (event) {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			if (this.responseURL.indexOf("https://www.instagram.com/accounts/login/") == -1) {
				degar = JSON.parse(CULER.responseText);
				OldPostCount = PostCount;
				oldcount = FollowerCount;
				OldHighlightCount = HighlightCount;
				OldFollowingCount = FollowingCount;
				switch (degar.graphql.user.id) {
					case "37217076350":
						$('#pfp').css('border-radius', '0');
						$("#pfp").css("animation", "");
						$("#pfp").css("animation", "mathias_friend infinite 1s alternate-reverse");
						break;
					case "42648380417":
					case "17941466":
					case "14947148876":
					case "10125217811":
					case "7285858887":
						$('#pfp').css('border-radius', '0');
						$("#pfp").css("animation", "");
						$("#pfp").css("animation", "mathias infinite 1s alternate-reverse");
						break;
					case "713290421":
					case "21460398":
					case "9287261029":
					case "2651834442":
					case "8296823329":
						$("#pfp").css("animation", "");
						$('#pfp').css('border-radius', '100%');
						document.getElementById('pfp').style.border = 'solid red';
						break;
					default:
						$("#pfp").css("animation", "");
						$('#pfp').css('border-radius', '0');
						document.getElementById('pfp').style.border = 'solid';
						break;
				}
				switch (degar.graphql.user.id) {
					case "43047667919":
					case "42648380417":
					case "46415112891":
					case "46245568539":
					case "7285858887":
						$("#followeur")[0].innerHTML = "videos :";
						$("#posts")[0].innerHTML = "followers :";
						FollowerCount = degar.graphql.user.edge_felix_video_timeline.count;
						PostCount = degar.graphql.user.edge_followed_by.count;
						HighlightCount = degar.graphql.user.highlight_reel_count;
						break;
					default:
						FollowerCount = degar.graphql.user.edge_followed_by.count;
						HighlightCount = degar.graphql.user.highlight_reel_count;
						PostCount = degar.graphql.user.edge_owner_to_timeline_media.count;
						$("#followeur")[0].innerHTML = "followers :";
						$("#posts")[0].innerHTML = "posts :";
						$("#autre2")[0].innerHTML = "highlight stories :";
						break;
				}
				FollowingCount = degar.graphql.user.edge_follow.count;
				UserFullName = degar.graphql.user.full_name;
				if (UserFullName.length == 0) {
					UserFullName = useuname
				}
				ID = degar.graphql.user.id;
				document.getElementById('pfp').src = degar.graphql.user.profile_pic_url_hd;
				odometer.innerHTML = FollowerCount;
				odometer2.innerHTML = PostCount;
				odometer3.innerHTML = FollowingCount;
				milestonztest()
				odometer4.innerHTML = HighlightCount;
				document.getElementById("coconu").innerHTML = UserFullName + " (" + ID + ")";
				if (sonHD == true) {
					testcount();
				}
			}else{
				livecount.blockLevel++;
			}
		}
		switch (this.status) {
			case 404:
				if (!Swal.isVisible()) {
					nofoundmsg = { "text": " was no found please try again with a other instagram username:", "title": "404: account no found" };
					soundManager.PlayNoFoundSound()
					swal.fire({
						allowEscapeKey: false,
						title: nofoundmsg.title,
						text: useuname + nofoundmsg.text,
						input: 'text'
					}).then((result) => {
						useuname = result.value
						if (useuname == undefined || useuname == null || useuname == "") {
							useuname = livecount.DefaultUser;
						}
						user_pref.setItem("last_user", livecount.DefaultUser);
						CULER.open('GET', livecount.GetRequestUrl(useuname));
						CULER.send(null);
						swal.fire({
							title: "new instagram username set:",
							text: useuname,
							toast: true,
							animation: null,
							position: 'top',
							allowEscapeKey: false,
							showConfirmButton: false,
							timer: 3000
						})
						soundManager.StopNoFoundSound();
					});
				}
				break;
			case 429:
				swal.fire({ title: "429: rate limit", text: "please try again later." });
				break;
			case 500:
				swal.fire({
					title: "500: internal server error",
					text: "instagram have a internal server error and maybe instagram is down please try later.",
				});
				break;
		}
	}
};
function tg() {
	setTimeout(function () {
		CULER.open('GET', livecount.GetRequestUrl(useuname));
		CULER.send(null);
		tg();
		if (timeset == false) {
			timeset = true;
			updatecount = isNaN(customrefresg) ? 5000 : customrefresg;
		}
	}, updatecount)
}

tg();  