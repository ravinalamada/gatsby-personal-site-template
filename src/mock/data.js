import { nanoid } from "nanoid"

// HEAD DATA
export const headData = {
  title: "I am a front-end developer",
  lang: "en, fr",
  description: "Welcome to my website",
}

// HERO DATA
export const heroData = {
  name: "My name is Prisca Roseline.",
  subtitle: "I am a front-end developer.",
  cta: "",
}

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "I am a front-end developer who graduated from Onja, a social enterprise in Madagascar that trains underprivileged, talented young people into software developers. I grew up in Brickaville which is in the East region of Madagascar in a small village.",
  paragraphTwo:
    "I'm highly energetic and more importantly, I am always keen on learning new things.",
  paragraphThree:
    "I'm confident working with HTML, CSS/SASS, Vanilla JS, React, Typescript and React Native. And I'm eager to apply these skills in a company which values my skills in order to both contribute to the company to reach their goals and grow. I also believe every situation is an opportunity to learn and challenge what I have acquired.",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "country-quiz.png",
    title: "Country quiz",
    info: "It is an app that was built with react, context API and SASS.",
    info2:
      "It helps people learn the names of various countries in the world and their capitals.",
    url: "https://prisca-country-quiz.netlify.app/",
    repo: "https://github.com/ravinalamada/country-quiz",
  },
  {
    id: nanoid(),
    img: "birthday-app.png",
    title: "Birthday app",
    info:
      "I built this CRUD app from scratch using ES6 and ES2020. It's built with vanilla Javascript, css, and html.",
    info2:
      "It helps users to remember people's upcoming birthday who are added in the App.",
    url: "https://birthday-app-prisca.netlify.app/",
    repo: "https://github.com/ravinalamada/birthday-app",
  },
  {
    id: nanoid(),
    img: "photograph-screenshot.jpg",
    title: "Photograph",
    info:
      "I built this landing page from scratch using semantic HTML, CSS3 and SASS to create a responsive single webpage following BEM notation.",
    info2:
      "There are also some functionalities which are based on vanilla Javascript such as the image slider.",
    url: "https://prisca-photograph.netlify.app/",
    repo: "https://github.com/ravinalamada/front-end-finals",
  },
]

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "prisca.ros@onja.org",
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/ravinalamada",
    },
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
}
