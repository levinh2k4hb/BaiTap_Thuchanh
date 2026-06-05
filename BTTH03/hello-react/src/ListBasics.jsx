import { useState } from 'react'

function ListBasics() {
  const [fruits] = useState(['Táo', 'Chuối', 'Cam', 'Nho'])

  const [students] = useState([
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 }
  ])

  const avgAge = (students.reduce((s, st) => s + st.age, 0) / students.length).toFixed(1)

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>List Basics</h4>

      <h5>Danh sách trái cây</h5>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{index + 1}. {fruit}</li>
        ))}
      </ul>

      <h5>Danh sách sinh viên</h5>
      <ul>
        {students.map((student, index) => (
          <li key={student.id} style={{ color: student.age >= 20 ? '#065f46' : 'inherit' }}>
            {index + 1}. {student.name} - {student.age} tuổi
          </li>
        ))}
      </ul>

      <div>Tuổi trung bình: <strong>{avgAge}</strong></div>
    </div>
  )
}

export default ListBasics
