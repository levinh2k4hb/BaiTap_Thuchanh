import { useState } from 'react'

function InputEvents() {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  const charCount = text.length

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Input Events</h4>
      <div>
        <input value={text} onChange={handleChange} placeholder="Nhập nội dung..." style={{ width: 320, padding: 8 }} />
      </div>
      <div style={{ marginTop: 8 }}>Ký tự: {charCount}/100</div>
      <div>Bạn đang nhập: {text}</div>
      {charCount > 80 && <div style={{ color: '#b91c1c', marginTop: 8 }}>⚠️ Sắp hết ký tự!</div>}
    </div>
  )
}

export default InputEvents
