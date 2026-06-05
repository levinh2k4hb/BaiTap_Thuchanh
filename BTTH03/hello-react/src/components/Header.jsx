import React from 'react'

function Header() {
  return (
    <header style={{ background: '#111827', color: '#fff', padding: '16px 24px', borderRadius: 8, marginBottom: 18 }}>
      <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.1rem', margin: 0 }}>Cửa hàng điện thoại</h1>
        <nav>
          <a href="#" style={{ color: '#fff', marginRight: 12 }}>Trang chủ</a>
          <a href="#" style={{ color: '#fff', marginRight: 12 }}>Sản phẩm</a>
          <a href="#" style={{ color: '#fff' }}>Liên hệ</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
