import { useState } from 'react'

function ClickEvents() {
  const [message, setMessage] = useState('Chưa click')
  const [clickCount, setClickCount] = useState(0)
  const [boxColor, setBoxColor] = useState('#f3f4f6')

  function handleClick() {
    setMessage('Đã click lúc ' + new Date().toLocaleTimeString())
    setClickCount(prev => prev + 1)
  }

  function handleReset() {
    setMessage('Đã reset!')
    setClickCount(0)
  }

  function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Click Events</h4>
      <p>{message}</p>
      <p>Số lần click: {clickCount}</p>

      <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => setBoxColor(randomColor())}>Đổi màu ngẫu nhiên</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <div style={{ width: 120, height: 60, background: boxColor, borderRadius: 6, border: '1px solid #d1d5db' }} />
      </div>
    </div>
  )
}

export default ClickEvents
