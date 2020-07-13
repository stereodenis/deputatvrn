import { Candidat, Parties, Project } from '../types'

const candidats: { [s: string]: Candidat[] } = {
  1: [],
  2: [
    {
      name: 'Леонид Кабанов',
      telegram: 'kabanovl',
    },
  ],
  3: [
    {
      name: 'Константин Янчич',
      telegram: 'rusnevsmile',
    },
  ],
  4: [],
  5: [
    {
      name: 'Игорь Лосев',
      telegram: 'LosevIgor',
      project: Project.gorpr,
    },
  ],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [
    {
      name: 'Виталий Иванищев',
      telegram: 'Vitaly_scout',
      party: Parties.rodina,
      project: Project.git,
    },
  ],
  11: [
    {
      name: 'Сергей Подлесный',
      telegram: 'AlpacaEne',
      project: Project.gorpr,
    },
  ],
  12: [
    {
      name: 'Евгений Карпов',
      telegram: 'KarpovJack',
      role: 'глава штаба Навльного в Воронеже',
    },
  ],
  13: [
    {
      name: 'Георгий Бородин',
      telegram: 'George_Borodin',
    },
  ],
  14: [],
  15: [
    {
      name: 'Родионов Юрий',
      telegram: 'Only_arrogance',
      role: 'Глава Горпроектов в Воронеже',
    },
  ],
  16: [],
  17: [],
  18: [],
  19: [
    {
      name: 'Алевтина Курпек',
      telegram: 'Alya_Kurpek',
      project: Project.gorpr,
    },
    {
      name: 'Михаил Корниенко',
      telegram: 'kornienkovrn',
    },
  ],
  20: [
    {
      name: 'Александр Стрельников',
      telegram: 'aleks_strelnikov',
      project: Project.gorpr,
    },
  ],
  21: [
    {
      name: 'Илья Евсюков',
    },
  ],
  22: [
    {
      name: 'Александр Соколов',
      telegram: 'AllexanderSokollov',
    },
  ],
  23: [
    {
      name: 'Андрей Пыринов',
      telegram: 'andreypyrinov',
      party: Parties.yabloko,
    },
  ],
  24: [
    {
      name: 'Сергей Баженов',
      telegram: 'md_bazhenov',
      role: 'глава реготделения Либертарианской партии России',
    },
  ],
}

export default candidats
