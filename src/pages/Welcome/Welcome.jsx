import { Link } from "react-router-dom";
import s from './Welcome.module.scss';


function Welcome() {
  return (
    <div className={s.welcome}>
      <Link className={s.reg} to={'/registration'}>Registration</Link>
      <Link className={s.login} to={'/login'}>Log in</Link>
    </div>
  )
}

export default Welcome;