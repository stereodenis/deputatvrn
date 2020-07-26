export interface Deputat {
  name: string
  office: string
  phones: string[]
  photo: string
  website: string
}

export interface Candidate {
  areaNumber: number
  name: string
  alias: string
  role?: string
  party?: Parties
  project?: Project
  photo: string
  links?: { title: LinkTitle; url: string }[]
  bio?: string
  program?: string
  problems?: string[]
  message?: string
}

export enum Parties {
  rodina = 'Родина',
  yabloko = 'Яблоко',
  kprf = 'КПРФ',
  newPeople = 'Новые Люди',
  er = 'Единая Россия',
  sr = 'Справедливая Россия',
}

export enum Project {
  git = 'Город и Транспорт',
  gorpr = 'Городские проекты Ильи Варламова и Максима Каца',
  navalny = 'Штаб Навального',
}

export enum LinkTitle {
  telegram = 'Телеграм',
  facebook = 'Фейсбук',
  vk = 'Вконтакте',
  instagram = 'Инстаграм',
  twitter = 'Твиттер',
  lj = 'ЖЖ',
  gorprojects = 'Страница на сайте "Городских проектов"',
  whatsapp = 'WhatsApp',
  website = 'Вебсайт',
}

export interface Area {
  people: number
  news: { title: string; url: string }[]
  videos: { title: string; url: string }[]
  streets: string[]
}
