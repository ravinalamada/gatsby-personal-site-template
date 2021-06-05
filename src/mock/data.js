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
    "I am a front-end developer who graduates from Onja. I grew up in Brickaville which is a district in the East region of Madagascar but I live in Mahanoro at the moment, in where Onja is based.",
  paragraphTwo:
    "I'm highly energetic and more importantly, I am always keen on learning new things however important it is.",
  paragraphThree:
    "I'm confident with HTML, CSS/SASS, React and vanilla Javascript, and I'm still excited to strenghen and add these skills whenever it's necessary. I'd like to work with company or team which appreciates me and I can contribute in the long term anywhere in the world.",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "country-quiz.png",
    title: "Country quiz",
    info: "It is an app that was built with react, context API and sass.",
    info2:
      "It helps people learn the name of the countries in the world and their capital.",
    url: "https://prisca-country-quiz.netlify.app/",
    repo: "https://github.com/ravinalamada/country-quiz",
  },
  {
    id: nanoid(),
    img: "birthday-app.png",
    title: "Bithday app",
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
      "This is a website that shows a picture which have been taken. It is built from scratch using semantic HTML, CSS3 and SASS to create a responsive single webpage following BEM notation.",
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
      name: "twitter",
      url: "",
    },
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
