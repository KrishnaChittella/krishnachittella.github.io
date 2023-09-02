import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/KrishnaChittella',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/krishnachittella',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/itsme_krishnachittella/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/krishna-chittella-72a51420b/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  /*
  {
    link: 'https://angel.co/michael-d-angelo',
    label: 'Angel List',
    icon: faAngellist,
  }, */
  /*
  {
    link: 'https://twitter.com/dangelosaurus',
    label: 'Twitter',
    icon: faTwitter,
  }, */
  {
    link: 'mailto:krishna.chittella@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
