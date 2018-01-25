import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBvvEOeHOs9efrGEriwcxgc1-sD-TeFHlU",
        authDomain: "reacttodo-44333.firebaseapp.com",
        databaseURL: "https://reacttodo-44333.firebaseio.com",
        projectId: "reacttodo-44333",
        storageBucket: "reacttodo-44333.appspot.com",
        messagingSenderId: "1072698494707"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log("can not initialise firebase!")
}

export var firebaseRef = firebase.database().ref(); 
export default firebase; 

