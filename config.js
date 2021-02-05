import  firebase from 'firebase';
 const firebaseConfig = {
     apiKey: "AIzaSyDFbJyiCJbYYXsFZ5hqG337KoOKbBwxBZE",
    authDomain: "attendence-1e68d.firebaseapp.com",
    databaseURL: "https://attendence-1e68d-default-rtdb.firebaseio.com",
    projectId: "attendence-1e68d",
    storageBucket: "attendence-1e68d.appspot.com",
    messagingSenderId: "836020334652",
    appId: "1:836020334652:web:48fbe6dc2a6388812ed339"
  };
   // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.database();