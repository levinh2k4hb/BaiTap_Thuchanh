import React from 'react'

function TodoFilter({ filter, setFilter }) {
  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'active', label: 'Chưa xong' },
    { key: 'completed', label: 'Hoàn thành' }
  ]

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      {filters.map(f => (
        <button key={f.key} onClick={() => setFilter(f.key)} style={{ flex: 1, padding: 8, background: filter === f.key ? '#3498db' : '#f0f0f0', color: filter === f.key ? 'white' : '#333', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
