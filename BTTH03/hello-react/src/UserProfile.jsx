function UserProfile() {
  return (
    <section style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <img src="/src/assets/hero.png" alt="Ảnh đại diện" style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 12 }} />
      <div>
        <h3>Hồ sơ cá nhân</h3>
        <div style={{ marginTop: 6 }}>
          <div>
            <strong>Họ tên:</strong> <span>Minh</span>
          </div>
          <div style={{ marginTop: 6 }}>
            <strong>Email:</strong> <span>minh@example.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
