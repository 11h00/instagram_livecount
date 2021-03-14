let livecount = new Object;
let soundManager = new Object;
let userHistory = new Object;
soundManager = {
    sad: new Audio('lesonn/sad.mp3'),
    UPsound: new Audio("lesonn/up.mp3"),
    DOWNsound: new Audio("lesonn/down.mp3"),
    downfollowing: new Audio('lesonn/downfollowing.mp3'),
    followingup: new Audio("lesonn/followingup.mp3"),
    DOWNsoundfollo: new Audio("lesonn/followdown.mp3"),
    postup: new Audio('lesonn/uppost.mp3'),
    postdown: new Audio('lesonn/downpost.mp3'),
    UPsoundfollo: new Audio("lesonn/up_follower.mp3"),
    nofoundmathias: new Audio("lesonn/nofound_mathias.wav"),
    mathias_up: new Audio("lesonn/save_up.mp3"),
    mathias_down: new Audio("lesonn/save_down.mp3"),
    PlayUpSound(){
        this.UPsound.cloneNode(true).play();
    },
    PlayDownSound(){
        this.DOWNsound.cloneNode(true).play();
    },
    PlayFollowingUpSound(){
        this.followingup.cloneNode(true).play();
    },
    PlayFollowingDownSound(){
        this.downfollowing.cloneNode(true).play();
    },
    PlayFollowerUpSound(){
        this.UPsoundfollo.cloneNode(true).play();
    },
    PlayFollowerDownSound(){
        this.DOWNsoundfollo.cloneNode(true).play();
    },
    PlayHighlightUpSound(){
        this.postup.cloneNode(true).play();
    },
    PlayHighlightDownSound(){
        this.postdown.cloneNode(true).play();
    },
    PlayNoFoundSound(){
        this.sad.loop = true;
        this.sad.play();
    },
    StopNoFoundSound(){
        this.sad.currentTime = 1;
        this.sad.pause();
    }
}
livecount = {
    DefaultUser: "mathias_santourian",
    userData: window.localStorage,
    blockLevel: 0,
    GetLastUsername(){
        return this.userData.last_user;
    },
    GetSoundPreference(){
        return Boolean(parseInt(this.userData.have_sound));
    },
    GetBlockedLevel(){
        return this.userData.getItem("blockedLevel") ?? 0
    },
    SetTransitionSpeed(value){
        
    },
    GetRequestUrl(username){
        if (this.blockLevel > 3){
            this.blockLevel = 0;
        }
        switch(this.blockLevel){
            case 0:return `https://www.instagram.com/${username}/?__a=1`;
            case 1:return `https://www.instagram.com/${username}/channel/?__a=1`;
            case 2:return `https://www.instagram.com/${username}/reels/?__a=1`;
            case 3:return `https://www.instagram.com/${username}/guides/?__a=1`;
        }
    }
}
userHistory = {
    RecentUsers: JSON.parse(livecount.userData.recent),
    GetRecentUsers(){
        return this.RecentUsers;
    },
    AddRecentUser(username, profilePicture){
        let recentarray = this.GetRecentUsers();
        if (this.RecentUsers.length < 5){
            //if there is less than 5 user
            for (let user of this.GetRecentUsers()){
                if (username == user.username){
                    console.log("user already registered, skipping");
                    return;
                }
            }
            recentarray.unshift({profile_Picture: profilePicture, username: username});
            livecount.userData.setItem("recent", JSON.stringify(recentarray))
        }else{
            //if there is more than 5 user, delete the oldest
            for (let user of this.GetRecentUsers()){
                if (username == user.username){
                    console.log("user already registered, skipping");
                    return;
                }
            }
            recentarray.pop();
            recentarray.unshift({profile_Picture: profilePicture, username: username});
            livecount.userData.setItem("recent", JSON.stringify(recentarray))
        }
    },
    RemoveRecentUser(Username){

    }
}