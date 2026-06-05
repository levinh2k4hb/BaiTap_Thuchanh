import { useState } from 'react'

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Minh' },
    { id: 2, name: 'An' },
    { id: 3, name: 'Linh' }
  ])
  const [msg, setMsg] = useState('')

  function handleDelete(id) {
    const item = items.find(i => i.id === id)
    if (!item) return
    if (!window.confirm(`Bạn có chắc muốn xóa "${item.name}" không?`)) return
    setItems(prev => prev.filter(i => i.id !== id))
    setMsg(`Đã xóa ${item.name}`)
    setTimeout(() => setMsg(''), 3000)
  }

  function handleDeleteAll() {
    if (items.length === 0) return
    if (window.confirm('Xóa tất cả?')) setItems([])
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Xóa sinh viên</h4>
      {items.length > 0 && (
        <div style={{ marginBottom: 8 }}>
          <button onClick={handleDeleteAll} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6 }}>🗑 Xóa tất cả</button>
        </div>
      )}

      {msg && <div style={{ color: '#065f46', marginBottom: 8 }}>{msg}</div>}

      {items.length === 0 ? (
        <div>Danh sách trống</div>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0' }}>
              <span>{item.name}</span>
              <button onClick={() => handleDelete(item.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '4px 8px', borderRadius: 6 }}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DeleteItem
