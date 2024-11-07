import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
const Header = () => {
  const [id, setId] = useState(25);
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="create">Create</Link>
            </li>
            <li>
              <Link to="exemple">Exemple</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </main>
  );
};

export default Header;
