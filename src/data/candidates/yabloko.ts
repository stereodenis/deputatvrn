import * as photos from '../../images/candidates'
import { LinkTitle, Parties, Person, Project, LocationType, CandidateStatuses } from '../../types'

const yabloko: Person[] = [
  {
    alias: 'ashurkov',
    name: 'Ашурков Юрий Борисович',
    birthdate: '02.09.1965',
    bio: 'Образование – Высшее профессиональное',
    // other: 'адрес места жительства Воронежская обл., г. Воронеж, ул. Серго, д. 26, '
    candidate: [
      {
        areaNumber: 9,
        role: 'временно неработающий',
        party: Parties.yabloko,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'mushtenko',
    name: 'Муштенко Сергей Владимирович',
    birthdate: '22.03.1961',
    links: [
      {
        title: LinkTitle.website,
        url: 'http://www.yablokovrn.ru/vybory-2015-obrasenie-k-izbiratelam/biografia---mustenko-sergej-vladimirovic',
      },
    ],
    photo: photos.mushtenko_sergey,
    bio: 'Образование – Высшее профессиональное, Не является членом РОДП «ЯБЛОКО»',
    // other: 'места жительства Воронежская обл., г. Воронеж, ул. 3 Интернационала, дом 3, кв. 23.',
    candidate: [
      {
        areaNumber: 16,
        role: 'генеральный директор ООО Центр “Карьера”',
        party: Parties.yabloko,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'shlyaev_alexey',
    name: 'Шляев Алексей Рудольфович',
    birthdate: '08.03.1967',
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 19,
        party: Parties.yabloko,
      },
    ],
  },
  {
    alias: 'strelnikov',
    name: 'Стрельников Александр Валерьевич',
    birthdate: '04.06.2000',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/aleks_strelnikov' },
      { title: LinkTitle.vk, url: 'https://vk.com/aleksandr_strelnikow' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/strelnikov_aleks/' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/142' },
    ],
    photo: photos.strelnikov,
    bio:
      'Образование - среднее, Член РОДП «ЯБЛОКО». Член Регионального Совета РОДП «ЯБЛОКО», Член Федерального Совета РОДП  «ЯБЛОКО»',
    // other: 'место жительства Воронежская область, город Воронеж, пр-кт Московский, д. 142У, кв.48 .',
    candidate: [
      {
        areaNumber: 20,
        project: Project.gorpr,
        party: Parties.yabloko,
        role: '20 лет, студент юридического факультета ВГУ',
        problems: [
          '1) Ужасные дороги во дворах. Дворы на Невского и Мордасовой все в ямах, буквально нет одного целого',
          '2) Старые тратуары и бордюры, отсутствие пешеходных дорожек, как следствие-протоптанные тропинки',
          '3)Нет места для отдыха с детьми, нет ни одной хорошей детской площадки, места для массового отдыха молодежи',
          '4) Отсутствие стадиона для пробежек и спортивных мероприятий, для этого необходимо отделать стадион 1ой школы',
          '5) Вырубка и уничтожение северного леса',
        ],
        message:
          'Я студент Юридического факультета ВГУ, сейчас учусь на втором курсе. Хочу стать депутатом, чтобы представлять интересы людей в парламенте, нести альтернативу проводящейся государственной политике. Хочу, чтобы Воронеж стал приятным городом, не только в центре и на Динамо, но и в спальных районах. Буду держать постоянный контакт с избирателями, делать политику открытой, без каких-то ширм и притворства.',
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'evsukov',
    name: 'Евсюков Илья Анатольевич',
    birthdate: '02.12.1976',
    photo: photos.evsukov_ilya,
    bio: 'Образование – Высшее профессиональное, Не является членом РОДП «ЯБЛОКО»',
    // other: 'адрес места жительства, Воронежская область г. Воронеж, ул. Фр. Энгельса, д. 16, кв. 9. '
    candidate: [
      {
        areaNumber: 21,
        role:
          'МБУК «Централизованная клубная система» городского округа город Воронеж, заведующий филиалом культурно-досуговый центр «Северный»',
        party: Parties.yabloko,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'beylin',
    name: 'Бейлин Илья Феликсович',
    birthdate: '19.02.1972',
    photo: photos.beylin,
    bio: 'Образование – высшее профессиональное. Не является членом РОДП «ЯБЛОКО»',
    // other: 'адрес места жительства Воронежская область г. Воронеж, Квартал Жилой массив Олимпийский, д. 4, кв. 273.'
    candidate: [
      {
        areaNumber: 22,
        role: 'Руководитель в Центр Городских инноваций',
        party: Parties.yabloko,
        program: 'https://zurga.livejournal.com/342719.html',
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'pyrinov',
    name: 'Пыринов Андрей Игоревич',
    birthdate: '06.06.1990',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/andreypyrinov' },
      { title: LinkTitle.vk, url: 'https://vk.com/andreypyrinov' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/196' },
    ],
    photo: photos.pyrinov,
    bio: 'Образование -  Высшее профессиональное. Член РОДП «ЯБЛОКО»',
    // other: 'адрес места жительства: Воронежская область, г. Воронеж, Московский проспект, д.48а, кв.31.'
    candidate: [
      {
        areaNumber: 23,
        role: '30 лет. генеральный директор, Общество с ограниченной ответственностью "Нигилист"',
        project: Project.gorpr,
        party: Parties.yabloko,
        message:
          'В 2012 году закончил Строительный университет, по специальности инженер. Работал арт-директором самых значимых event и общепит-площадок Воронежа. Два года назад открыл протестный бар «Нигилист» и занимаюсь его развитием. Поддерживаю локальную музыкальную сцену и стремлюсь создать в городе комфортные условия для проживания людям, чьи вкусы и интересы выходят за рамки массовой культуры. Мне нужны средства на сбор подписей, поддержите меня.',
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'bobrov',
    name: 'Бобров Алексанр Валентинович',
    birthdate: '04.12.1965',
    photo: photos.bobrov_aleksandr,
    links: [{ title: LinkTitle.website, url: 'https://partnerstvo.blagorussia.ru/2020/03/prezident-partnerstva.html' }],
    bio: 'Образование – Высшее профессиональное. Не является членом Партии «ЯБЛОКО»',
    // other: 'место жительства Воронежская обл., г. Воронеж, ул. Карла Маркса, д.94, кв. 22.',
    candidate: [
      {
        areaNumber: 24,
        role: 'Президент некоммерческого партнерства «Общественное благополучие Воронежа»',
        party: Parties.yabloko,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
  },
]

export default yabloko
