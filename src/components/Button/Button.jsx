import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ children, variant, to, type = 'button', className = '', ...props }) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
