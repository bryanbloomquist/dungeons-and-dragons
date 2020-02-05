import React, { useState } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import Firebase from "./Components/Firebase/";
const Context = React.createContext({});

const Provider = ({ children }) => {

  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  // const Firebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
    // firebase.initializeApp(config);
    const [auth, setAuth] = useState(firebase.auth());
    const [db, setDb] = useState(firebase.database());

    //////////AUTH API//////////

    const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
    const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
    const doSignOut = () => auth.signOut();
    const doPasswordReset = email => auth.sendPasswordResetEmail(email);
    const doPasswordUpdate = password => auth.currentUser.updatePassword(password);

    //////////USER API//////////
    const user = (uid) => db.ref(`users/${uid}`);
    const users = () => db.ref("users");

  //////////FIREBASE LOGIN/SIGNIN STATE BEGINS HERE//////////

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUserNameChange = event => setUserName(event.target.value);
  const handleUserEmailChange = event => setUserEmail(event.target.value);
  const handleUserPasswordChange = event => setUserPassword(event.target.value);
  const handleConfirmPasswordChange = event => setConfirmPassword(event.target.value);

  const changeLoginStatus = () => {
    const checkStatus = isNewUser;
    setIsNewUser(!checkStatus);
  }

  const submitNewUser = event => {
    event.preventDefault();
    console.log("let's give this a try")
    doCreateUserWithEmailAndPassword(userEmail, userPassword)
    .then(authUser => {
      // Create a user in your Firebase realtime database
      user(authUser.user.uid)
      console.log(authUser.user.uid)
      .set({ userName, userEmail })
      .then(() => {
        setUserName("")
        setUserEmail("")
        setUserPassword("")
        setConfirmPassword("")
      })
      .catch(error => {
        setError({ error });
      });
    })
    .catch(error => {
      setError({ error });
    });
  };

  const submitUserLogin = event => {
    event.preventDefault();
    console.log(userEmail);
  }

  console.log(typeof setIsLoggedIn);

  //////////FIREBASE LOGIN/SIGNIN STATE ENDS HERE//////////

  //////////STATE FOR DICE TRAY BEGINS HERE//////////

  const [diceModifier, setDiceModifier] = useState(0);
  const [diceResults, setDiceResults] = useState("");
  const [numberOfDice, setNumberOfDice] = useState(4);
  const [numberOfSides, setNumberOfSides] = useState(6);

  const handleDiceInputChange = event => setNumberOfDice(event.target.value);
  const handleSideInputChange = event => setNumberOfSides(event.target.value);
  const handleModInputChange = event => setDiceModifier(event.target.value);

  const rollDice = event => {
    event.preventDefault();
    let tempArray = [];
    let tempTotal = 0;
    for (let i = 0; i < numberOfDice; i++) {
      let x = Math.floor(Math.random() * numberOfSides) + 1;
      tempArray.push(x);
      tempTotal += x;
    }
    let diceString = tempArray.join(" + ");
    let total = parseInt(tempTotal) + parseInt(diceModifier);
    setDiceResults(`( ${diceString} ) + ${diceModifier} = ${total}`);
  };

  //////////STATE FOR DICE TRAY ENDS HERE//////////

  //////////STATE FOR ADD NPC STARTS HERE//////////

  const [monsterName, setMonsterName] = useState("");
  const [monsterQuantity, setMonsterQuantity] = useState(1);

  const handleMonsterNameChange = event => setMonsterName(event.target.value);
  const handleMonsterQuantityChange = event => setMonsterQuantity(event.target.value);

  const submitMonster = event => {
    event.preventDefault();
    console.log("You are requesting " + monsterName + " (" + monsterQuantity + "x)");
  };

  //////////STATE FOR ADD NPC ENDS HERE//////////

  //////////STATE FOR ADD PC STARTS HERE//////////

  const [playerName, setPlayerName] = useState("");
  const [playerInit, setPlayerInit] = useState("");
  const [playerAC, setPlayerAC] = useState("");
  const [playerMaxHP, setPlayerMaxHP] = useState("");
  const [playerCurrentHP, setPlayerCurrentHP] = useState("");

  const handlePlayerNameChange = event => setPlayerName(event.target.value);
  const handlePlayerInitChange = event => setPlayerInit(event.target.value);
  const handlePlayerAcChange = event => setPlayerAC(event.target.value);
  const handlePlayerMaxHpChange = event => setPlayerMaxHP(event.target.value);
  const handlePlayerCurrentHpChange = event => setPlayerCurrentHP(event.target.value);

  const submitPlayer = event => {
    event.preventDefault();
    console.log(playerName);
  };

  //////////STATE FOR ADD PC ENDS HERE//////////

  return (
    <Context.Provider
      value={{
        doCreateUserWithEmailAndPassword,
        doSignInWithEmailAndPassword,
        doSignOut,
        doPasswordReset,
        doPasswordUpdate,
        // FIREBASE STATE
        isLoggedIn,
        isNewUser,
        userName,
        userEmail,
        userPassword,
        confirmPassword,
        error,
        handleUserNameChange,
        handleUserEmailChange,
        handleUserPasswordChange,
        handleConfirmPasswordChange,
        changeLoginStatus,
        submitNewUser,
        submitUserLogin,
        // DICE ROLLER STATE
        diceModifier,
        diceResults,
        numberOfDice,
        numberOfSides,
        handleDiceInputChange,
        handleModInputChange,
        handleSideInputChange,
        rollDice,
        // ADD NPC STATE
        monsterName,
        monsterQuantity,
        handleMonsterNameChange,
        handleMonsterQuantityChange,
        submitMonster,
        // ADD PC STATE
        playerName,
        playerInit,
        playerAC,
        playerMaxHP,
        playerCurrentHP,
        handlePlayerNameChange,
        handlePlayerInitChange,
        handlePlayerAcChange,
        handlePlayerMaxHpChange,
        handlePlayerCurrentHpChange,
        submitPlayer
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
