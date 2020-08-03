import * as photos from '../../images/candidates'
import { CandidateStatuses, LocationType, Parties, Person } from '../../types'

const sr: Person[] = [
  {
    alias: 'akulov_evgenij',
    name: 'Акулов Евгений Алексеевич',
    birthdate: '20.01.1970',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 20,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gajchenya_svetlana',
    name: 'Гайченя Светлана Станиславовна',
    birthdate: '18.01.1972',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 1,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zheltuha_evgenij',
    name: 'Желтуха Евгений Васильевич',
    birthdate: '25.02.1980',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 19,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zemlyanskaya_nina',
    name: 'Землянская Нина Павловна',
    birthdate: '09.03.1941',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 3,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'ivannikov_nikita',
    name: 'Иванников Никита Геннадьевич',
    birthdate: '07.04.1997',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 14,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kazaryan_paruir',
    name: 'Казарян Паруир Арутюнович',
    birthdate: '08.02.1986',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 21,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kolyagin_yurij',
    name: 'Колягин Юрий Иванович',
    birthdate: '27.12.1964',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 17,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'lyskov_anton',
    name: 'Лысков Антон Юрьевич',
    birthdate: '05.01.1980',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 22,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'maslennikova_margarita',
    name: 'Масленникова Маргарита Юрьевна',
    birthdate: '04.03.1974',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 5,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'naumov_ilya',
    name: 'Наумов Илья Сергеевич',
    birthdate: '30.04.1984',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 18,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'neznamova_natalya',
    name: 'Незнамова Наталья Анатольевна',
    birthdate: '14.05.1992',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 6,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'petrov_denis',
    name: 'Петров Денис Сергеевич',
    birthdate: '23.10.1977',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 11,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'peshkov_gennadij',
    name: 'Пешков Геннадий Геннадьевич',
    birthdate: '28.10.1989',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 16,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'repp_vitalij',
    name: 'Репп Виталий Александрович',
    birthdate: '26.08.1998',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 7,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'rubcov_evgenij',
    name: 'Рубцов Евгений Николаевич',
    birthdate: '10.12.1980',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 12,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'rymar artem',
    name: 'Рымарь Артем Сергеевич',
    birthdate: '16.04.1976',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 23,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'slepchenko_yurij',
    name: 'Слепченко Юрий Николаевич',
    birthdate: '24.01.1975',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 9,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'suyazova_anastasiya',
    name: 'Суязова Анастасия Андреевна',
    birthdate: '10.02.1996',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 15,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'titaev_sergej',
    name: 'Титаев Сергей Владимирович',
    photo: photos.titaev_sergey,
    birthdate: '25.04.1978',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 10,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'tyuhin_aleksej',
    name: 'Тюхин Алексей Иванович',
    birthdate: '22.12.1981',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 24,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'hoperskov_aleksandr',
    name: 'Хоперсков Александр Сергеевич',
    birthdate: '29.08.1994',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'chernyavskij_oleg',
    name: 'Чернявский Олег Викторович',
    birthdate: '15.03.1987',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 13,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'shershnev_yurij',
    name: 'Шершнев Юрий Андреевич',
    birthdate: '11.04.1950',
    candidate: [
      {
        party: Parties.sr,
        areaNumber: 8,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'belkov_vyacheslav',
    name: 'Бельков Вячеслав Евгеньевич',

    birthdate: '30.04.1993',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 18,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zemlyanskaya_nina',
    name: 'Землянская Нина Павловна',

    birthdate: '09.03.1941',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zemlyanuhin_evgenij',
    name: 'Землянухин Евгений Александрович',

    birthdate: '15.10.1992',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ivannikov_nikita',
    name: 'Иванников Никита Геннадьевич',

    birthdate: '07.04.1997',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 7,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kashirin_vitalij',
    name: 'Каширин Виталий Владимирович',

    birthdate: '24.05.1963',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kvasov_konstantin',
    name: 'Квасов Константин Алексеевич',

    birthdate: '22.06.1972',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'klimov_vitalij',
    name: 'Климов Виталий Николаевич',

    birthdate: '01.10.1954',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 27,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kolobov_anton',
    name: 'Колобов Антон Андреевич',

    birthdate: '24.06.1985',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 20,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kolupaev_nikolaj',
    name: 'Колупаев Николай Андреевич',

    birthdate: '25.11.1998',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 21,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kolyagin_yurij',
    name: 'Колягин Юрий Иванович',

    birthdate: '27.12.1964',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 24,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'korneva_lyudmila',
    name: 'Корнева Людмила Райнольдовна',

    birthdate: '03.09.1963',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 13,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'korolev_sergej',
    name: 'Королев Сергей Юрьевич',

    birthdate: '21.09.1954',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'korotkov_sergej',
    name: 'Коротков Сергей Александрович',

    birthdate: '13.05.1978',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 23,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kurenkov_boris',
    name: 'Куренков Борис Владимирович',

    birthdate: '28.01.1984',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 26,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'larin_denis',
    name: 'Ларин Денис Олегович',

    birthdate: '18.04.1977',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 6,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'markova_olga',
    name: 'Маркова Ольга Яковлевна',

    birthdate: '05.01.1980',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 28,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'maslennikova_margarita',
    name: 'Масленникова Маргарита Юрьевна',

    birthdate: '04.03.1974',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mordvinov_vitalij',
    name: 'Мордвинов Виталий Николаевич',

    birthdate: '01.03.1985',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'myagkov_aleksandr',
    name: 'Мягков Александр Юрьевич',

    birthdate: '11.07.1987',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 16,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'naumov_ilya',
    name: 'Наумов Илья Сергеевич',

    birthdate: '30.04.1984',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 9,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'peshkov_gennadij',
    name: 'Пешков Геннадий Геннадьевич',

    birthdate: '28.10.1989',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 8,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ponomarev_andrej',
    name: 'Пономарев Андрей Сергеевич',

    birthdate: '28.12.1995',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 11,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'repp_vitalij',
    name: 'Репп Виталий Александрович',

    birthdate: '26.08.1998',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 17,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rymar artem',
    name: 'Рымарь Артем Сергеевич',

    birthdate: '16.04.1976',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sinelnikov_aleksej',
    name: 'Синельников Алексей Николаевич',

    birthdate: '01.01.1986',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 22,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'stupnikova_olga',
    name: 'Ступникова Ольга Викторовна',

    birthdate: '04.05.1977',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 14,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'harcyzov_roman',
    name: 'Харцызов Роман Александрович',

    birthdate: '21.08.1986',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 25,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shalimov_sergej',
    name: 'Шалимов Сергей Витальевич',

    birthdate: '10.03.1961',
    candidate: [
      {
        party: Parties.sr,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 10,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default sr
