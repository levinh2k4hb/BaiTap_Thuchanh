import UserProfile from './UserProfile'
import ProductInfo from './ProductInfo'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import LifecycleDemo from './LifecycleDemo'
import BadCounter from './BadCounter'
import GoodCounter from './GoodCounter'
import FlowDemo from './FlowDemo'
import SimpleVariables from './SimpleVariables'
import TernaryDemo from './TernaryDemo'
import ListRendering from './ListRendering'
import NumberState from './NumberState'
import StringState from './StringState'
import BooleanState from './BooleanState'
import MultipleStates from './MultipleStates'
import './App.css'
import ClickEvents from './ClickEvents'
import InputEvents from './InputEvents'
import KeyboardEvents from './KeyboardEvents'
import FormEvents from './FormEvents'
import ListBasics from './ListBasics'
import CreateItem from './CreateItem'
import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'
import TodoApp from './TodoApp'

// Ví dụ đơn giản theo nội dung bài tập
function App() {
  return (
    <div className="app-shell">
      <Header />
      <section>
        <h1>Tên của bạn ở đây</h1>
        <p>Hôm nay là ngày đẹp trời</p>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <hr style={{ margin: '28px 0' }} />

      <h2>Ví dụ component: UserProfile</h2>
      <UserProfile />

      <h2 style={{ marginTop: 28 }}>Ví dụ component: ProductInfo</h2>
      <ProductInfo />

      <hr style={{ margin: '28px 0' }} />
      <h2>Sản phẩm nổi bật</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {[
          { id: 1, name: 'iPhone 15', price: '25.000.000', image: 'https://via.placeholder.com/400x300' },
          { id: 2, name: 'Samsung S24', price: '22.000.000', image: 'https://via.placeholder.com/400x300' },
          { id: 3, name: 'Xiaomi 14', price: '15.000.000', image: 'https://via.placeholder.com/400x300' }
        ].map(product => (
          <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
      
      <hr style={{ margin: '28px 0' }} />
      <h2>Exercises — Render & State</h2>
      <LifecycleDemo />
      <BadCounter />
      <GoodCounter />
      <FlowDemo />
      
      <hr style={{ margin: '28px 0' }} />
      <h2>JSX Variables & Lists</h2>
      <SimpleVariables />
      <TernaryDemo />
      <ListRendering />
      <hr style={{ margin: '28px 0' }} />
      <h2>useState Basics</h2>
      <NumberState />
      <StringState />
      <BooleanState />
      <MultipleStates />
      <hr style={{ margin: '28px 0' }} />
      <h2>Events — Click / Input / Keyboard / Form</h2>
      <ClickEvents />
      <InputEvents />
      <KeyboardEvents />
      <FormEvents />
      <hr style={{ margin: '28px 0' }} />
      <h2>Lists & CRUD</h2>
      <ListBasics />
      <CreateItem />
      <DeleteItem />
      <UpdateItem />
      <hr style={{ margin: '28px 0' }} />
      <h2>Mini Todo App</h2>
      <TodoApp />
      <Footer />
    </div>
  )
}

export default App
