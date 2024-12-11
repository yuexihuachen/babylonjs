import { Outlet } from "react-router-dom"
import Menu from "./pages/menu/index"
import './App.css'

function App() {
  return (
    <>
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
            <Menu />
        </div>
        <div id="main">
            <div className="header">
                <h1>Page Title</h1>
                <h2>A subtitle for your page goes here</h2>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default App
