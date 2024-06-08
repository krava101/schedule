import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';
import clsx from 'clsx';

function AuthNav() {
  const navLink = ({ isActive }) => clsx(s.navLink, isActive && s.active);
  return (
    <div className={s.authNav}>
      <NavLink className={navLink} to={'/registration'}>Registration</NavLink>
      <NavLink className={navLink} to={'/welcome'}>Log in</NavLink>
    </div>
  )
}

export default AuthNav;