import { useState } from 'react'
import TodoItem from './components/TodoItem'
import TodoFilter from './components/TodoFilter'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')

  function addTodo() {
    if (inputValue.trim() === '') return
    const newTodo = { id: Date.now(), text: inputValue.trim(), done: false }
    setTodos(prev => [...prev, newTodo])
    setInputValue('')
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') addTodo()
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done
    if (filter === 'completed') return todo.done
    return true
  })

  const activeCount = todos.filter(t => !t.done).length
  const completedCount = todos.filter(t => t.done).length

  const placeholder = filter === 'all' ? 'Nhập công việc...' : filter === 'active' ? 'Thêm công việc (Chưa xong)' : 'Thêm công việc (Hoàn thành)'

  return (
    <div style={{ padding: 12, border: '1px solid #e6e9ee', borderRadius: 8, marginBottom: 12 }}>
      <h3>📋 Todo List</h3>

      <div style={{ display: 'flex', gap: 0, marginBottom: 12 }}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyPress} placeholder={placeholder} style={{ flex: 1, padding: 10, fontSize: 16, border: '2px solid #ddd', borderRadius: '4px 0 0 4px' }} />
        <button onClick={addTodo} style={{ padding: '10px 14px', borderRadius: '0 4px 4px 0', border: 'none', background: '#2563eb', color: '#fff' }}>Thêm</button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        <div style={{ padding: 16, color: '#6b7280' }}>{todos.length === 0 ? '📝 Chưa có công việc nào' : 'Không có công việc phù hợp'}</div>
      ) : (
        <div style={{ border: '1px solid #f3f4f6', borderRadius: 6, overflow: 'hidden' }}>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </div>
      )}

      {todos.length > 0 && (
        <div style={{ marginTop: 12, color: '#374151' }}>
          <div>{activeCount} việc chưa hoàn thành</div>
          {completedCount > 0 && <div style={{ color: '#6b7280' }}>{completedCount} việc đã xong</div>}
        </div>
      )}
    </div>
  )
}

export default TodoApp
