import * as photos from '../../images/candidates'
import { Person, LinkTitle, Parties, Project, CandidateStatuses } from '../../types'

const rodina: Person[] = [
  {
    alias: 'hatunzev',
    name: 'Хатунцев Станислав Витальевич',
    birthdate: '16.10.1967',
    candidate: [
      {
        areaNumber: 1,
        callNumber: 5,
        party: Parties.rodina,
        role: 'временно неработающий',
      },
    ],
    photo: photos.hatunzev_stanislav,
  },
  {
    alias: 'ryabykh',
    name: 'Рябых Александр Александрович',
    birthdate: '01.09.1969',
    candidate: [
      {
        areaNumber: 3,
        callNumber: 5,
        party: Parties.rodina,
        role: 'коммерческий директор «Мега Авто»',
      },
    ],
    photo: photos.ryabykh_aleksandr,
  },
  {
    alias: 'semin',
    name: 'Семин Геннадий Владимирович',
    birthdate: '04.12.1967',
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        role: 'временно не работает',
        party: Parties.rodina,
      },
    ],
    photo: photos.semin_gennadiy,
  },
  {
    alias: 'batishev',
    name: 'Батищев Эдуард Владимирович',
    birthdate: '14.12.1975',
    candidate: [
      {
        areaNumber: 5,
        callNumber: 5,
        role: 'гендиректор «Аксиос Инвест»',
        party: Parties.rodina,
      },
    ],
    photo: photos.batishev_eduard,
  },
  {
    alias: 'zaharov',
    name: 'Захаров Александр Александрович',
    birthdate: '06.03.1971',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 5,
        role: 'предприниматель',
        party: Parties.rodina,
      },
    ],
    photo: photos.zakharov_aleksandr,
  },
  {
    alias: 'grachev',
    name: 'Грачев Константин Александрович',
    birthdate: '17.03.1978',
    candidate: [
      {
        areaNumber: 7,
        callNumber: 5,
        role: 'временно не работает',
        party: Parties.rodina,
        status: CandidateStatuses.registered,
      },
    ],
    photo: photos.grachev_konstantin,
  },
  {
    alias: 'krasiv',
    name: 'Красиков Александр Семенович',
    birthdate: '20.05.1975',
    candidate: [
      {
        areaNumber: 8,
        callNumber: 5,
        role: 'председатель Совета кооператива Социально-экономической взаимопомощи «Развитие»',
        party: Parties.rodina,
      },
    ],
    photo: photos.krasikov_aleksandr,
  },
  {
    alias: 'petukhov',
    name: 'Петухов Максим Викторович',
    birthdate: '05.01.1986',
    candidate: [
      {
        areaNumber: 9,
        callNumber: 5,
        role: 'гендиректор «Евростроя»',
        party: Parties.rodina,
      },
    ],
    photo: photos.petukhov_maksim,
  },
  {
    alias: 'ivanishev',
    name: 'Иванищев Виталий Игоревич',
    birthdate: '06.05.1987',
    candidate: [
      {
        areaNumber: 10,
        callNumber: 5,
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
    photo: photos.ivanishev_vitaliy,
  },
  {
    alias: 'filatov',
    name: 'Филатов Андрей Викторович',
    birthdate: '22.08.1984',
    candidate: [
      {
        areaNumber: 11,
        callNumber: 5,
        role: 'менеджер',
        party: Parties.rodina,
      },
    ],
    photo: photos.filatov_andrey,
  },
  {
    alias: 'kucherin',
    name: 'Кучерин Павел Николаевич',
    birthdate: '29.05.1979',
    candidate: [
      {
        areaNumber: 12,
        callNumber: 5,
        role: 'директор некоммерческой организации дополнительного профессионального образования «ДОН-100»',
        party: Parties.rodina,
      },
    ],
    photo: photos.kucherin_pavel,
  },
  {
    alias: 'shvydkii',
    name: 'Швыдкий Владимир Валерьевич',
    birthdate: '26.10.1982',
    candidate: [
      {
        areaNumber: 13,
        callNumber: 5,
        role: 'гендиректор «СВС Авто Групп»',
        party: Parties.rodina,
      },
    ],
    photo: photos.shvidkiy_vladimir,
  },
  {
    alias: 'ofitzerova',
    name: 'Офицерова Ольга Александровна',
    birthdate: '21.08.1968',
    candidate: [
      {
        areaNumber: 14,
        callNumber: 5,
        party: Parties.rodina,
        role: 'предприниматель',
      },
    ],
    photo: photos.ofizerova_olga,
  },
  {
    alias: 'ivanov',
    name: 'Иванов Антон Данилович',
    birthdate: '26.07.1988',
    candidate: [
      {
        areaNumber: 15,
        callNumber: 5,
        role: 'гендиректор «ЮЦ Солидарность»',
        party: Parties.rodina,
      },
    ],
    photo: photos.ivanov_anton,
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
        party: Parties.rodina,
        role: 'доцент ВГУ',
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
    alias: 'chekmarev',
    name: 'Чекмарев Артем Витальевич',
    birthdate: '27.05.1993',
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        role: 'заместитель генерального директора по коммерческим вопросам «Завода железобетонных изделий №2»',
        party: Parties.rodina,
      },
    ],
    photo: photos.chekmarev_artem,
  },
  {
    alias: 'ostroushko',
    name: 'Остроушко Иван Петрович',
    birthdate: '14.01.1989',
    candidate: [
      {
        areaNumber: 19,
        callNumber: 5,
        role: 'травматолог-ортопед «Воронежской областной клинической больницы №1»',
        party: Parties.rodina,
      },
    ],
    photo: photos.ostroushko_ivan,
  },
  {
    alias: 'yakovez',
    name: 'Яковец Елена Владимировна',
    birthdate: '06.12.1982',
    candidate: [
      {
        areaNumber: 21,
        callNumber: 5,
        role: 'домохозяйка',
        party: Parties.rodina,
      },
    ],
    photo: photos.yakovez_elena,
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
        role: 'директор ООО «Парсек»',
        party: Parties.rodina,
      },
    ],
  },
  {
    alias: 'safonov',
    name: 'Сафонов Сергей Иванович',
    birthdate: '14.11.1976',
    photo: photos.safonov_sergey,
    candidate: [
      {
        areaNumber: 23,
        callNumber: 5,
        role: 'начальник цеха АО «Завод железобетонных изделий №2',
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
        role: 'гендиректор «Ника Моторс»',
        party: Parties.rodina,
      },
    ],
  },
]

export default rodina
