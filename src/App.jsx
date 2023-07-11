import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRoutes } from './routers/routes'

function App() {
  return (
    <>
      <header>
        <div className='logo-container'>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Vite + React</p>
        </div>
        <h1 className='page-title'>🎬 Películas</h1>
      </header>
      <MyRoutes />
    </>
  )
}

export default App
