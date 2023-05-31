import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/UserTable">
                <button>User Table</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
