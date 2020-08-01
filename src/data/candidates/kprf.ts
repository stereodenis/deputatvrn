import * as photos from '../../images/candidates'
import { CandidateStatuses, Parties, Person } from '../../types'

const kprf: Person[] = [
  {
    name: 'Бирюков Михаил Евгеньевич',
    alias: 'birukov',
    birthdate: '07.05.1961',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 1,
        callNumber: 5,
        party: Parties.kprf,
      },
    ],
  },
  {
    alias: 'proshunin',
    name: 'Прошунин Александр Вячеславович',
    birthdate: '02.08.1984',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 2,
        party: Parties.kprf,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'verbovaya',
    name: 'Вербовая Елена Петровна',
    birthdate: '31.12.1972',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 3,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'zarezkih',
    name: 'Зарецких Алексей Александрович',
    birthdate: '06.10.1977',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 4,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kovalevskii',
    name: 'Ковалевский Валентин Вячеславович',
    birthdate: '14.02.1996',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 5,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'shelyakin',
    name: 'Шелякин Артур Дмитриевич',
    birthdate: '05.05.1967',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 6,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kalinin',
    name: 'Калинин Владимир Александрович',
    birthdate: '08.06.1985',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kalinin_va.jpg',
    candidate: [
      {
        callNumber: 4,
        areaNumber: 7,
        party: Parties.kprf,
        deputat: {
          office: 'Ленинский проспект, 15 оф 203',
          phones: ['+74732585816', '+79290064478'],
          website: 'http://gorduma-voronezh.ru/kalinin-vladimir-aleksandrovich/',
        },
      },
      {
        callNumber: 5,
        areaNumber: 7,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zazepin',
    name: 'Зацепин Алексей Александрович',
    birthdate: '27.05.1979',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 8,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'korchagin',
    name: 'Корчагин Павел Александрович',
    birthdate: '16.06.1969',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 9,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kovalev',
    name: 'Ковалёв Василий Николаевич',
    birthdate: '20.07.1980',
    photo: photos.kovalev_vasiliy,
    candidate: [
      {
        party: Parties.kprf,
        areaNumber: 10,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'sivoplyasov',
    name: 'Сивоплясов Александр Александрович',
    birthdate: '27.09.1990',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 11,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'krylov',
    name: 'Крылов Андрей Игоревич',
    birthdate: '08.06.1966',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 12,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'spivakov',
    name: 'Спиваков Максим Васильевич',
    birthdate: '12.01.1977',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 13,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'pomeranzev',
    name: 'Померанцев Андрей Сергеевич',
    birthdate: '08.03.1976',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 14,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kudrevatykh',
    name: 'Кудреватых Вячеслав Анатольевич',
    birthdate: '06.10.1977',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 15,
        party: Parties.kprf,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'ryabov',
    name: 'Рябов Алексей Анатольевич',
    birthdate: '26.12.1992',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 16,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'sitnikov',
    name: 'Ситников Максим Михайлович',
    birthdate: '17.05.1989',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 17,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    name: 'Глуховцев Даниил Сергеевич',
    alias: 'gluhovzev',
    birthdate: '02.08.1998',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 18,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'shabunin',
    name: 'Шабунин Александр Николаевич',
    birthdate: '19.07.1985',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 19,
        party: Parties.kprf,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'emelyanov',
    name: 'Емельянов Евгений Владимирович',
    birthdate: '04.07.1968',
    photo: photos.noPhoto,
    candidate: [
      {
        areaNumber: 20,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kadanzev',
    name: 'Каданцев Михаил Михайлович',
    birthdate: '15.01.1991',
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 21,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kobylkin',
    name: 'Кобылкин Владислав Васильевич',
    birthdate: '27.06.1983',
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 22,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zverev',
    name: 'Зверев Николай Николаевич',
    birthdate: '04.09.1997',
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 23,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'roslik',
    name: 'Рослик Денис Викторович',
    birthdate: '09.07.1986',
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 24,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default kprf
