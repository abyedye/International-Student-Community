
function buildComments(){
    var commentList = [ {
name:  "abinash", 
date: "1st jan",
comment: "hello"} , {
name:"Krsichal",
date: "2 days ago",
comment: "Hello"
} ];
  console.log("test");
    var div = document.getElementById("comms"); /* langdiv replace by comment division */

    var html = "";
    for (var i=0;i<commentList.length;i++) {
        html += `<div class="media-object pull-left"> <img src="images/avatar.png" class="img-responsive img-circle" alt="Blog Image 11"></div><div class="media-body"> <h3 class="media-heading"> ${commentList[i].name}  </h3><span> ${commentList[i].date}  </span>
                                             <p>${commentList[i].comment}  </p> </div>`
    }
    

    div.innerHTML = html;
}

buildComments()

