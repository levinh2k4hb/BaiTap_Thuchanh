import { useEffect, useState } from 'react'

function KeyboardEvents() {
  const [lastKey, setLastKey] = useState('')
  const [log, setLog] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    function handleKeyDown(e) {
      setLastKey(e.key)
      setLog(prev => [...prev.slice(-4), e.key])
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleInputKeyDown(e) {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        alert('Bạn nhập: ' + inputValue)
        setInputValue('')
      }
    }
    if (e.key === 'Escape') {
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Keyboard Events</h4>
      <div>Phím cuối cùng: <strong>{lastKey || 'Chưa nhấn'}</strong></div>
      <div>Log: {log.join(' → ')}</div>

      <div style={{ marginTop: 12 }}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Nhập rồi nhấn Enter..."
          style={{ padding: 8, width: 320 }}
        />
        <div style={{ marginTop: 8 }}>Nhấn Escape để xóa</div>
      </div>
    </div>
  )
}

export default KeyboardEvents
