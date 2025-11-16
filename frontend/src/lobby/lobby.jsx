import { useState } from 'react'

function onLeave() {
    localStorage.removeItem('chat:username')
    setUsername('')
}

export default function Lobby() {
    
    const [username, setUsername] = useState(() => {
        return localStorage.getItem('chat:username') || ''
    })

    return (
        <div className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Hello, {username}</h1>
            <button onClick={onLeave} className="px-3 py-1 border rounded">Leave</button>
            </div>
            <div className="p-6 bg-white rounded shadow text-gray-600">
            This is a placeholder chat view. Your socket/backend developer will integrate real-time features.
            </div>
        </div>
        </div>
    )
}