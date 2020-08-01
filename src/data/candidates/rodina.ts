import * as photos from '../../images/candidates'
import { Person, LinkTitle, Parties, Project, CandidateStatuses } from '../../types'

const rodina: Person[] = [
  {
    alias: 'hatunzev',
    name: 'Станислав Хатунцев',
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
    name: 'Александр Рябых',
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
    name: 'Геннадий Семин',
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
    name: 'Эдуард Батищев',
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
    name: 'Александр Захаров',
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
    name: 'Константин Грачев',
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
    name: 'Александр Красиков',
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
    name: 'Максим Петухов',
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
    name: 'Виталий Иванищев',
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
    name: 'Андрей Филатов',
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
    name: 'Павел Кучерин',
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
    name: 'Владимир Швыдкий',
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
    name: 'Ольга Офицерова',
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
    name: 'Антон Иванов',
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
    name: 'Татьяна Кудинова',
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
    name: 'Николай Андреев',
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
    name: 'Артем Чекмарев',
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
    name: 'Иван Остроушко',
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
    name: 'Елена Яковец',
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
    name: 'Николай Шалыгин',
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
    name: 'Сергей Сафонов',
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
    name: 'Вячеслав Соколов',
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
