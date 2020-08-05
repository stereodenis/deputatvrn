import * as photos from '../../images/candidates'
import { CandidateStatuses, LocationType, LinkTitle, Parties, Person, Project } from '../../types'

const rodina: Person[] = [
  {
    alias: 'hatunzev',
    name: 'Хатунцев Станислав Витальевич',
    birthdate: '16.10.1967',
    photo: photos.hatunzev_stanislav,
    candidate: [
      {
        areaNumber: 1,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.rodina,
        role: 'временно неработающий',
      },
    ],
  },
  {
    alias: 'ryabykh',
    name: 'Рябых Александр Александрович',
    birthdate: '01.09.1969',
    photo: photos.ryabykh_aleksandr,
    candidate: [
      {
        areaNumber: 3,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.rodina,
        role: 'коммерческий директор «Мега Авто»',
      },
    ],
  },
  {
    alias: 'batishev',
    name: 'Батищев Эдуард Владимирович',
    birthdate: '14.12.1975',
    photo: photos.batishev_eduard,
    candidate: [
      {
        areaNumber: 5,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'гендиректор «Аксиос Инвест»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'zaharov',
    name: 'Захаров Александр Александрович',
    birthdate: '06.03.1971',
    photo: photos.zakharov_aleksandr,
    candidate: [
      {
        areaNumber: 6,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'предприниматель',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'grachev',
    name: 'Грачев Константин Александрович',
    birthdate: '17.03.1978',
    photo: photos.grachev_konstantin,
    candidate: [
      {
        areaNumber: 7,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'временно не работает',
        party: Parties.rodina,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'krasiv',
    name: 'Красиков Александр Семенович',
    birthdate: '20.05.1975',
    photo: photos.krasikov_aleksandr,
    candidate: [
      {
        areaNumber: 8,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'председатель Совета кооператива Социально-экономической взаимопомощи «Развитие»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'petukhov',
    name: 'Петухов Максим Викторович',
    birthdate: '05.01.1986',
    photo: photos.petukhov_maksim,
    candidate: [
      {
        areaNumber: 9,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'гендиректор «Евростроя»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'ivanishev',
    name: 'Иванищев Виталий Игоревич',
    birthdate: '06.05.1987',
    photo: photos.ivanishev_vitaliy,
    candidate: [
      {
        areaNumber: 10,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.rodina,
        project: Project.git,
      },
    ],
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/Vitaly_scout' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/ivanishchev' },
      { title: LinkTitle.vk, url: 'https://vk.com/id206447045' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/vitaly_scout/' },
      { title: LinkTitle.twitter, url: 'https://twitter.com/vitaly_scout/' },
      { title: LinkTitle.lj, url: 'https://vitaly1987.livejournal.com//' },
    ],
  },
  {
    alias: 'filatov',
    name: 'Филатов Андрей Викторович',
    birthdate: '22.08.1984',
    photo: photos.filatov_andrey,
    candidate: [
      {
        areaNumber: 11,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'менеджер',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'kucherin',
    name: 'Кучерин Павел Николаевич',
    birthdate: '29.05.1979',
    photo: photos.kucherin_pavel,
    candidate: [
      {
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'директор некоммерческой организации дополнительного профессионального образования «ДОН-100»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'shvydkii',
    name: 'Швыдкий Владимир Валерьевич',
    birthdate: '26.10.1982',
    photo: photos.shvidkiy_vladimir,
    candidate: [
      {
        areaNumber: 13,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'гендиректор «СВС Авто Групп»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'ofitzerova',
    name: 'Офицерова Ольга Александровна',
    birthdate: '21.08.1968',
    photo: photos.ofizerova_olga,
    candidate: [
      {
        areaNumber: 14,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.rodina,
        role: 'предприниматель',
      },
    ],
  },
  {
    alias: 'kudinova',
    name: 'Кудинова Татьяна Михайловна',
    birthdate: '12.08.1955',
    photo: photos.kudinova_tatiana,
    candidate: [
      {
        areaNumber: 16,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'пенсионер',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'andreev',
    name: 'Андреев Николай Юрьевич',
    birthdate: '21.07.1990',
    photo: photos.andreev_nikolay,
    candidate: [
      {
        areaNumber: 17,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.rodina,
        role: 'доцент ВГУ',
        status: CandidateStatuses.declined,
      },
    ],
    links: [
      {
        title: LinkTitle.vk,
        url: 'https://vk.com/id2953185',
      },
    ],
  },
  {
    alias: 'yakovez',
    name: 'Яковец Елена Владимировна',
    birthdate: '06.12.1982',
    photo: photos.yakovez_elena,
    candidate: [
      {
        areaNumber: 21,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'домохозяйка',
        party: Parties.rodina,
      },
    ],
    links: [
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/elena.yakovec' },
      { title: LinkTitle.vk, url: 'https://vk.com/elena.yakovec' },
    ],
  },
  {
    alias: 'shalygin',
    name: 'Шалыгин Николай Николаевич',
    birthdate: '09.05.1983',
    photo: photos.shalygin_nikolay,
    candidate: [
      {
        areaNumber: 22,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'директор ООО «Парсек»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'sokolov_v',
    name: 'Соколов Вячеслав Олегович',
    birthdate: '28.04.1980',
    photo: photos.sokolov_vyacheslav,
    candidate: [
      {
        areaNumber: 24,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'гендиректор «Ника Моторс»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'borisov_igor',
    name: 'Борисов Игорь Борисович',
    birthdate: '05.11.1983',
    photo: photos.borisov_igor,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 20,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'vladimirov_vyacheslav',
    name: 'Владимиров Вячеслав Вячеславович',
    birthdate: '01.08.1979',
    photo: photos.vladimirov_vyacheslav,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'volkov_andrej',
    name: 'Волков Андрей Валериевич',
    birthdate: '18.02.1970',
    photo: photos.volkov_andrey,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gushchin_roman',
    name: 'Гущин Роман Александрович',
    birthdate: '15.12.1973',
    photo: photos.gushin_roman,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dolbnya_gennadij',
    name: 'Долбня Геннадий Викторович',
    birthdate: '15.02.1962',
    photo: photos.dolbnya_gennadiy,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 24,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ivanov_anton',
    name: 'Иванов Антон Данилович',
    birthdate: '26.07.1988',
    photo: photos.ivanov_anton,
    candidate: [
      {
        areaNumber: 15,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'гендиректор «ЮЦ Солидарность»',
        party: Parties.rodina,
      },
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kopachev_gennadij',
    name: 'Копачев Геннадий Анатольевич',
    birthdate: '06.05.1967',
    photo: photos.kopachev_gennadiy,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kryukov_aleksej',
    name: 'Крюков Алексей Николаевич',
    birthdate: '28.04.1974',
    photo: photos.krukov_alexey,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 9,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'malcev_yurij',
    name: 'Мальцев Юрий Николаевич',
    birthdate: '27.12.1968',
    photo: photos.malzev_yuriy,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'masloboev_sergej',
    name: 'Маслобоев Сергей Алексеевич',
    birthdate: '28.05.1961',
    photo: photos.masloboev_sergey,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 22,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'osinin_kirill',
    name: 'Осинин Кирилл Сергеевич',
    birthdate: '28.08.1977',
    photo: photos.osinin_kirill,
    candidate: [
      {
        areaNumber: 19,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'травматолог-ортопед «Воронежской областной клинической больницы №1»',
        party: Parties.rodina,
      },
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 25,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ostroushko_ivan',
    name: 'Остроушко Иван Петрович',
    birthdate: '14.01.1989',
    photo: photos.ostroushko_ivan,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 14,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'polunin_artem',
    name: 'Полунин Артем Николаевич',
    birthdate: '12.01.1990',
    photo: photos.polunin_artem,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 28,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'polnikov_igor',
    name: 'Польников Игорь Валерьевич',
    birthdate: '11.03.1968',
    photo: photos.polnikov_igor,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 13,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ponomarev_aleksandr',
    name: 'Пономарев Александр Сергеевич',
    birthdate: '04.06.1978',
    photo: photos.ponomarev_aleksandr,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 16,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rosnovskaya_svetlana',
    name: 'Росновская Светлана Анатольевна',
    birthdate: '08.02.1975',
    photo: photos.rosnovskaya_svetlana,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 17,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'safonov_sergej',
    name: 'Сафонов Сергей Иванович',
    birthdate: '14.11.1976',
    photo: photos.safonov_sergey,
    candidate: [
      {
        areaNumber: 23,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'начальник цеха АО «Завод железобетонных изделий №2',
        party: Parties.rodina,
      },
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'semin_gennadij',
    name: 'Семин Геннадий Владимирович',
    birthdate: '04.12.1967',
    photo: photos.semin_gennadiy,
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'временно не работает',
        party: Parties.rodina,
      },
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'skrynnikov_boris',
    name: 'Скрынников Борис Михайлович',
    birthdate: '17.06.1956',
    photo: photos.skrinnikov_boris,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sokolov_viktor',
    name: 'Соколов Виктор Александрович',
    birthdate: '31.08.1981',
    photo: photos.sokolov_viktor,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 18,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'suprunov_vladimir',
    name: 'Супрунов Владимир Иванович',
    birthdate: '15.07.1962',
    photo: photos.suprunov_vladimir,
    candidate: [{ party: Parties.rodina, locationType: LocationType.region, callNumber: 7, areaNumber: 27 }],
  },
  {
    alias: 'chekmarev_artem',
    name: 'Чекмарев Артем Витальевич',
    birthdate: '27.05.1993',
    photo: photos.chekmarev_artem,
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'заместитель генерального директора по коммерческим вопросам «Завода железобетонных изделий №2»',
        party: Parties.rodina,
      },
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'cherednikov_vladimir',
    name: 'Чередников Владимир Викторович',
    birthdate: '16.10.1961',
    photo: photos.cherednikov_vladimir,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 21,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shulekina_natalya',
    name: 'Шулекина Наталья Валерьевна',
    birthdate: '09.05.1982',
    photo: photos.shulekina_nataliya,
    candidate: [
      {
        party: Parties.rodina,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default rodina
