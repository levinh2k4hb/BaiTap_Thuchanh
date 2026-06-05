function TernaryDemo() {
  const isLoggedIn = true;
  const score = 85;

  return (
    <div style={{ padding: 12, border: '1px solid #e6f7ff', borderRadius: 8, marginBottom: 12 }}>
      <h4>Ternary & Conditional Rendering</h4>
      <p>{isLoggedIn ? 'Chào mừng bạn!' : 'Vui lòng đăng nhập'}</p>
      <p>Kết quả: {score >= 5 ? 'Đậu' : 'Rớt'}</p>
      <p>
        Xếp loại: {score >= 9 ? 'Xuất sắc' : score >= 8 ? 'Giỏi' : score >= 7 ? 'Khá' : score >= 5 ? 'Trung bình' : 'Yếu'}
      </p>

      <hr />

      <h5>Ví dụ với &&</h5>
      {true && <p style={{ color: '#065f46' }}>Bạn có thông báo mới!</p>}
    </div>
  )
}

export default TernaryDemo
