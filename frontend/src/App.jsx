import { useState } from 'react'
import UsernameInput from '../component/landingPage/usernameInput'

export default function App() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('chat:username') || ''
  })

  function handleJoin(name) {
    setUsername(name)
  }

  return <UsernameInput onJoin={handleJoin} />
}
