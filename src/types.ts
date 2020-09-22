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
  lost = 'Утративший статус выдвинутого кандидата',
  mandatRejected = 'Отказ от мандата',
}

export enum LocationType {
  city = 'Город',
  region = 'Область',
}

export interface Candidate {
  areaNumber: number
  callNumber: number
  listNumber?: number
  locationType: LocationType
  party?: Parties
  project?: Project
  role?: string
  status?: CandidateStatuses
  program?: string
  problems?: string[]
  message?: string
  deputat?: {
    office?: string
    phones?: string[]
    website?: string
    time?: string // Время работы приемной
    // TODO
    helpers?: string[]
  }
}

export interface Video {
  title: string
  url: string
  date: string
  objects: {
    type: 'person' | 'area'
    id: string
  }[]
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
  kpkr = 'КПКР',
  ipr = 'Интернациональная партия России',
  pensioners = 'Партия пенсионеров',
  ppd = 'Партия прямой демократии',
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
  streets?: string[]
}
