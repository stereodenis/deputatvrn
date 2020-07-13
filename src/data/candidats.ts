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
  podles,
  pyrinov,
  rodionov,
  sokolov,
  strelnikov,
  yanchich,
  nikolaev,
} from '../images'
import { Candidat, Parties, Project } from '../types'

const candidats: { [s: string]: Candidat[] } = {
  1: [],
  2: [
    {
      name: 'Леонид Кабанов',
      links: [{ title: 'telegram', url: 'http://t.me/kabanovl' }],
      photo: kabanov,
      project: Project.gorpr,
    },
  ],
  3: [
    {
      name: 'Константин Янчич',
      links: [{ title: 'telegram', url: 'http://t.me/rusnevsmile' }],
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
        { title: 'telegram', url: 'http://t.me/digitalpartisan' },
        {
          title: 'Страница на сайте "Городских проектов"',
          url: 'https://go.city4people.ru/fundraising/personal/503',
        },
      ],
    },
  ],
  5: [
    {
      name: 'Игорь Лосев',
      links: [{ title: 'telegram', url: 'http://t.me/LosevIgor' }],
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
      links: [{ title: 'telegram', url: 'http://t.me/Vitaly_scout' }],
      party: Parties.rodina,
      project: Project.git,
      photo: ivanishev,
    },
  ],
  11: [
    {
      name: 'Сергей Подлесный',
      links: [{ title: 'telegram', url: 'http://t.me/AlpacaEne' }],
      project: Project.gorpr,
      photo: podles,
    },
  ],
  12: [
    {
      name: 'Евгений Карпов',
      links: [{ title: 'telegram', url: 'http://t.me/KarpovJack' }],
      role: 'глава штаба Навального в Воронеже',
    },
  ],
  13: [
    {
      name: 'Георгий Бородин',
      links: [{ title: 'telegram', url: 'http://t.me/George_Borodin' }],
      photo: borodin,
    },
    {
      name: 'Игорь Храплак',
      photo: chraplak,
      project: Project.gorpr,
      links: [
        {
          title: 'telegram',
          url: 'http://t.me/igorchraplak',
        },
      ],
    },
  ],
  14: [],
  15: [
    {
      name: 'Родионов Юрий',
      links: [{ title: 'telegram', url: 'http://t.me/Only_arrogance' }],
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
          title: 'VK',
          url: 'https://vk.com/id2953185',
        },
      ],
    },
  ],
  18: [],
  19: [
    {
      name: 'Алевтина Курпек',
      links: [{ title: 'telegram', url: 'http://t.me/Alya_Kurpek' }],
      project: Project.gorpr,
      photo: kurpek,
    },
    {
      name: 'Михаил Корниенко',
      photo: kornienko,
      links: [{ title: 'telegram', url: 'http://t.me/kornienkovrn' }],
    },
  ],
  20: [
    {
      name: 'Александр Стрельников',
      links: [{ title: 'telegram', url: 'http://t.me/aleks_strelnikov' }],
      project: Project.gorpr,
      photo: strelnikov,
    },
  ],
  21: [
    {
      name: 'Илья Евсюков',
    },
    {
      name: 'Николаев Максим Олегович',
      photo: nikolaev,
      project: Project.gorpr,
    },
  ],
  22: [
    {
      name: 'Александр Соколов',
      photo: sokolov,
      project: Project.gorpr,
      links: [{ title: 'telegram', url: 'http://t.me/AllexanderSokollov' }],
    },
  ],
  23: [
    {
      name: 'Андрей Пыринов',
      project: Project.gorpr,
      links: [{ title: 'telegram', url: 'http://t.me/andreypyrinov' }],
      party: Parties.yabloko,
      photo: pyrinov,
    },
  ],
  24: [
    {
      name: 'Сергей Баженов',
      project: Project.gorpr,
      links: [{ title: 'telegram', url: 'http://t.me/md_bazhenov' }],
      role: 'глава реготделения Либертарианской партии России',
      photo: bazhenov,
    },
  ],
}

export default candidats
