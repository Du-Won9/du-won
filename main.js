var time =0;
let action =document.getElementById("action");
let apps =document.getElementsByClassName("apps");
let applist =document.querySelector("#applist");
let toast =document.querySelector(".toast");
let main=document.querySelector("#main");
window.onload = function() {
    let ntxbtn = document.getElementById('ntxbtn');
    let bcbt = document.getElementById("bcbt");
    let body = document.querySelector("body");
    var scrollbar = document.getElementById("scrollbar");
    var p =document.querySelector("p");
    var stc = 0;
   let action =document.getElementById("action");
    body.style.width = window.innerWidth;
    body.style.height = window.innerHeight;
    main.style.height=window.innerHeight;

    ntxbtn.onclick = function() {
        stc +=-358;
        // alert(stc);
        scrollbar.style.left = stc;
        if (stc==-2864) {
            stc = 358;
            return stc;
        }
    }
    body.onscroll = function() {
        let bcbt = document.getElementById("bcbt");
        let ntxbtn = document.getElementById("ntxbtn");
        if (body.scrollTop > 10) {
            ntxbtn.style.transform = "scale(0)";
            bcbt.style.transform = "scale(0)";

        } else {
            ntxbtn.style.transform = "scale(1)";
            bcbt.style.transform = "scale(1)";
        }
        if(body.scrollTop>280){
           main.style.overflow ="scroll";
        }
        else{
            main.style.overflow ="hidden";
        }
    }

    bcbt.onclick = function() {
        stc += 358;
        if (stc == 358) {
            return stc = 0;
        }
        if (stc == 716) {
            return stc=-2864;
        }
        scrollbar.style.left = stc;
    }
    

}
 function loading(n){
     action.style.display="block";
    switch (n) {
        case 1:
         loaction.replace("https://du-won9.github.io/du-won/KNO3.html")
            break;
        
        case 2:
            loaction.replace("gallery_html")
            break;
            
        case 3:
            loaction.replace("newest_post.html")
            break;
            
        case 4:
            loaction.replace("play.html")
            break;
        
        case 5:
            loaction.replace("browser.html")
            break;
    }
}
let body =document.querySelector("body");
  body.onoffline =function(){
    Android.showToast("offline");
}
//item.innerWidth =350
//mother.innerWidth=358
//358*9 =3222px;
//8*9 =72;

for(var i=0;i<apps.length;i++){
        apps[0].onclick = function(){
            action.style.display="block";
            open("Duwon.apk");
            
        }
          apps[1].onclick = function(){
            action.style.display="block";
            open("");
        }
        
        apps[0].onmouseover =function(){
             toast.style.bottom="0px";
             toast.innerText="Web Development tutorial offline";
        }

        apps[1].onmouseover =function(){
             toast.style.bottom="0px";
             toast.innerText="W3school";
          
    }
     apps[2].onmouseover =function(){
             toast.style.bottom="0px";
             toast.innerText="Turmex";
          
    }
     apps[3].onmouseover =function(){
             toast.style.bottom="0px";
             toast.innerText="Play Store";
          
    }
     apps[4].onmouseover =function(){
             toast.style.bottom="0px";
             toast.innerText="Android Source code example";
          
    }
      apps[i].onmouseout =function(){
         
        toast.style.bottom="-151px";
  }
}
applist.onscroll =function(){
    toast.style.bottom="-151px";
}
main.onscroll =function(){
    toast.style.bottom="-151px";
}