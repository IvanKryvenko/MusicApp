import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h2>MusicForEveryone</h2>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/search'>
                <li>Search</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;