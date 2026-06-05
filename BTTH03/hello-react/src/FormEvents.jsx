import { useState } from 'react'

function FormEvents() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      alert('Vui lòng nhập đầy đủ thông tin!')
      return
    }
    if (!formData.email.includes('@')) {
      alert('Email chưa hợp lệ')
      return
    }
    setSubmitted(true)
  }

  function handleReset() {
    setFormData({ name: '', email: '', message: '' })
    setSubmitted(false)
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Form Events</h4>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Tên:</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Email:</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Tin nhắn:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit">Gửi</button>
            <button type="button" onClick={handleReset}>Xóa</button>
          </div>
        </form>
      ) : (
        <div>
          <div>✅ Đã gửi thành công!</div>
          <div>Tên: {formData.name}</div>
          <div>Email: {formData.email}</div>
          <div>Tin nhắn: {formData.message}</div>

          <div style={{ marginTop: 12 }}>
            <button onClick={handleReset}>Gửi lại</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormEvents
