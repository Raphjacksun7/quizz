import app from 'firease/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCM0GpCuJIdBIpRi-_leco7InsaGkmXNwU",
    authDomain: "react-quizz-game.firebaseapp.com",
    databaseURL: "https://react-quizz-game.firebaseio.com",
    projectId: "react-quizz-game",
    storageBucket: "react-quizz-game.appspot.com",
    messagingSenderId: "333078216349",
    appId: "1:333078216349:web:ff66e9912585c425245e74",
    measurementId: "G-CPPJM9E00N"
  };

class Firebase {
    auth = null;
    constructor(){
        app.initializeApp(config)
        this.auth = app.auth()
    }

    signUp = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => this.auth.signOut();
    
}

export default Firebase;
