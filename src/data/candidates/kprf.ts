import * as photos from '../../images/candidates'
import { Person, CandidateStatuses, Parties } from '../../types'

const kprf: Person[] = [
  {
    name: 'Бирюков Михаил Евгеньевич',
    alias: 'birukov',
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
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kalinin_va.jpg',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 7,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 7,
        party: Parties.kprf,
        office: 'Ленинский проспект, 15 оф 203',
        phones: ['+74732585816', '+79290064478'],
        website: 'http://gorduma-voronezh.ru/kalinin-vladimir-aleksandrovich/',
      },
    ],
  },
  {
    alias: 'zazepin',
    name: 'Зацепин Алексей Александрович',
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
    name: 'Ковалев Василий Николаевич',
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
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 23,
        party: Parties.kprf,
      },
    ],
  },
  {
    alias: 'roslik',
    name: 'Рослик Денис Викторович',
    photo: photos.noPhoto,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 24,
        party: Parties.kprf,
      },
    ],
  },
]

export default kprf
