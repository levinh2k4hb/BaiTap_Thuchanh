import { useState } from 'react'

function GoodCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log('Count (useState):', count + 1);
  }

  return (
    <div style={{ padding: 12, border: '1px solid #bbf7d0', borderRadius: 8, marginBottom: 12 }}>
      <h4>✅ Counter "tốt" (dùng useState)</h4>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <p style={{ color: '#065f46', marginTop: 8 }}>✅ Nhấn nút → Số trên màn hình CẬP NHẬT!</p>
    </div>
  );
}

export default GoodCounter;
