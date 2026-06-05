function LifecycleDemo() {
  console.log('1️⃣ Component được gọi!');

  return (
    <div style={{ padding: 12, border: '1px dashed #c7c7c7', borderRadius: 8, marginBottom: 12 }}>
      <h3>Lifecycle Demo</h3>
      <p>Mở Console (F12) để xem log</p>
      <p>Component này chỉ render MỘT lần (trên production). Ở chế độ phát triển React StrictMode có thể render 2 lần.</p>
    </div>
  );
}

export default LifecycleDemo;
