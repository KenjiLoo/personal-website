import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'Laravel is my main tool in building maintainable and scalable WebApps. I build apps driven by APIs written in Laravel, which will be used by any client side technology I choose to use.'
      },
      icon: 'devicon:laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: 'I use Vue to build beautiful client-side UI which are user-friendly and intuitive. Vue.js allows me to write code that are structured and scalable.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'Postman',
      description: {
        en: 'To test if my APIs work, I use Postman to ensure the APIs are behaving as they should. I use Postman also as a collection of my APIs for each project and document them accordingly, with descriptions of the API and an example response.',
      },
      icon: 'devicon:postman',
      image: null,
    },
    {
      id: 4,
      title: 'Git',
      description: {
        en: 'Version control is an absolute neccesary for every project I engage in. Hence, I am proficient in Git and git related technologies.',
      },
      icon: 'devicon:git',
      image: null,
    },
    {
      id: 5,
      title: 'Python',
      description: {
        en: 'As my first programming language that I learnt, Python has been my go-to when I attempt Data Structures and Algorithms questions. Many ML related projects that I have done are based on Python as well.',
      },
      icon: 'devicon:python',
      image: null,
    },
    {
      id: 6,
      title: 'SQL',
      description: {
        en: 'SQL is an essential for any Backend Developers out there. Having to deal with tons of databases daily, I am extremely proficient in writing SQL that are optimized.',
      },
      icon: 'devicon:mysql',
      image: null,
    },
    {
      id: 7,
      title: 'Solidity',
      description: {
        en: 'As a blockchain entusiast, I have put my hands on small Web3 projects that requires Solidity for Smart Contract Development.',
      },
      icon: 'devicon:solidity',
      image: null,
    }
  ]
})
