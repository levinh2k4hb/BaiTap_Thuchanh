function BadCounter() {
  let count = 0; // Biến bình thường

  function handleClick() {
    count = count + 1;
    console.log('Count (var):', count);
  }

  return (
    <div style={{ padding: 12, border: '1px solid #fde68a', borderRadius: 8, marginBottom: 12 }}>
      <h4>❌ Counter "tệ" (dùng biến thường)</h4>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <p style={{ color: '#92400e', marginTop: 8 }}>⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!</p>
    </div>
  );
}

export default BadCounter;
