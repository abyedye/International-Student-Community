
/*function buildComments(){
    var commentList = [ {
name:  "abinash", 
date: "1st jan",
comment: "hello", email: "abye@gmail.com"} , {
name:"Krischal",
date: "2 days ago",
comment: "Hello",
email: "krish99@gmail.com"
}];
  console.log("test");
    var div = document.getElementById("comms"); /* langdiv replace by comment division 

    var html = "";
    for (var i=0;i<commentList.length;i++) {
        html += `<div class="media-object pull-left"> <img src="images/avatar.png" class="img-responsive img-circle" alt="Blog Image 11"></div><div class="media-body"> <h3 class="media-heading"> ${commentList[i].name}  </h3><span> ${commentList[i].date}  </span>
                                             <h4 class="media-heading"> ${commentList[i].comment}</h4> <p>${commentList[i].email} </p>   </div>`
    }
    

    div.innerHTML = html;
} */

//buildComments()

var firebaseConfig = {
    apiKey: "AIzaSyB2KypmeXMx5UEfnU6V-2Z6t7IzGwbFM6w",
    authDomain: "web-dev-f6760.firebaseapp.com",
    databaseURL: "https://web-dev-f6760.firebaseio.com",
    projectId: "web-dev-f6760",
    storageBucket: "web-dev-f6760.appspot.com",
    messagingSenderId: "891920411261",
    appId: "1:891920411261:web:4a9c9b4f8176d853b51f14",
    measurementId: "G-9HF2RB6YJT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function writeData() {
       firebase.database().ref("User").set({
            name: document.getElementById("nameField").value,
            email : document.getElementById("emailID").value,
            message : document.getElementById("Message").value,
       });
  }

   function getData() {
            var leadsRef = database.ref('comments');
            leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
                console.log(childData);
    });
});
       }
       