import './SocialLinks.scss';

const socialLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 5.5 17.9 18.8c-.2 1-.8 1.2-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.3c.4-.4-.1-.6-.7-.2L7.2 13.1 2.6 11.8c-1-.3-1-1 .2-1.5L19.8 4c.8-.3 1.5.2 1.2 1.5Z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    href: 'https://www.viber.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.8 2.3c4.4 0 7.9 3.1 7.9 7.4 0 4.1-3.4 7.2-7.8 7.2h-.8c-.5 0-.9.1-1.5.3l-1.1.4-1.1 2.6c-.1.2-.3.3-.5.3-.2 0-.3-.1-.3-.3 0-.2.1-.4.2-.7l.9-1.9c.2-.4.3-.8.3-1.3v-.8c-3.7-.6-6.2-3.8-6.2-7.2 0-4.2 3.6-7.4 8-7.4Zm-5 8.3c0 2.2 1.8 4.1 4.2 4.1h.4c.4 0 .7.3.7.7v.4c0 .2.1.3.2.3.1.1.3.1.4 0l1.5-1.5c.1-.1.1-.3 0-.4-.1-.1-.3-.2-.5-.2h-.5c-.5 0-.9-.4-.9-.9V9.6c0-.4-.3-.7-.7-.7H7.8c-.4 0-.7.3-.7.7Zm7.4-1.7c-.4 0-.7.3-.7.7v.5c0 .4.3.7.7.7h.9c.4 0 .7-.3.7-.7v-.5c0-.4-.3-.7-.7-.7h-.9Zm-3.6 0c-.4 0-.7.3-.7.7v.5c0 .4.3.7.7.7h.9c.4 0 .7-.3.7-.7v-.5c0-.4-.3-.7-.7-.7h-.9Zm3.6 3.1c-.4 0-.7.3-.7.7v.5c0 .4.3.7.7.7h.9c.4 0 .7-.3.7-.7v-.5c0-.4-.3-.7-.7-.7h-.9Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4A5.3 5.3 0 0 1 16.7 22H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 1.8A3.5 3.5 0 0 0 3.8 7.3v9.4A3.5 3.5 0 0 0 7.3 20.2h9.4a3.5 3.5 0 0 0 3.5-3.5V7.3a3.5 3.5 0 0 0-3.5-3.5H7.3Zm9.5 1.5h.1V7.5h-1.1v1.3h1.1v.1Zm-8.7 2.2A4.5 4.5 0 1 1 12 18.7 4.5 4.5 0 0 1 8.1 7.5Zm0 1.8A2.7 2.7 0 1 0 12 14.8a2.7 2.7 0 0 0-3.9-2.5Z" />
      </svg>
    ),
  },
];

function SocialLinks({ theme = 'light' }) {
  return (
    <div className={`social-links social-links--${theme}`}>
      {socialLinks.map(({ label, href, icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="social-links__item" aria-label={label}>
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
