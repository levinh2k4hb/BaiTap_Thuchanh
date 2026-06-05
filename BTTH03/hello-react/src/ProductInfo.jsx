function ProductInfo() {
  return (
    <article style={{ border: '1px solid #e6e9ee', padding: 12, borderRadius: 8, maxWidth: 360 }}>
      <h3>iPhone 15</h3>
      <p style={{ fontWeight: 700 }}>25.000.000đ</p>
      <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
      </ul>
      <button style={{ marginTop: 12, padding: '8px 12px', borderRadius: 8, background: '#0ea5a4', color: '#fff', border: 'none' }}>Mua ngay</button>
    </article>
  )
}

export default ProductInfo
