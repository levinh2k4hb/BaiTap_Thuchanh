import { useState } from 'react'

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const themeStyle = {
    backgroundColor: isDarkMode ? '#111827' : '#ffffff',
    color: isDarkMode ? '#fff' : '#111827',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  }

  return (
    <div style={themeStyle}>
      <h4>useState — Boolean / Toggle</h4>

      <div style={{ marginBottom: 8 }}>
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Ẩn nội dung' : 'Hiện nội dung'}</button>
        {isVisible && <div style={{ marginTop: 8 }}>Đây là nội dung có thể ẩn/hiện!</div>}
      </div>

      <div style={{ marginBottom: 8 }}>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      </div>

      <div>
        <button onClick={() => setIsLiked(!isLiked)}>{isLiked ? '❤️ Đã thích' : '🤍 Thích'}</button>
      </div>
    </div>
  )
}

export default BooleanState
