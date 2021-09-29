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
  img: "bw-profile.jpg",
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
    img: "learn-gasy.png",
    title: "React Native App - Learn Malagasy",
    info:
      "This is a flashcard app that helps Malagasy speakers learn English and English Speakers learn Malagasy.",
    info2:
      "It is built with react native and redux for managing state. It's available on the app store",
    url:
      "https://play.google.com/store/apps/details?id=com.learngasy&hl=en&gl=US",
    url2:
      "https://play.google.com/store/apps/details?id=com.learngasy&hl=en&gl=US",
    repo: "https://github.com/onja-org/malagasy-rn-Bismuth",
  },
  {
    id: nanoid(),
    img: "vamalaka.png",
    title: "Ecommerce trading platform - Vamalaka",
    info:
      "This is a platform that users can use to sell products in Madagascar, cutting out the middle man and their fees.",
    info2:
      "It is built with React and TypeScript. Redux-toolkit is used to manage the reactive state.",
    url: "https://vamalaka-mahanoro.vercel.app/",
    repo: "https://github.com/onja-org/vamalaka-nivia",
  },
  {
    id: nanoid(),
    img: "country-quiz.png",
    title: "React App - Country Quiz",
    info: "It is an app that was built with react, context API and SASS.",
    info2:
      "It helps people learn the names of various countries in the world and their capitals.",
    url: "https://prisca-country-quiz.netlify.app/",
    repo: "https://github.com/ravinalamada/country-quiz",
  },
  {
    id: nanoid(),
    img: "birthday-app.png",
    title: "VanillaJS App - Birthday Reminder",
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
    title: "Photography site landing page",
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
