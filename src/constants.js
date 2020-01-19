import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'art',
    name: 'Artist',
    superpower: 'You draw stuff'
  },
  {
    id: 'movie',
    name: 'Animator',
    superpower: 'You make drawn stuff move'
  },
  {
    id: 'music',
    name: 'Musician',
    superpower: 'You make noise from stuff'
  },
  {
    id: 'game',
    name: 'Game Developer',
    superpower: 'You make fun stuff'
  }
]

export const TERRITORIES = [
  // {
  //   id: 'forest',
  //   name: 'Forest',
  //   superpower: 'Trees!'
  // },
  // {
  //   id: 'tundra',
  //   name: 'Tundra',
  //   superpower: 'Let it snow!'
  // },
  // {
  //   id: 'desert',
  //   name: 'Desert',
  //   superpower: 'Sand man!'
  // }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  //TODO: add other content creators
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://animalkingdoms.netlify.com',
    ruler: 'meepers.id.blockstack'
  },  
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  }
]
