import { CandidateStatuses, LocationType, Parties, Person } from '../../types'

const zaPravdu: Person[] = [
  {
    alias: 'zolototrubov_albert',
    name: 'Золототрубов Альберт Александрович',
    birthdate: '10.11.1988',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'perov_stanislav',
    name: 'Перов Станислав Александрович',
    birthdate: '21.12.1973',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 8,
        status: CandidateStatuses.declined,
        callNumber: 5,
        locationType: LocationType.city,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 3,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sofrina_olga',
    name: 'Софрина Ольга Юрьевна',
    birthdate: '16.01.1982',
    candidate: [
      {
        party: Parties.zaPravdu,
        callNumber: 7,
        areaNumber: 25,
        locationType: LocationType.region,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 25,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'prilepin_evgenij',
    name: 'Прилепин Евгений Николаевич',
    birthdate: '07.07.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 0,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sapelkin_nikolaj',
    name: 'Сапелкин Николай Сергеевич',
    birthdate: '21.12.1970',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 0,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tarasov_yaroslav',
    name: 'Тарасов Ярослав Николаевич',
    birthdate: '06.07.1985',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 0,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kulakov_vladislav',
    name: 'Кулаков Владислав Валерьевич',
    birthdate: '31.10.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lisochenko_konstantin',
    name: 'Лисоченко Константин Вадимович',
    birthdate: '25.05.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'averin_aleksandr',
    name: 'Аверин Александр Алексеевич',
    birthdate: '26.06.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parsenteva_viktoriya',
    name: 'Парсентьева Виктория Григорьевна',
    birthdate: '07.07.1999',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'golub_yurij',
    name: 'Голубь Юрий Геннадьевич',
    birthdate: '06.11.1984',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 2,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'belyavcev_evgenij',
    name: 'Белявцев Евгений Александрович',
    birthdate: '19.05.1998',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 2,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'alibaeva_anna',
    name: 'Алибаева Анна Викторовна',
    birthdate: '26.03.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 2,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gunchenko_vladimir',
    name: 'Гунченко Владимир Александрович',
    birthdate: '17.08.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 3,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gorbacheva_inna',
    name: 'Горбачева Инна Витальевна',
    birthdate: '10.10.1981',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 3,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sergeev_oleg',
    name: 'Сергеев Олег Маратович',
    birthdate: '19.11.1981',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mahinov_lev',
    name: 'Махинов Лев Юрьевич',
    birthdate: '05.12.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'avramenkov_andrej',
    name: 'Авраменков Андрей Михайлович',
    birthdate: '10.04.1990',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'solotnov_oleg',
    name: 'Солотнов Олег Николаевич',
    birthdate: '13.09.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shkarin_aleksandr',
    name: 'Шкарин Александр Леонидович',
    birthdate: '13.04.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dmitriev_pavel',
    name: 'Дмитриев Павел Владимирович',
    birthdate: '10.11.1988',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        listNumber: 2,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'alibaev_andrej',
    name: 'Алибаев Андрей Фаридович',
    birthdate: '24.06.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'stepanov_vladislav',
    name: 'Степанов Владислав Викторович',
    birthdate: '17.01.1978',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kartashov_vladislav',
    name: 'Карташов Владислав Анатольевич',
    birthdate: '05.03.1981',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'artamonov_pavel',
    name: 'Артамонов Павел Александрович',
    birthdate: '13.03.1991',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ugarova_darya',
    name: 'Угарова Дарья Олеговна',
    birthdate: '12.05.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'solodov_aleksej',
    name: 'Солодов Алексей Александрович',
    birthdate: '18.10.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 7,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kurasov_sergej',
    name: 'Курасов Сергей Алексеевич',
    birthdate: '14.08.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 7,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'perov_roman',
    name: 'Перов Роман Владимирович',
    birthdate: '10.11.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 7,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rakov_pyotr',
    name: 'Раков Пётр Борисович',
    birthdate: '10.03.1966',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'yakovec_nikolaj',
    name: 'Яковец Николай Анатольевич',
    birthdate: '04.02.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kubahov_stanislav',
    name: 'Кубахов Станислав Александрович',
    birthdate: '08.05.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kotin_oleg',
    name: 'Котин Олег Геннадьевич',
    birthdate: '29.03.1963',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 9,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ermolaev_mihail',
    name: 'Ермолаев Михаил Владимирович',
    birthdate: '08.05.1979',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 9,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'goryainov_leonid',
    name: 'Горяинов Леонид Игоревич',
    birthdate: '26.08.1991',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 9,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'aseev_sergej',
    name: 'Асеев Сергей Валерьевич',
    birthdate: '25.08.1983',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'goncharov_evgenij',
    name: 'Гончаров Евгений Николаевич',
    birthdate: '14.01.1983',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'malcev_andrej',
    name: 'Мальцев Андрей Александрович',
    birthdate: '21.03.1991',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parsentev_grigorij',
    name: 'Парсентьев Григорий Александрович',
    birthdate: '08.10.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'salnikov_vyacheslav',
    name: 'Сальников Вячеслав Иванович',
    birthdate: '21.03.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 11,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'hrul_sergej',
    name: 'Хруль Сергей Иванович',
    birthdate: '15.03.1960',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 11,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'nesterenko_evgenij',
    name: 'Нестеренко Евгений Алексеевич',
    birthdate: '21.08.1992',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 11,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shvedov_dmitrij',
    name: 'Шведов Дмитрий Вячеславович',
    birthdate: '11.10.1990',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 11,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shahov_sergej',
    name: 'Шахов Сергей Васильевич',
    birthdate: '09.09.1962',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'averyanov_aleksandr',
    name: 'Аверьянов Александр Сергеевич',
    birthdate: '25.08.1963',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'karlin_aleksej',
    name: 'Карлин Алексей Олегович',
    birthdate: '30.03.1995',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'bojma_frensis',
    name: 'Бойма Фрэнсис',
    birthdate: '16.06.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 13,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gudkova_arina',
    name: 'Гудкова Арина Романовна',
    birthdate: '01.09.1999',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 13,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'klepko_gavrila',
    name: 'Клепко Гаврила Владимирович',
    birthdate: '28.02.1983',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 13,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ostroushko_dmitrij',
    name: 'Остроушко Дмитрий Юрьевич',
    birthdate: '06.05.1976',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 15,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sterlin_dmitrij',
    name: 'Стерлин Дмитрий Владимирович',
    birthdate: '25.02.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 15,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kuznecova_irina',
    name: 'Кузнецова Ирина Владимировна',
    birthdate: '05.04.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 15,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'nacentov_vasilij',
    name: 'Нацентов Василий Павлович',
    birthdate: '07.12.1998',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 17,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sterlina_nina',
    name: 'Стерлина Нина Владимировна',
    birthdate: '19.10.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 17,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sobora_sergej',
    name: 'Собора Сергей Михайлович',
    birthdate: '29.01.1976',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 17,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rublevskij_yurij',
    name: 'Рублевский Юрий Юрьевич',
    birthdate: '30.03.1985',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 23,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gusev_andrej',
    name: 'Гусев Андрей Сергеевич',
    birthdate: '01.09.1991',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 23,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'statkevich_dmitrij',
    name: 'Статкевич Дмитрий Сергеевич',
    birthdate: '29.12.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 23,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'antonova_veronika',
    name: 'Антонова Вероника Игоревна',
    birthdate: '09.12.1997',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 25,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'balabanov_aleksandr',
    name: 'Балабанов Александр Сергеевич',
    birthdate: '09.07.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 25,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'savchenko_nikolaj',
    name: 'Савченко Николай Александрович',
    birthdate: '04.01.1954',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dedov_aleksandr',
    name: 'Дедов Александр Геннадьевич',
    birthdate: '02.10.1996',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ermakov_ilya',
    name: 'Ермаков Илья Валерьевич',
    birthdate: '11.09.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zenin_mihail',
    name: 'Зенин Михаил Юрьевич',
    birthdate: '17.09.1973',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
        listNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default zaPravdu
