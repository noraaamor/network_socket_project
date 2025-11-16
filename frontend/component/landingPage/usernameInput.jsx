import { useEffect, useState } from 'react'

// mock of connected usernames. get from server later
const mock_users = ['alice', 'bob', 'charlie']


function UsernameInput({ onJoin }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError('')
  }, [name])

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter a username')
      return
    }
    setLoading(true)
    // Simulate check for duplicate usernames
    setTimeout(() => {
      const lower = trimmed.toLowerCase()
      const isDuplicate = mock_users.includes(lower)
      if (isDuplicate) {
        setError('That username is already taken. Try another.')
        setLoading(false)
        return
      }
      // save to localStorage so page refresh keeps it
      localStorage.setItem('chat:username', trimmed)
      onJoin(trimmed)
      window.location.href = "/lobby";
    }, 500)
  }

  return (
    <div className="h-full min-w-10 w-[40%] flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Choose your username</h2>
        <label className="block mb-2 text-sm font-medium">Handle</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a username"
          className="w-full px-3 py-2 border rounded mb-2"
        />
        {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {loading ? 'Checking…' : 'Join'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UsernameInput