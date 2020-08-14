import * as photos from '../../images/candidates'
import { CandidateStatuses, LinkTitle, LocationType, Parties, Person } from '../../types'

const kprf: Person[] = [
  {
    name: 'Бирюков Михаил Евгеньевич',
    alias: 'birukov',
    birthdate: '07.05.1961',
    candidate: [
      {
        areaNumber: 1,
        callNumber: 5,
        party: Parties.kprf,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'verbovaya',
    name: 'Вербовая Елена Петровна',
    birthdate: '31.12.1972',
    candidate: [
      {
        areaNumber: 3,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'zarezkih',
    name: 'Зарецких Алексей Александрович',
    birthdate: '06.10.1977',
    candidate: [
      {
        areaNumber: 4,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kovalevskii',
    name: 'Ковалевский Валентин Вячеславович',
    birthdate: '14.02.1996',
    candidate: [
      {
        areaNumber: 5,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'shelyakin',
    name: 'Шелякин Артур Дмитриевич',
    birthdate: '05.05.1967',
    candidate: [
      {
        areaNumber: 6,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
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
        locationType: LocationType.city,
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
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'zazepin',
    name: 'Зацепин Алексей Александрович',
    birthdate: '27.05.1979',
    candidate: [
      {
        areaNumber: 8,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'korchagin',
    name: 'Корчагин Павел Александрович',
    birthdate: '16.06.1969',
    photo: photos.korchagin,
    candidate: [
      {
        areaNumber: 9,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
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
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sivoplyasov',
    name: 'Сивоплясов Александр Александрович',
    birthdate: '27.09.1990',
    photo: photos.sivoplyasov,
    candidate: [
      {
        areaNumber: 11,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'krylov',
    name: 'Крылов Андрей Игоревич',
    birthdate: '08.06.1966',
    candidate: [
      {
        areaNumber: 12,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'spivakov',
    name: 'Спиваков Максим Васильевич',
    birthdate: '12.01.1977',
    candidate: [
      {
        areaNumber: 13,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'pomeranzev',
    name: 'Померанцев Андрей Сергеевич',
    birthdate: '08.03.1976',
    photo: photos.pomeranzev,
    candidate: [
      {
        areaNumber: 14,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kudrevatykh',
    name: 'Кудреватых Вячеслав Анатольевич',
    birthdate: '06.10.1977',
    candidate: [
      {
        areaNumber: 15,
        party: Parties.kprf,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ryabov',
    name: 'Рябов Алексей Анатольевич',
    birthdate: '26.12.1992',
    photo: photos.ryabov_aleksey,
    links: [{ title: LinkTitle.vk, url: 'https://vk.com/id108611370' }],
    candidate: [
      {
        areaNumber: 16,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sitnikov',
    name: 'Ситников Максим Михайлович',
    birthdate: '17.05.1989',
    candidate: [
      {
        areaNumber: 17,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    name: 'Глуховцев Даниил Сергеевич',
    alias: 'gluhovzev',
    birthdate: '02.08.1998',
    candidate: [
      {
        areaNumber: 18,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'shabunin',
    name: 'Шабунин Александр Николаевич',
    birthdate: '19.07.1985',
    candidate: [
      {
        areaNumber: 19,
        party: Parties.kprf,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'emelyanov_evgeniy',
    name: 'Емельянов Евгений Владимирович',
    birthdate: '04.07.1968',
    photo: photos.emelyanov_evgeniy,
    links: [
      { title: LinkTitle.vk, url: 'https://vk.com/vrn20' },
      { title: LinkTitle.whatsapp, url: 'https://wa.me/79009259595' },
      { title: LinkTitle.instagram, url: 'https://instagram.com/eemvrn' },
    ],
    candidate: [
      {
        areaNumber: 20,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
    bio:
      'Родился 4 июля 1968 года в городе Воронеже. ' +
      'В 1992 году получил диплом, с присвоением квалификации инженер-механик, в Воронежском политехническом институте. ' +
      'В 2002 году с отличием закончил экономический факультет Воронежского филиала ВЗФЭИ г. Москва по специальности экономист. ' +
      'Трудовую деятельность начал в 1992 году специалистом по автоматизации финансово-хозяйственной деятельности завода АО «Автогенмаш». ' +
      'С 1996 по 2008 г. - директор ООО «Информ-Бухгалтер-Воронеж». ' +
      'С января 2008 г. по настоящее время - директор ООО «Инфо-Бизнес-Воронеж», которое занимается развитием малого, среднего и крупного предпринимательства г. Воронежа. ' +
      'По настоящее время активно участвует в деятельности Центра социальных инициатив Северного района и экологических сообществ: Эко Северный Воронеж , Волонтеры Северный лес и других, в качестве координатора. ' +
      'Женат. Воспитывает сына.',
  },
  {
    alias: 'kadanzev',
    name: 'Каданцев Михаил Михайлович',
    birthdate: '15.01.1991',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 21,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kobylkin',
    name: 'Кобылкин Владислав Васильевич',
    birthdate: '27.06.1983',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 22,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'zverev',
    name: 'Зверев Николай Николаевич',
    birthdate: '04.09.1997',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 23,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'roslik',
    name: 'Рослик Денис Викторович',
    birthdate: '09.07.1986',
    photo: photos.roslik,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 24,
        party: Parties.kprf,
        status: CandidateStatuses.registered,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'babenkov_konstantin',
    name: 'Бабенков Константин Викторович',
    birthdate: '18.05.1988',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 26,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'berezhnoj_sergej',
    name: 'Бережной Сергей Александрович',
    birthdate: '05.07.1978',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 11,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'verlin_aleksandr',
    name: 'Верлин Александр Анатольевич',
    birthdate: '08.07.1982',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 13,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'grudinin_grigorij',
    name: 'Грудинин Григорий Михайлович',
    birthdate: '12.05.1975',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 18,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dvornikov_sergej',
    name: 'Дворников Сергей Васильевич',
    birthdate: '17.05.1951',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 17,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dedov_viktor',
    name: 'Дедов Виктор Анатольевич',
    birthdate: '27.09.1978',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'derkachev_nikolaj',
    name: 'Деркачев Николай Петрович',
    birthdate: '04.09.1958',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 21,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zhabin_vasilij',
    name: 'Жабин Василий Александрович',
    birthdate: '27.04.1980',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zlobina_lyubov',
    name: 'Злобина Любовь Владимировна',
    birthdate: '05.07.1973',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 24,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kasatkin_yurij',
    name: 'Касаткин Юрий Станиславович',
    birthdate: '13.06.1959',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 16,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kolomencev_denis',
    name: 'Коломенцев Денис Витальевич',
    birthdate: '02.07.1972',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 6,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'konopelko_elena',
    name: 'Конопелько Елена Валерьевна',
    birthdate: '12.07.1974',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 14,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'melkumov_konstantin',
    name: 'Мелкумов Константин Растиславович',
    birthdate: '15.04.1980',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 9,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'proshunin_aleksandr',
    name: 'Прошунин Александр Вячеславович',
    birthdate: '02.08.1984',
    candidate: [
      {
        areaNumber: 2,
        party: Parties.kprf,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rogatnev_andrej',
    name: 'Рогатнев Андрей Иванович',
    birthdate: '23.06.1966',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rudov_nikolaj',
    name: 'Рудов Николай Ильич',
    birthdate: '21.12.1981',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 20,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sakuta_valerij',
    name: 'Сакута Валерий Владимирович',
    birthdate: '19.11.1959',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sinicin_vitalij',
    name: 'Синицин Виталий Александрович',
    birthdate: '28.03.1970',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'skrynnikov_vladimir',
    name: 'Скрынников Владимир Евгеньевич',
    birthdate: '20.03.1959',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 25,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'spivak_oleg',
    name: 'Спивак Олег Игоревич',
    birthdate: '30.03.1974',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 8,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sukochev_andrej',
    name: 'Сукочев Андрей Иванович',
    birthdate: '28.03.1963',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'suhinin_aleksandr',
    name: 'Сухинин Александр Анатольевич',
    birthdate: '20.03.1968',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tominov_evgenij',
    name: 'Томинов Евгений Иванович',
    birthdate: '03.08.1961',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 28,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'turkov_viktor',
    name: 'Турков Виктор Васильевич',
    birthdate: '02.11.1961',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 7,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'carenko_aleksandr',
    name: 'Царенко Александр Михайлович',
    birthdate: '10.01.1970',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 22,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chernolyahov_yurij',
    name: 'Черноляхов Юрий Иванович',
    birthdate: '23.02.1957',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 27,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shevchenko_pavel',
    name: 'Шевченко Павел Александрович',
    birthdate: '22.05.1989',
    candidate: [
      {
        callNumber: 7,
        locationType: LocationType.region,
        party: Parties.kprf,
        areaNumber: 23,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default kprf
