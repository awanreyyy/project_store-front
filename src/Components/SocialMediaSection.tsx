import React from 'react';

interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Threads',
    url: 'https://twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'fab fa-instagram',
  },
  {
    name: 'Facebook',
    url: 'https://instagram.com',
    icon: 'fab fa-facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fab fa-twitter',
  },
  // Add more social media links here
];

const SocialMediaSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Find us on social media</h2>
      <ul className="flex space-x-4">
        {socialMediaLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <i className={`${link.icon} mr-1`}></i>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialMediaSection;
