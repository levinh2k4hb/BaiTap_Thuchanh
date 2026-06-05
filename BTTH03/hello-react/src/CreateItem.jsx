import { useRef, useState } from 'react'

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' }
  ])
  const [newName, setNewName] = useState('')
  const [msg, setMsg] = useState('')
  const inputRef = useRef(null)

  function handleAdd() {
    if (newName.trim() === '') return
    const newItem = { id: Date.now(), name: newName.trim() }
    setItems(prev => [...prev, newItem])
    setNewName('')
    setMsg('Đã thêm thành công!')
    // focus back
    inputRef.current && inputRef.current.focus()
    setTimeout(() => setMsg(''), 2000)
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h4>Thêm môn học</h4>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          ref={inputRef}
          value={newName}
          onChange={e => setNewName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập tên môn học..."
          style={{ padding: 8, flex: 1 }}
        />
        <button onClick={handleAdd}>➕ Thêm</button>
      </div>
      {msg && <div style={{ color: '#065f46', marginTop: 8 }}>{msg}</div>}

      <div style={{ marginTop: 12 }}>
        Danh sách ({items.length} môn):
        <ul>
          {items.map(it => (
            <li key={it.id}>{it.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CreateItem
