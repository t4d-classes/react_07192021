import { Link } from 'react-router-dom';


export const MenuBar = ({ menuItems }) => {

  return (
    <nav id="menu-bar" className="col-md-8">
      <ul>
        {menuItems.map(menuItem => <li key={menuItem.id}>
          <Link to={menuItem.to}>{menuItem.label}</Link>
        </li>)}
      </ul>
    </nav>
  )

};