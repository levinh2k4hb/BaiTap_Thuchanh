import React from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderBottom: '1px solid #f3f4f6' }}>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} style={{ marginRight: 10 }} />
      <div style={{ flex: 1 }}>
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#9ca3af' : '#111827' }}>{todo.text}</span>
      </div>
      <button onClick={() => onDelete(todo.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '4px 8px', borderRadius: 4, cursor: 'pointer' }}>🗑</button>
    </div>
  )
}

export default TodoItem
