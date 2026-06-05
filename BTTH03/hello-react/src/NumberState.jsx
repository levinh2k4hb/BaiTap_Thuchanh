import { useState } from 'react'

function NumberState() {
  const [count, setCount] = useState(0)

  const status = count > 0 ? 'Số dương' : count < 0 ? 'Số âm' : 'Bằng 0'
  const color = count > 0 ? '#065f46' : count < 0 ? '#b91c1c' : '#374151'

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>useState — Number (Counter)</h4>
      <p style={{ fontSize: 18 }}>Bộ đếm: <span style={{ color, fontWeight: 700 }}>{count}</span></p>
      <p>Status: <strong style={{ color }}>{status}</strong></p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
        <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
        <button onClick={() => setCount(count + 5)}>Tăng 5</button>
      </div>
    </div>
  )
}

export default NumberState
