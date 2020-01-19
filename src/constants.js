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
  {
    id: 'monalisa',
    name: 'Mona Lisa',
    superpower: 'By not Leonardo da Vinci'
  },
  {
    id: 'lastsupper',
    name: 'Last Supper',
    superpower: 'Also not by da Vinci'
  },
  {
    id: 'david',
    name: 'David',
    superpower: 'My self portrait'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  //TODO: add other content creators
]
