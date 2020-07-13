import {
  andreev,
  bazhenov,
  borodin,
  chraplak,
  gulin,
  ivanishev,
  kabanov,
  karpov,
  kornienko,
  kurpek,
  losev,
  nikolaev,
  noPhoto,
  podles,
  pyrinov,
  rodionov,
  sokolov,
  strelnikov,
  yanchich,
} from '../images/candidates'
import { Candidat, LinkTitle, Parties, Project } from '../types'

const candidats: { [s: string]: Candidat[] } = {
  1: [
    {
      name: 'Станислав Хатунцев',
      photo: noPhoto,
      party: Parties.rodina,
      role: 'временно неработающий',
    },
    {
      name: 'Бирюков Михаил Евгеньевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
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
    {
      name: 'Прошунин Александр Вячеславович',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Александр Рябых',
      photo: noPhoto,
      party: Parties.rodina,
      role: 'коммерческий директор «Мега Авто»',
    },
    {
      name: 'Вербовая Елена Петровна',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Геннадий Семин',
      role: 'временно не работает',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Зарецких Алексей Александрович',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Эдуард Батищев',
      role: 'гендиректор «Аксиос Инвест»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Ковалевский Валентин Вячеславович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  6: [
    {
      name: 'Александр Захаров',
      role: 'предприниматель',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Шелякин Артур Дмитриевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  7: [
    {
      name: 'Константин Грачев',
      role: 'временно не работает',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Калинин Владимир Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  8: [
    {
      name: 'Александр Красиков',
      role: 'председатель Совета кооператива Социально-экономической взаимопомощи «Развитие»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Зацепин Алексей Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  9: [
    {
      name: 'Максим Петухов',
      role: 'гендиректор «Евростроя»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Ашурков Юрий Борисович',
      role: 'временно неработающий',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 02 сентября 1965 г. Образование – Высшее профессиональное, адрес места жительства Воронежская обл., г. Воронеж, ул. Серго, д. 26, ',
    },
    {
      name: 'Корчагин Павел Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  10: [
    {
      name: 'Виталий Иванищев',
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/Vitaly_scout' }],
      party: Parties.rodina,
      project: Project.git,
      photo: ivanishev,
    },
    {
      name: 'Ковалев Василий Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Андрей Филатов',
      role: 'менеджер',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Сивоплясов Александр Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  12: [
    {
      name: 'Евгений Карпов',
      photo: karpov,
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/KarpovJack' }],
      role: 'глава штаба Навального в Воронеже',
    },
    {
      name: 'Павел Кучерин',
      role: 'директор некоммерческой организации дополнительного профессионального образования «ДОН-100»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Крылов Андрей Игоревич',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Владимир Швыдкий',
      role: 'гендиректор «СВС Авто Групп»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Спиваков Максим Васильевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  14: [
    {
      name: 'Ольга Офицерова',
      role: 'предприниматель',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Померанцев Андрей Сергеевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
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
    {
      name: 'Антон Иванов',
      role: 'гендиректор «ЮЦ Солидарность»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Кудреватых Вячеслав Анатольевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  16: [
    {
      name: 'Татьяна Кудинова',
      role: 'пенсионер',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Муштенко Сергей Владимирович',
      role: 'генеральный директор ООО Центр “Карьера”',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 22.03.1961 г., образование – Высшее профессиональное,  места жительства Воронежская обл., г. Воронеж, ул. 3 Интернационала, дом 3, кв. 23. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      name: 'Рябов Алексей Анатольевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  17: [
    {
      name: 'Николай Андреев',
      role: 'доцент ВГУ',
      photo: andreev,
      party: Parties.rodina,
      links: [
        {
          title: LinkTitle.vk,
          url: 'https://vk.com/id2953185',
        },
      ],
    },
    {
      name: 'Ситников Максим Михайлович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  18: [
    {
      name: 'Артем Чекмарев',
      role: 'заместитель генерального директора по коммерческим вопросам «Завода железобетонных изделий №2»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Глуховцев Даниил Сергеевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
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
    {
      name: 'Иван Остроушко',
      role: 'травматолог-ортопед «Воронежской областной клинической больницы №1»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Шабунин Александр Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  20: [
    {
      name: 'Стрельников Александр Валерьевич',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/aleks_strelnikov' },
        { title: LinkTitle.vk, url: 'https://vk.com/aleksandr_strelnikow' },
        { title: LinkTitle.instagram, url: 'https://www.instagram.com/strelnikov_aleks/' },
      ],
      project: Project.gorpr,
      party: Parties.yabloko,
      photo: strelnikov,
      role: 'студент юридического факультета ВГУ',
      bio:
        'дата рождения,04 июня 2000 г. Образование - среднее, место жительства Воронежская область, город Воронеж, пр-кт Московский, д. 142У, кв.48 . Член РОДП «ЯБЛОКО». Член Регионального Совета РОДП «ЯБЛОКО», Член Федерального Совета РОДП  «ЯБЛОКО»',
    },
    {
      name: 'Емельянов Евгений Владимирович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  21: [
    {
      name: 'Евсюков Илья Анатольевич',
      role:
        'МБУК «Централизованная клубная система» городского округа город Воронеж, заведующий филиалом культурно-досуговый центр «Северный»',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 02 декабря 1976 г., образование – Высшее профессиональное, адрес места жительства, Воронежская область г. Воронеж, ул. Фр. Энгельса, д. 16, кв. 9. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      name: 'Николаев Максим Олегович',
      photo: nikolaev,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'https://t.me/Nikolaev_Maxim' },
        { title: LinkTitle.vk, url: 'https://vk.com/id6263910' },
      ],
    },
    {
      name: 'Елена Яковец',
      role: 'домохозяйка',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Каданцев Михаил Михайлович',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Николай Шалыгин',
      role: 'директор ООО «Парсек»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Бейлин Илья Феликсович',
      role: 'пенсионер',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения, 19 февраля 1972 г. Образование – высшее профессиональное, адрес места жительства Воронежская область г. Воронеж, Квартал Жилой массив Олимпийский, д. 4, кв. 273. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      name: 'Кобылкин Владислав Васильевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  23: [
    {
      name: 'Пыринов Андрей Игоревич',
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/andreypyrinov' },
        { title: LinkTitle.vk, url: 'https://vk.com/andreypyrinov' },
      ],
      party: Parties.yabloko,
      photo: pyrinov,
      role: 'ООО «Нигилист», генеральный директор',
      bio:
        'дата рождения 06 июня 1990 г. Образование -  Высшее профессиональное, адрес места жительства: Воронежская область, г. Воронеж, Московский проспект, д.48а, кв.31. Член РОДП «ЯБЛОКО»',
    },
    {
      name: 'Сергей Сафонов',
      role: 'начальник цеха АО «Завод железобетонных изделий №2',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Зверев Николай Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
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
    {
      name: 'Вячеслав Соколов',
      role: 'гендиректор «Ника Моторс»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      name: 'Бобров Алексанр Валентинович',
      role: 'Президент некоммерческого партнерства «Общественное благополучие Воронежа»',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 04 декабря 1965 г., образование – Высшее профессиональное,  место жительства Воронежская обл., г. Воронеж, ул. Карла Маркса, д.94, кв. 22. Не является членом Партии «ЯБЛОКО»',
    },
    {
      name: 'Рослик Денис Викторович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
}

export default candidats
