import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'I am a front-end developer', // e.g: 'Name | Developer'
  lang: 'en, fr', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello there!',
  name: 'My name is Prisca Marie Roseline',
  subtitle: 'I am a front-end developer who is passionate about building a meaningful thing for this world.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'feature.jpg',
    title: 'Country quiz',
    info: 'It is a website that are used to help people to know all of the countries in the world.',
    info2: '',
    url: "https://prisca-country-quiz.netlify.app/",
    repo: 'https://github.com/ravinalamada/country-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'birthday-app.jpg',
    title: 'Bithday app',
    info: 'An App that helps you to remember birthday dates of your friends',
    info2: '',
    url: 'https://birthday-app-prisca.netlify.app/',
    repo: 'https://github.com/ravinalamada/birthday-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photograph-screenshot.jpg',
    title: 'Photograph',
    info: 'It shows the pictures that we have took.',
    info2: '',
    url: 'https://prisca-photograph.netlify.app/',
    repo: 'https://github.com/ravinalamada/front-end-finals', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'prisca.ros@onja.org',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ravinalamada',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
