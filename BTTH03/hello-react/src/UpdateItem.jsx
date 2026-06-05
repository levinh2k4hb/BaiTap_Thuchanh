import { useState } from 'react'

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 }
  ])

  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')
  const [msg, setMsg] = useState('')

  function startEdit(item) {
    setEditingId(item.id)
    setEditName(item.name)
    setEditAge(item.age.toString())
  }

  function saveEdit() {
    if (editName.trim() === '' || editAge.trim() === '') return
    setItems(prev => prev.map(item => item.id === editingId ? { ...item, name: editName.trim(), age: parseInt(editAge) } : item))
    setEditingId(null)
    setMsg('Đã lưu!')
    setTimeout(() => setMsg(''), 2000)
  }

  function cancelEdit() {
    setEditingId(null)
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Sửa thông tin</h4>
      {msg && <div style={{ color: '#065f46', marginBottom: 8 }}>{msg}</div>}
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: 8 }}>
            {editingId === item.id ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input value={editName} onChange={e => setEditName(e.target.value)} onKeyDown={handleKeyPress} autoFocus style={{ padding: 6 }} />
                <input value={editAge} onChange={e => setEditAge(e.target.value)} onKeyDown={handleKeyPress} style={{ padding: 6, width: 80 }} />
                <button onClick={saveEdit} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '6px 8px', borderRadius: 6 }}>✓ Lưu</button>
                <button onClick={cancelEdit} style={{ padding: '6px 8px' }}>✕ Hủy</button>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.name} - {item.age} tuổi</span>
                <button onClick={() => startEdit(item)} style={{ background: '#3498db', color: 'white', border: 'none', padding: '6px 8px', borderRadius: 6 }}>✏️ Sửa</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UpdateItem
