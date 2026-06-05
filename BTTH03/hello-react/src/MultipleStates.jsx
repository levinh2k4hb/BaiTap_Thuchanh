import { useState } from 'react'

function MultipleStates() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [isStudent, setIsStudent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (name.trim() === '' || age === '' || email.trim() === '') {
      alert('Vui lòng nhập đầy đủ thông tin!')
      return
    }
    const ageNum = Number(age)
    if (isNaN(ageNum) || ageNum <= 0) {
      alert('Tuổi phải là số lớn hơn 0')
      return
    }
    if (!email.includes('@')) {
      alert('Email chưa hợp lệ')
      return
    }
    setSubmitted(true)
  }

  function handleReset() {
    setName('')
    setAge('')
    setEmail('')
    setIsStudent(false)
    setSubmitted(false)
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Multiple useState — Form đăng ký</h4>

      {!submitted ? (
        <div>
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Tên:</label>
            <input value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Tuổi:</label>
            <input value={age} onChange={e => setAge(e.target.value)} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Email:</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>
              <input type="checkbox" checked={isStudent} onChange={e => setIsStudent(e.target.checked)} />{' '}
              Là sinh viên
            </label>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={handleSubmit}>Đăng ký</button>
            <button onClick={handleReset} type="button">Hủy</button>
          </div>
        </div>
      ) : (
        <div>
          <div>✅ Đăng ký thành công!</div>
          <div>Tên: {name}</div>
          <div>Tuổi: {age}</div>
          <div>Sinh viên: {isStudent ? 'Có' : 'Không'}</div>

          <div style={{ marginTop: 12 }}>
            <button onClick={handleReset}>Đăng ký lại</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MultipleStates
