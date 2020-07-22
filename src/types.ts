export interface Deputat {
  name: string
  office: string
  phones: string[]
  photo: string
  website: string
}

export interface Candidate {
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
}

export enum Parties {
  rodina = 'Партия "Родина"',
  yabloko = 'Партия "Яблоко"',
  lpr = 'Либертарианская партия России',
  kprf = 'КПРФ',
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
}

export interface Area {
  people: number
  news: { title: string; url: string }[]
  videos: { title: string; url: string }[]
  streets: string[]
}
