import { useState } from 'react'

function StringState() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const charCount = name.length
  const emailValid = email.includes('@')

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>useState — Strings & Controlled Inputs</h4>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Tên:</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nhập tên..." />
        <div style={{ fontSize: 12, color: '#6b7280' }}>{charCount}/100 ký tự</div>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Email:</label>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Nhập email..." />
        <div style={{ fontSize: 12, color: emailValid ? '#065f46' : '#b91c1c' }}>
          {emailValid ? 'Email hợp lệ' : 'Email chưa hợp lệ'}
        </div>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Mật khẩu:</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Nhập mật khẩu..." />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Ẩn' : 'Hiện'}</button>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5>Thông tin đã nhập:</h5>
        <div>Tên: {name || '(chưa nhập)'}</div>
        <div>Email: {email || '(chưa nhập)'}</div>
        {name && (
          <div style={{ marginTop: 8 }}>Xin chào <strong>{name}</strong>! Email của bạn là {email}</div>
        )}
      </div>
    </div>
  )
}

export default StringState
