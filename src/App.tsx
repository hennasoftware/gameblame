import { useEffect, useState } from 'react'
import { db } from './services/Firebase.ts'
import { getDocs, collection } from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [firestoreStatus, setFirestoreStatus] = useState(
    'Firebase Firestore is not connected!'
  )
  const firestore = db

  useEffect(() => {
    async function checkFirestoreConn() {
      const querySnapshot = await getDocs(collection(firestore, 'status'))
      querySnapshot.forEach((doc) => {
        setFirestoreStatus(doc.data().result)
      })
    }

    checkFirestoreConn()
  })

  return (
    <>
      <main className="h-screen flex flex-col gap-8 justify-center items-center container max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center w-full">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-40 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-40 p-6 transition duration-300 will-change-[filter] animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-5xl font-bold">GameBlame frontend is running!</h1>

        <div className="p-12 text-lg">
          <p>Firebase Firestore status: </p>
          <p className="text-slate-600">{firestoreStatus}</p>
        </div>
      </main>
    </>
  )
}

export default App
