import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDLgsUpmpCbcHGp-Ht-ZZXcEFbCvRjRohk",
 authDomain: "complaint-forum-app-61bf9.firebaseapp.com",
 projectId: "complaint-forum-app-61bf9",
 storageBucket: "complaint-forum-app-61bf9.appspot.com",
 messagingSenderId: "962264817714",
 appId: "1:962264817714:web:ce37d5427df06984149c2b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

