export interface Deputat {
  name: string
  office: string
  phones: string[]
  photo: string
  website: string
}

export enum CandidateStatuses {
  registered = 'Зарегистрирован',
  declined = 'Отказ в регистрации',
}

export enum LocationType {
  city = 'Город',
  region = 'Область',
}

interface Candidate {
  areaNumber: number
  callNumber: number
  locationType: LocationType
  party?: Parties
  project?: Project
  role?: string
  status?: CandidateStatuses
  program?: string
  problems?: string[]
  message?: string
  deputat?: {
    office: string
    phones: string[]
    website: string
  }
}

export interface Person {
  name: string
  alias: string
  birthdate: string
  photo?: string
  links?: { title: LinkTitle; url: string }[]
  bio?: string
  candidate: Candidate[]
}

export enum Parties {
  rodina = 'Родина',
  yabloko = 'Яблоко',
  kprf = 'КПРФ',
  newPeople = 'Новые Люди',
  er = 'Единая Россия',
  sr = 'Справедливая Россия',
  ldpr = 'ЛДПР',
  zaPravdu = 'За правду',
  rosta = 'Партия Роста',
  zaSprav = 'За справедливость!',
  dem = 'Демократическая партия России',
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
  youtube = 'Youtube',
}

export interface Area {
  people: number
  news?: { title: string; url: string }[]
  videos?: { title: string; url: string }[]
  streets?: string[]
}
