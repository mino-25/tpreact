import React, { useState } from "react";
import './index.css'

import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="create">Create</Link>
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
