import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCrHLd62WY4ir3NCIRfq1kH2qsZCeR_4jQ",
    authDomain: "aspr-test-8d58a.firebaseapp.com",
    projectId: "aspr-test-8d58a",
    storageBucket: "aspr-test-8d58a.appspot.com",
    messagingSenderId: "1055687155331",
    appId: "1:1055687155331:web:f47e4ccf12d3ed53c885b6",
    measurementId: "G-810PKYE0XY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const addCountryCollection = async (collectionKey, countryToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const newDocRef = collectionRef.doc();
    const objToAdd = Object.assign({},[...countryToAdd]);
    newDocRef.set(objToAdd);
    // const batch = firestore.batch();
    // let i =0;
    // const objToAdd = [];
    // countryToAdd.map(cntry=>{
    //     objToAdd.push({[i]:cntry});
    //     i++;
    // })
    // objToAdd.forEach(obj=>{
    //   const newDocRef = collectionRef.doc();
    //   batch.set(newDocRef, obj);
    // });
  
    // return await batch.commit();
    return newDocRef;
  }



  export const firestore = firebase.firestore();
  export default firebase;