import React from 'react';
import App1 from "./components/App1.js"
import firebase from "./sevices/firebaseService.js";

export default function App(){
    const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
    
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    
    })
    return(
        <>
            <App1 />
        </>
    )
}
