function ListRendering() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho"];
  const students = [
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 }
  ];

  return (
    <div style={{ padding: 12, border: '1px solid #eef2ff', borderRadius: 8, marginBottom: 12 }}>
      <h4>List Rendering</h4>

      <h5>Danh sách trái cây</h5>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h5>Danh sách sinh viên</h5>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 6 }}>STT</th>
            <th style={{ textAlign: 'left', padding: 6 }}>Tên</th>
            <th style={{ textAlign: 'left', padding: 6 }}>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td style={{ padding: 6 }}>{index + 1}</td>
              <td style={{ padding: 6 }}>{student.name}</td>
              <td style={{ padding: 6 }}>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListRendering
