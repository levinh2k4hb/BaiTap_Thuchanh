import { useState } from 'react'

function FlowDemo() {
  console.log('🔄 Component render!');
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Luồng hoạt động</h4>
      <p>Bước hiện tại: {step}</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setStep(step + 1)}>Bước tiếp theo →</button>
        <button onClick={() => setStep(1)}>Quay lại đầu</button>
      </div>

      <div>
        {step === 1 && <div>👋 Bước 1: Xin chào!</div>}
        {step === 2 && <div>📖 Bước 2: Đang học React</div>}
        {step === 3 && <div>🎯 Bước 3: Hiểu useState</div>}
        {step === 4 && <div>🎉 Bước 4: Hoàn thành!</div>}
      </div>
    </div>
  );
}

export default FlowDemo;
