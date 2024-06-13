import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Drim',
      category: {
        id: 1,
        date: {
          en: 'November 2021',
        },
        title: {
          en: 'E Commerce Company Website',
        },
      },
      content: {
        en: 'This website was made for Drim, who sells healthy drinks online.',
      },
      desc: {
          en: 'View Project',
        },
      image: '/images/drim.png',
      url: 'https://www.drimhq.com',
    },
    {
      id: 2,
      title: 'Helolokal',
      category: {
        id: 1,
        date: {
          en: 'June 2022',
        },
        title: {
          en: 'Travelling Platform',
        },
      },
      content: {
        en: 'This website was made for Helolokal, a platform offering tourists a tour guide.',
      },
      desc: {
          en: 'View Project',
        },
      image: '/images/helolokal.png',
      url: 'https://www.helolokal.com',
    },
    {
      id: 4,
      title: 'Findall',
      category: {
        id: 1,
        date: {
          en: 'November 2023',
        },
        title: {
          en: 'B2B E Commerce Website',
        },
      },
      content: {
        en: 'This website was made for Findall, who offers users an easy directory to find any businesses in Malaysia to source for products/services.',
      },
      desc: {
          en: 'View Project',
        },
      image: '/images/findall.png',
      url: 'https://www.findall.com.my',
    },
    // {
    //   id: 4,
    //   title: 'Havilah Capital',
    //   category: {
    //     id: 1,
    //     date: {
    //       en: 'November 2021',
    //     },
    //     title: {
    //       en: 'Company Website',
    //     },
    //   },
    //   content: {
    //     en: 'This website was made for Havilah Capital, who offers consulting services to business owners in regards to financial and company growth.',
    //   },
    //   desc: {
    //       en: 'View Project',
    //     },
    //   image: '/images/drim.png',
    //   url: 'https://www.havilahcap.com',
    // },
  ]
})
