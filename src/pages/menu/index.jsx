import {Link} from 'react-router-dom';


function Menu() {
  return (
    <>
    <div className="pure-menu">
            <a className="pure-menu-heading" href="#company">Babylonjs</a>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link className="pure-menu-link" to={'/index'}>Demo1</Link>
                </li>
                <li className="pure-menu-item">
                  <a href="#about" className="pure-menu-link">Demo2</a></li>
                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Demo3</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Menu
