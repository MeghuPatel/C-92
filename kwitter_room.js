
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyCavM6-VLZxAoRlqVqQW9XdKxF6tEdsaSY",
      authDomain: "kwitter-be091.firebaseapp.com",
      databaseURL: "https://kwitter-be091-default-rtdb.firebaseio.com",
      projectId: "kwitter-be091",
      storageBucket: "kwitter-be091.appspot.com",
      messagingSenderId: "879011939568",
      appId: "1:879011939568:web:73a041eac5a8a06f9bae35"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
