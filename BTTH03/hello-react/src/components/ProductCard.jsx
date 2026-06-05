import React from 'react'

function ProductCard({ name, price, image }) {
  return (
    <div style={{ border: '1px solid #e6e9ee', borderRadius: 10, padding: 12, textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
      <h3 style={{ margin: '8px 0' }}>{name}</h3>
      <p style={{ fontWeight: 700 }}>{price} đ</p>
      <button style={{ marginTop: 8, padding: '8px 12px', borderRadius: 8, background: '#2563eb', color: '#fff', border: 'none' }}>
        Thêm vào giỏ
      </button>
    </div>
  )
}

export default ProductCard
