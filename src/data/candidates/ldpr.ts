import { CandidateStatuses, CandidateType, Parties, Person } from '../../types'

const ldpr: Person[] = [
  {
    alias: 'abramov-denis',
    name: 'Абрамов Денис Дмитриевич',
    birthdate: '09.02.1998',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 10,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'belousov-sergej',
    name: 'Белоусов Сергей Александрович',
    birthdate: '15.04.1984',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 17,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'bekhov-maksim',
    name: 'Бехов Максим Николаевич',
    birthdate: '28.04.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 5,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'burdakov-maksim',
    name: 'Бурдаков Максим Алексеевич',
    birthdate: '24.04.1996',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 2,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'goverdovskij-nikita',
    name: 'Говердовский Никита Сергеевич',
    birthdate: '25.10.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'guzenko-konstantin',
    name: 'Гузенко Константин Эдуардович',
    birthdate: '31.01.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 12,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'dzhogan-andrej',
    name: 'Джоган Андрей Васильевич',
    birthdate: '22.06.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 24,
        callNumber: 5,
        type: CandidateType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dorohin-vladimir',
    name: 'Дорохин Владимир Николаевич',
    birthdate: '04.11.1993',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 15,
        type: CandidateType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kanevskij-anton',
    name: 'Каневский Антон Андреевич',
    birthdate: '02.02.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 7,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'kicenyuk-alla',
    name: 'Киценюк Алла Александровна',
    birthdate: '04.06.1984',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 8,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'kudyakov-aleksej',
    name: 'Кудяков Алексей Андреевич',
    birthdate: '27.06.1995',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 3,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'pavlenko-evgenij',
    name: 'Павленко Евгений Михайлович',
    birthdate: '16.03.1993',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 9,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'parinov-andrej',
    name: 'Паринов Андрей Николаевич',
    birthdate: '05.05.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 1,
        type: CandidateType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parinov-igor',
    name: 'Паринов Игорь Максимович',
    birthdate: '07.09.2000',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 19,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'polubavkina-alina',
    name: 'Полубавкина Алина Николаевна',
    birthdate: '25.06.1995',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 13,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'popov-maksim',
    name: 'Попов Максим Валерьевич',
    birthdate: '26.08.1999',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 23,
        callNumber: 5,
        type: CandidateType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rodionov-rodion',
    name: 'Родионов Родион Витальевич',
    birthdate: '10.11.1997',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 14,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'seliverstov-vladimir',
    name: 'Селиверстов Владимир Владимирович',
    birthdate: '15.04.1990',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 11,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'starodubov-oleg',
    name: 'Стародубов Олег Владимирович',
    birthdate: '13.10.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 22,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'filippov-maksim',
    name: 'Филиппов Максим Иванович',
    birthdate: '14.02.1977',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 20,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'shvynda-denis',
    name: 'Швында Денис Михайлович',
    birthdate: '04.09.1978',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 6,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'yakovlev-yurij',
    name: 'Яковлев Юрий Васильевич',
    birthdate: '08.06.1963',
    candidate: [
      {
        party: Parties.ldpr,
        areaNumber: 16,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
    ],
  },
  {
    alias: 'bahirev_artem',
    name: 'Бахирев Артем Геннадьевич',

    birthdate: '25.12.1974',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 13,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'belousov_sergej',
    name: 'Белоусов Сергей Александрович',

    birthdate: '15.04.1984',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 11,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'boldin_roman',
    name: 'Болдин Роман Алексеевич',

    birthdate: '15.10.1978',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 23,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'volkova_irina',
    name: 'Волкова Ирина Владимировна',

    birthdate: '04.04.1979',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'volodarcev_anatolij',
    name: 'Володарцев Анатолий Викторович',

    birthdate: '24.03.1956',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 27,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gutorov_mihail',
    name: 'Гуторов Михаил Сергеевич',

    birthdate: '22.01.1980',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dzhogan_andrej',
    name: 'Джоган Андрей Васильевич',

    birthdate: '22.06.1977',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dunaeva_elizaveta',
    name: 'Дунаева Елизавета Владимировна',

    birthdate: '06.03.1984',
    candidate: [{ callNumber: 7, party: Parties.ldpr, type: CandidateType.region, areaNumber: 21 }],
  },
  {
    alias: 'zheleznyak_yulian',
    name: 'Железняк Юлиан Юрьевич',

    birthdate: '04.07.1990',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 7,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kanevskij_anton',
    name: 'Каневский Антон Андреевич',

    birthdate: '02.02.1997',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kvitko_maksim',
    name: 'Квитко Максим Александрович',

    birthdate: '28.03.1991',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 24,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kiciyov_petr',
    name: 'Кициёв Петр Алексеевич',

    birthdate: '05.09.1988',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 25,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kudyakov_aleksej',
    name: 'Кудяков Алексей Андреевич',

    birthdate: '27.06.1995',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lapturov_vyacheslav',
    name: 'Лаптуров Вячеслав Митрофанович',

    birthdate: '17.08.1964',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 28,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mamchun_andrej',
    name: 'Мамчун Андрей Фёдорович',

    birthdate: '27.02.1981',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 20,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mishchenko_evgenij',
    name: 'Мищенко Евгений Александрович',

    birthdate: '20.08.1996',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 22,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ovsyannikov_aleksandr',
    name: 'Овсянников Александр Александрович',

    birthdate: '25.02.1980',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'pavlenko_evgenij',
    name: 'Павленко Евгений Михайлович',

    birthdate: '16.03.1993',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parinov_andrej',
    name: 'Паринов Андрей Николаевич',

    birthdate: '05.05.1997',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rodionov_rodion',
    name: 'Родионов Родион Витальевич',

    birthdate: '10.11.1997',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 8,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'roslyakov_andrej',
    name: 'Росляков Андрей Александрович',

    birthdate: '27.04.1970',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 26,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'seliverstov_vladimir',
    name: 'Селиверстов Владимир Владимирович',

    birthdate: '15.04.1990',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 6,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'cevovalnikov_andrej',
    name: 'Цевовальников Андрей Алексеевич',

    birthdate: '02.10.1972',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 17,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shishkina_tatyana',
    name: 'Шишкина Татьяна Михайловна',

    birthdate: '07.07.1983',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 18,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'yankauskene_tatyana',
    name: 'Янкаускене Татьяна Александровна',

    birthdate: '31.01.1984',
    candidate: [
      {
        callNumber: 7,
        party: Parties.ldpr,
        type: CandidateType.region,
        areaNumber: 14,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default ldpr
