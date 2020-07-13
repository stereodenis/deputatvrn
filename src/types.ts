export interface Deputat {
  name: string
  office: string
  phones: string[]
  photo: string
  website: string
}

export interface Candidat {
  name: string
  telegram?: string
  role?: string
  party?: Parties
  project?: Project
}

export enum Parties {
  rodina = 'Партия "Родина"',
  yabloko = 'Партия "Яблоко"',
  lpr = 'Либертарианская партия России',
}

export enum Project {
  git = 'Город и Транспорт',
  gorpr = 'Городские проекты Ильи Варламова и Максима Каца',
  navalny = 'Штаб Навального',
}
