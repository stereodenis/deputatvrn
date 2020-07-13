import {
  andreev,
  bazhenov,
  borodin,
  chraplak,
  gulin,
  ivanishev,
  kabanov,
  kornienko,
  kurpek,
  losev,
  nikolaev,
  podles,
  pyrinov,
  rodionov,
  sokolov,
  strelnikov,
  yanchich,
  karpov,
} from '../images'
import { Candidat, LinkTitle, Parties, Project } from '../types'

const candidats: { [s: string]: Candidat[] } = {
  1: [],
  2: [
    {
      name: 'Леонид Кабанов',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/kabanovl' },
        { title: LinkTitle.vk, url: 'https://vk.com/kabanovl' },
      ],
      photo: kabanov,
      project: Project.gorpr,
    },
  ],
  3: [
    {
      name: 'Константин Янчич',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/rusnevsmile' },
        { title: LinkTitle.vk, url: 'https://vk.com/rusnevsmile' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/rusnevsmile/' },
      ],
      photo: yanchich,
      project: Project.gorpr,
    },
  ],
  4: [
    {
      name: 'Антон Гулин',
      photo: gulin,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/digitalpartisan' },
        { title: LinkTitle.facebook, url: 'https://www.facebook.com/viaestvita' },
        { title: LinkTitle.vk, url: 'https://vk.com/digitalpartisan' },
        {
          title: LinkTitle.gorprojects,
          url: 'https://go.city4people.ru/fundraising/personal/503',
        },
      ],
    },
  ],
  5: [
    {
      name: 'Игорь Лосев',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/LosevIgor' },
        { title: LinkTitle.vk, url: 'https://vk.com/losevigor' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/super_losev' },
      ],
      project: Project.gorpr,
      photo: losev,
    },
  ],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [
    {
      name: 'Виталий Иванищев',
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/Vitaly_scout' }],
      party: Parties.rodina,
      project: Project.git,
      photo: ivanishev,
    },
  ],
  11: [
    {
      name: 'Сергей Подлесный',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/AlpacaEne' },
        { title: LinkTitle.vk, url: 'https://vk.com/alpacaene' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/aoipaca' },
      ],
      project: Project.gorpr,
      photo: podles,
    },
  ],
  12: [
    {
      name: 'Евгений Карпов',
      photo: karpov,
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/KarpovJack' }],
      role: 'глава штаба Навального в Воронеже',
    },
  ],
  13: [
    {
      name: 'Георгий Бородин',
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/George_Borodin' }],
      photo: borodin,
    },
    {
      name: 'Игорь Храплак',
      photo: chraplak,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/igorchraplak' },
        { title: LinkTitle.instagram, url: 'https://instagram.com/igorchraplak' },
      ],
    },
  ],
  14: [],
  15: [
    {
      name: 'Родионов Юрий',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/Only_arrogance' },
        { title: LinkTitle.vk, url: 'https://vk.com/only_arrogance' },
        { title: LinkTitle.instagram, url: 'http://instagram.com/yurbvrn' },
      ],
      project: Project.gorpr,
      role: 'Глава Горпроектов в Воронеже',
      photo: rodionov,
    },
  ],
  16: [],
  17: [
    {
      name: 'Николай Андреев',
      photo: andreev,
      party: Parties.rodina,
      links: [
        {
          title: LinkTitle.vk,
          url: 'https://vk.com/id2953185',
        },
      ],
    },
  ],
  18: [],
  19: [
    {
      name: 'Алевтина Курпек',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/Alya_Kurpek' },
        { title: LinkTitle.facebook, url: 'https://www.facebook.com/profile.php?id=100035366483123' },
        { title: LinkTitle.vk, url: 'https://vk.com/skogoreva_alya' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/alya_kurpek/' },
      ],
      project: Project.gorpr,
      photo: kurpek,
    },
    {
      name: 'Михаил Корниенко',
      photo: kornienko,
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/kornienkovrn' }],
    },
  ],
  20: [
    {
      name: 'Александр Стрельников',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/aleks_strelnikov' },
        { title: LinkTitle.vk, url: 'https://vk.com/aleksandr_strelnikow' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/strelnikov_aleks/' },
      ],
      project: Project.gorpr,
      photo: strelnikov,
    },
  ],
  21: [
    // {
    //   name: 'Илья Евсюков',
    // },
    {
      name: 'Николаев Максим Олегович',
      photo: nikolaev,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'https://t.me/Nikolaev_Maxim' },
        { title: LinkTitle.vk, url: 'https://vk.com/id6263910' },
      ],
    },
  ],
  22: [
    {
      name: 'Александр Соколов',
      photo: sokolov,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/AllexanderSokollov' },
        { title: LinkTitle.facebook, url: 'https://www.facebook.com/allexandersokolov' },
        { title: LinkTitle.vk, url: 'https://vk.com/allexmarkkula' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/a.sokolov_vrn/' },
      ],
    },
  ],
  23: [
    {
      name: 'Андрей Пыринов',
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/andreypyrinov' },
        { title: LinkTitle.vk, url: 'https://vk.com/andreypyrinov' },
      ],
      party: Parties.yabloko,
      photo: pyrinov,
    },
  ],
  24: [
    {
      name: 'Сергей Баженов',
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/md_bazhenov' },
        { title: LinkTitle.facebook, url: 'http://facebook.com/mdbazhenov' },
        { title: LinkTitle.vk, url: 'http://vk.com/md_bazhenov' },
        { title: LinkTitle.instagram, url: 'http://instagram.com/md_bazhenov' },
      ],
      role: 'глава реготделения Либертарианской партии России',
      photo: bazhenov,
    },
  ],
}

export default candidats
