import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuItems = [
  {
    title: 'Marketing',
    path: '/marketing',
    cName: 'dropdown-link'
  },
  {
    title: 'Consulting',
    path: '/consulting',
    cName: 'dropdown-link'
  },
  {
    title: 'Design',
    path: '/design',
    cName: 'dropdown-link'
  },
  {
    title: 'Development',
    path: '/development',
    cName: 'dropdown-link'
  }
];

function About() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default About;
