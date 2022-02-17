import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from '../sass/components/navbar.module.scss';

export default function Navbar() {
  const aLinks = [
    {
      id: uuid(),
      path: '/math-magicians/',
      text: 'Home',
    },
    {
      id: uuid(),
      path: '/math-magicians/calculator',
      text: 'Calculator',
    },
    {
      id: uuid(),
      path: '/math-magicians/quote',
      text: 'Quote',
    },
  ];

  const {
    header, link, links, 'nav-section': navSection, title,
  } = styles;

  return (
    <header className={header}>
      <Link to={aLinks[0].path}>
        <h1 className={title}>Math Magicians</h1>
      </Link>
      <nav className={navSection}>
        <ul className={links}>
          {aLinks.map(({ id, path, text }) => (
            <li key={id}>
              <Link className={link} to={path}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
