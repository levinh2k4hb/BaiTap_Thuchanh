function SimpleVariables() {
  const ten = "Nguyễn Văn Minh";
  const tuoi = 20;
  const laSinhVien = true;
  const monHoc = ["HTML", "CSS", "JS", "React"];

  return (
    <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 12 }}>
      <h4>Simple Variables</h4>
      <p>Xin chào {ten}!</p>
      <p>Tuổi: {tuoi}</p>
      <p>Năm sau: {tuoi + 1}</p>
      <p>Sinh viên: {laSinhVien ? 'Có' : 'Không'}</p>
      <p>Môn học yêu thích: {monHoc.join(', ')}</p>
    </div>
  )
}

export default SimpleVariables
