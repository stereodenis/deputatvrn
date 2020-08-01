import * as photos from '../../images/candidates'
import { Person, Parties, CandidateStatuses } from '../../types'

const ldpr: Person[] = [
  {
    alias: 'abramov-denis',
    name: 'Абрамов Денис Дмитриевич',
    photo: photos.noPhoto,
    birthdate: '09.02.1998',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 10,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'belousov-sergej',
    name: 'Белоусов Сергей Александрович',
    photo: photos.noPhoto,
    birthdate: '15.04.1984',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 17,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'bekhov-maksim',
    name: 'Бехов Максим Николаевич',
    photo: photos.noPhoto,
    birthdate: '28.04.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 5,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'burdakov-maksim',
    name: 'Бурдаков Максим Алексеевич',
    photo: photos.noPhoto,
    birthdate: '24.04.1996',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 2,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'goverdovskij-nikita',
    name: 'Говердовский Никита Сергеевич',
    photo: photos.noPhoto,
    birthdate: '25.10.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'guzenko-konstantin',
    name: 'Гузенко Константин Эдуардович',
    photo: photos.noPhoto,
    birthdate: '31.01.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 12,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'dzhogan-andrej',
    name: 'Джоган Андрей Васильевич',
    photo: photos.noPhoto,
    birthdate: '22.06.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 24,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'dorohin-vladimir',
    name: 'Дорохин Владимир Николаевич',
    photo: photos.noPhoto,
    birthdate: '04.11.1993',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 15,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kanevskij-anton',
    name: 'Каневский Антон Андреевич',
    photo: photos.noPhoto,
    birthdate: '02.02.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 7,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kicenyuk-alla',
    name: 'Киценюк Алла Александровна',
    photo: photos.noPhoto,
    birthdate: '04.06.1984',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 8,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'kudyakov-aleksej',
    name: 'Кудяков Алексей Андреевич',
    photo: photos.noPhoto,
    birthdate: '27.06.1995',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 3,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'pavlenko-evgenij',
    name: 'Павленко Евгений Михайлович',
    photo: photos.noPhoto,
    birthdate: '16.03.1993',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 9,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'parinov-andrej',
    name: 'Паринов Андрей Николаевич',
    photo: photos.noPhoto,
    birthdate: '05.05.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 1,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'parinov-igor',
    name: 'Паринов Игорь Максимович',
    photo: photos.noPhoto,
    birthdate: '07.09.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 19,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'polubavkina-alina',
    name: 'Полубавкина Алина Николаевна',
    photo: photos.noPhoto,
    birthdate: '25.06.1995',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 13,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'popov-maksim',
    name: 'Попов Максим Валерьевич',
    photo: photos.noPhoto,
    birthdate: '26.08.1999',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 23,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'rodionov-rodion',
    name: 'Родионов Родион Витальевич',
    photo: photos.noPhoto,
    birthdate: '10.11.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 14,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'seliverstov-vladimir',
    name: 'Селиверстов Владимир Владимирович',
    photo: photos.noPhoto,
    birthdate: '15.04.1990',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 11,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'starodubov-oleg',
    name: 'Стародубов Олег Владимирович',
    photo: photos.noPhoto,
    birthdate: '13.10.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 22,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'filippov-maksim',
    name: 'Филиппов Максим Иванович',
    photo: photos.noPhoto,
    birthdate: '14.02.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 20,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'shvynda-denis',
    name: 'Швында Денис Михайлович',
    photo: photos.noPhoto,
    birthdate: '04.09.1978',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 6,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'yakovlev-yurij',
    name: 'Яковлев Юрий Васильевич',
    photo: photos.noPhoto,
    birthdate: '08.06.1963',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 16,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
]

export default ldpr
