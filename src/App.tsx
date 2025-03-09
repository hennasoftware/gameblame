import {useEffect, useState} from 'react'
import {db} from './services/Firebase.ts'
import {getDocs, collection} from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firestoreStatus, setFirestoreStatus] = useState('Firebase Firestore is not connected!')
  const firestore = db;

  useEffect(() => {
    async function checkFirestoreConn() {
      const querySnapshot = await getDocs(collection(firestore, 'status'));
      querySnapshot.forEach(doc => {
        setFirestoreStatus(doc.data().result);
      })
    }

    checkFirestoreConn();
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>GameBlame frontend is running!</h1>
      <div className="card">

        <p>
          Firebase Firestore status: </p>
        <p className="read-the-docs">
          {firestoreStatus}</p>
      </div>
    </>
  )
}

export default App
