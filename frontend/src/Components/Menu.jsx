// Menu.jsx

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className='heading'>Popular Dishes</h1>
          <p>Explore our diverse selection of popular dishes from around the world. Whether you crave the rich flavors of Indian spices, the savory delights of Chinese cuisine, or the comforting taste of Italian pasta, our menu offers something for every palate.</p>
        </div>
        <div className="dishes_container">
          <Link to="/menu/indian" className='card'>
            <img src="/indian.jpg" alt="Indian Cuisine" />
            <h3>Indian</h3>
          </Link>
          <Link to="/menu/chinese" className='card'>
            <img src="/chineese.jpg" alt="Chinese Cuisine" />
            <h3>Chinese</h3>
          </Link>
          <Link to="/menu/italian" className='card'>
            <img src="/italian.jpg" alt="Italian Cuisine" />
            <h3>Italian</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
