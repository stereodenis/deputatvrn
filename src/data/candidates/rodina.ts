import * as photos from '../../images/candidates'
import { Candidate, LinkTitle, Parties, Project, CandidateStatuses } from '../../types'

const rodina: Candidate[] = [
  {
    areaNumber: 1,
    alias: 'hatunzev',
    name: 'Станислав Хатунцев',
    photo: photos.hatunzev_stanislav,
    party: Parties.rodina,
    role: 'временно неработающий',
  },
  {
    areaNumber: 3,
    alias: 'ryabykh',
    name: 'Александр Рябых',
    photo: photos.ryabykh_aleksandr,
    party: Parties.rodina,
    role: 'коммерческий директор «Мега Авто»',
  },
  {
    areaNumber: 4,
    alias: 'semin',
    name: 'Геннадий Семин',
    role: 'временно не работает',
    photo: photos.semin_gennadiy,
    party: Parties.rodina,
  },
  {
    areaNumber: 5,
    alias: 'batishev',
    name: 'Эдуард Батищев',
    role: 'гендиректор «Аксиос Инвест»',
    photo: photos.batishev_eduard,
    party: Parties.rodina,
  },
  {
    areaNumber: 6,
    alias: 'zaharov',
    name: 'Александр Захаров',
    role: 'предприниматель',
    photo: photos.zakharov_aleksandr,
    party: Parties.rodina,
  },
  {
    areaNumber: 7,
    alias: 'grachev',
    name: 'Константин Грачев',
    role: 'временно не работает',
    photo: photos.grachev_konstantin,
    party: Parties.rodina,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 8,
    alias: 'krasiv',
    name: 'Александр Красиков',
    role: 'председатель Совета кооператива Социально-экономической взаимопомощи «Развитие»',
    photo: photos.krasikov_aleksandr,
    party: Parties.rodina,
  },
  {
    areaNumber: 9,
    alias: 'petukhov',
    name: 'Максим Петухов',
    role: 'гендиректор «Евростроя»',
    photo: photos.petukhov_maksim,
    party: Parties.rodina,
  },
  {
    areaNumber: 10,
    alias: 'ivanishev',
    name: 'Виталий Иванищев',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/Vitaly_scout' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/ivanishchev' },
      { title: LinkTitle.vk, url: 'https://vk.com/id206447045' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/vitaly_scout/' },
      { title: LinkTitle.twitter, url: 'https://twitter.com/vitaly_scout/' },
      { title: LinkTitle.lj, url: 'https://vitaly1987.livejournal.com//' },
    ],
    party: Parties.rodina,
    project: Project.git,
    photo: photos.ivanishev_vitaliy,
  },
  {
    areaNumber: 11,
    alias: 'filatov',
    name: 'Андрей Филатов',
    role: 'менеджер',
    photo: photos.filatov_andrey,
    party: Parties.rodina,
  },
  {
    areaNumber: 12,
    alias: 'kucherin',
    name: 'Павел Кучерин',
    role: 'директор некоммерческой организации дополнительного профессионального образования «ДОН-100»',
    photo: photos.kucherin_pavel,
    party: Parties.rodina,
  },
  {
    areaNumber: 13,
    alias: 'shvydkii',
    name: 'Владимир Швыдкий',
    role: 'гендиректор «СВС Авто Групп»',
    photo: photos.shvidkiy_vladimir,
    party: Parties.rodina,
  },
  {
    areaNumber: 14,
    alias: 'ofitzerova',
    name: 'Ольга Офицерова',
    role: 'предприниматель',
    photo: photos.ofizerova_olga,
    party: Parties.rodina,
  },
  {
    areaNumber: 15,
    alias: 'ivanov',
    name: 'Антон Иванов',
    role: 'гендиректор «ЮЦ Солидарность»',
    photo: photos.ivanov_anton,
    party: Parties.rodina,
  },
  {
    areaNumber: 16,
    alias: 'kudinova',
    name: 'Татьяна Кудинова',
    role: 'пенсионер',
    photo: photos.kudinova_tatiana,
    party: Parties.rodina,
  },
  {
    areaNumber: 17,
    alias: 'andreev',
    name: 'Николай Андреев',
    role: 'доцент ВГУ',
    photo: photos.andreev_nikolay,
    party: Parties.rodina,
    links: [
      {
        title: LinkTitle.vk,
        url: 'https://vk.com/id2953185',
      },
    ],
  },
  {
    areaNumber: 18,
    alias: 'chekmarev',
    name: 'Артем Чекмарев',
    role: 'заместитель генерального директора по коммерческим вопросам «Завода железобетонных изделий №2»',
    photo: photos.chekmarev_artem,
    party: Parties.rodina,
  },
  {
    areaNumber: 19,
    alias: 'ostroushko',
    name: 'Иван Остроушко',
    role: 'травматолог-ортопед «Воронежской областной клинической больницы №1»',
    photo: photos.ostroushko_ivan,
    party: Parties.rodina,
  },
  {
    areaNumber: 21,
    alias: 'yakovez',
    name: 'Елена Яковец',
    role: 'домохозяйка',
    photo: photos.yakovez_elena,
    party: Parties.rodina,
    links: [
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/elena.yakovec' },
      { title: LinkTitle.vk, url: 'https://vk.com/elena.yakovec' },
    ],
  },
  {
    areaNumber: 22,
    alias: 'shalygin',
    name: 'Николай Шалыгин',
    role: 'директор ООО «Парсек»',
    photo: photos.shalygin_nikolay,
    party: Parties.rodina,
  },
  {
    areaNumber: 23,
    alias: 'safonov',
    name: 'Сергей Сафонов',
    role: 'начальник цеха АО «Завод железобетонных изделий №2',
    photo: photos.safonov_sergey,
    party: Parties.rodina,
  },
  {
    areaNumber: 24,
    alias: 'sokolov_v',
    name: 'Вячеслав Соколов',
    role: 'гендиректор «Ника Моторс»',
    photo: photos.sokolov_vyacheslav,
    party: Parties.rodina,
  },
]

export default rodina
