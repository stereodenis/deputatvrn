import {
  andreev,
  bazhenov,
  beylin,
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
  yakovez,
  yanchich,
} from '../images/candidates'
import { Candidate, LinkTitle, Parties, Project } from '../types'

const candidats: { [s: string]: Candidate[] } = {
  1: [
    {
      alias: 'hatunzev',
      name: 'Станислав Хатунцев',
      photo: noPhoto,
      party: Parties.rodina,
      role: 'временно неработающий',
    },
    {
      alias: 'birukov',
      name: 'Бирюков Михаил Евгеньевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  2: [
    {
      alias: 'kabanov',
      name: 'Леонид Кабанов',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/kabanovl' },
        { title: LinkTitle.vk, url: 'https://vk.com/kabanovl' },
      ],
      photo: kabanov,
      project: Project.gorpr,
    },
    {
      alias: 'proshunin',
      name: 'Прошунин Александр Вячеславович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  3: [
    {
      alias: 'yanchich',
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
      alias: 'ryabykh',
      name: 'Александр Рябых',
      photo: noPhoto,
      party: Parties.rodina,
      role: 'коммерческий директор «Мега Авто»',
    },
    {
      alias: 'verbovaya',
      name: 'Вербовая Елена Петровна',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  4: [
    {
      alias: 'gulin',
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
      alias: 'semin',
      name: 'Геннадий Семин',
      role: 'временно не работает',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'zarezkih',
      name: 'Зарецких Алексей Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  5: [
    {
      alias: 'losev',
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
      alias: 'batishev',
      name: 'Эдуард Батищев',
      role: 'гендиректор «Аксиос Инвест»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'kovalevskii',
      name: 'Ковалевский Валентин Вячеславович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  6: [
    {
      alias: 'zaharov',
      name: 'Александр Захаров',
      role: 'предприниматель',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'shelyakin',
      name: 'Шелякин Артур Дмитриевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  7: [
    {
      alias: 'grachev',
      name: 'Константин Грачев',
      role: 'временно не работает',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'kalinin',
      name: 'Калинин Владимир Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  8: [
    {
      alias: 'krasiv',
      name: 'Александр Красиков',
      role: 'председатель Совета кооператива Социально-экономической взаимопомощи «Развитие»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'zazepin',
      name: 'Зацепин Алексей Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  9: [
    {
      alias: 'petukhov',
      name: 'Максим Петухов',
      role: 'гендиректор «Евростроя»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'ashurkov',
      name: 'Ашурков Юрий Борисович',
      role: 'временно неработающий',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 02 сентября 1965 г. Образование – Высшее профессиональное, адрес места жительства Воронежская обл., г. Воронеж, ул. Серго, д. 26, ',
    },
    {
      alias: 'korchagin',
      name: 'Корчагин Павел Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  10: [
    {
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
      photo: ivanishev,
    },
    {
      alias: 'kovalev',
      name: 'Ковалев Василий Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  11: [
    {
      alias: 'podlesnii',
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
      alias: 'filatov',
      name: 'Андрей Филатов',
      role: 'менеджер',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'sivoplyasov',
      name: 'Сивоплясов Александр Александрович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  12: [
    {
      alias: 'karpov',
      name: 'Евгений Карпов',
      photo: karpov,
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/KarpovJack' }],
      role: 'глава штаба Навального в Воронеже',
    },
    {
      alias: 'kucherin',
      name: 'Павел Кучерин',
      role: 'директор некоммерческой организации дополнительного профессионального образования «ДОН-100»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'krylov',
      name: 'Крылов Андрей Игоревич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  13: [
    {
      alias: 'borodin',
      name: 'Георгий Бородин',
      links: [{ title: LinkTitle.telegram, url: 'http://t.me/George_Borodin' }],
      photo: borodin,
    },
    {
      alias: 'chraplak',
      name: 'Игорь Храплак',
      photo: chraplak,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/igorchraplak' },
        { title: LinkTitle.instagram, url: 'https://instagram.com/igorchraplak' },
      ],
    },
    {
      alias: 'shvydkii',
      name: 'Владимир Швыдкий',
      role: 'гендиректор «СВС Авто Групп»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'spivakov',
      name: 'Спиваков Максим Васильевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  14: [
    {
      alias: 'ofitzerova',
      name: 'Ольга Офицерова',
      role: 'предприниматель',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'pomeranzev',
      name: 'Померанцев Андрей Сергеевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  15: [
    {
      alias: 'rodionov',
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
      alias: 'ivanov',
      name: 'Антон Иванов',
      role: 'гендиректор «ЮЦ Солидарность»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'kudrevatykh',
      name: 'Кудреватых Вячеслав Анатольевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  16: [
    {
      alias: 'kudinova',
      name: 'Татьяна Кудинова',
      role: 'пенсионер',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'mushtenko',
      name: 'Муштенко Сергей Владимирович',
      role: 'генеральный директор ООО Центр “Карьера”',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 22.03.1961 г., образование – Высшее профессиональное,  места жительства Воронежская обл., г. Воронеж, ул. 3 Интернационала, дом 3, кв. 23. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      alias: 'ryabov',
      name: 'Рябов Алексей Анатольевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  17: [
    {
      alias: 'andreev',
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
      alias: 'sitnikov',
      name: 'Ситников Максим Михайлович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  18: [
    {
      alias: 'chekmarev',
      name: 'Артем Чекмарев',
      role: 'заместитель генерального директора по коммерческим вопросам «Завода железобетонных изделий №2»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'gluhovzev',
      name: 'Глуховцев Даниил Сергеевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  19: [
    {
      alias: 'kurpek',
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
      alias: 'kornienko',
      name: 'Михаил Корниенко',
      photo: kornienko,
      role: 'Юрист в сфере Госзакупок',
      links: [
        { title: LinkTitle.telegram, url: 'http://t.me/kornienko_vrn' },
        { title: LinkTitle.instagram, url: 'https://instagram.com/kornienko_vrn' },
        { title: LinkTitle.vk, url: 'https://vk.com/kornienko_vrn' },
      ],
      // problems: 'https://docs.google.com/document/d/1o-Wi4iRgiXeWcyiDIH4P-lgpK0Q0K-33A94_fce6Ig8/edit?usp=drivesdk'
    },
    {
      alias: 'ostroushko',
      name: 'Иван Остроушко',
      role: 'травматолог-ортопед «Воронежской областной клинической больницы №1»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'shabunin',
      name: 'Шабунин Александр Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  20: [
    {
      alias: 'strelnikov',
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
      problems: [
        '1) Ужасные дороги во дворах. Дворы на Невского и Мордасовой все в ямах, буквально нет одного целого',
        '2) Старые тратуары и бордюры, отсутствие пешеходных дорожек, как следствие-протоптанные тропинки',
        '3)Нет места для отдыха с детьми, нет ни одной хорошей детской площадки, места для массового отдыха молодежи',
        '4) Отсутствие стадиона для пробежек и спортивных мероприятий, для этого необходимо отделать стадион 1ой школы',
        '5) Вырубка и уничтожение северного леса',
      ],
      bio:
        'дата рождения,04 июня 2000 г. Образование - среднее, место жительства Воронежская область, город Воронеж, пр-кт Московский, д. 142У, кв.48 . Член РОДП «ЯБЛОКО». Член Регионального Совета РОДП «ЯБЛОКО», Член Федерального Совета РОДП  «ЯБЛОКО»',
    },
    {
      alias: 'emelyanov',
      name: 'Емельянов Евгений Владимирович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  21: [
    {
      alias: 'evsukov',
      name: 'Евсюков Илья Анатольевич',
      role:
        'МБУК «Централизованная клубная система» городского округа город Воронеж, заведующий филиалом культурно-досуговый центр «Северный»',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 02 декабря 1976 г., образование – Высшее профессиональное, адрес места жительства, Воронежская область г. Воронеж, ул. Фр. Энгельса, д. 16, кв. 9. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      alias: 'nikolaev',
      name: 'Николаев Максим Олегович',
      photo: nikolaev,
      project: Project.gorpr,
      links: [
        { title: LinkTitle.telegram, url: 'https://t.me/Nikolaev_Maxim' },
        { title: LinkTitle.vk, url: 'https://vk.com/id6263910' },
      ],
    },
    {
      alias: 'yakovez',
      name: 'Елена Яковец',
      role: 'домохозяйка',
      photo: yakovez,
      party: Parties.rodina,
      links: [
        { title: LinkTitle.facebook, url: 'https://www.facebook.com/elena.yakovec' },
        { title: LinkTitle.vk, url: 'https://vk.com/elena.yakovec' },
      ],
    },
    {
      alias: 'kadanzev',
      name: 'Каданцев Михаил Михайлович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  22: [
    {
      alias: 'sokolov',
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
      alias: 'shalygin',
      name: 'Николай Шалыгин',
      role: 'директор ООО «Парсек»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'beylin',
      name: 'Бейлин Илья Феликсович',
      role: 'Руководитель в Центр Городских инноваций',
      photo: beylin,
      party: Parties.yabloko,
      program: 'https://zurga.livejournal.com/342719.html',
      bio:
        'дата рождения, 19 февраля 1972 г. Образование – высшее профессиональное, адрес места жительства Воронежская область г. Воронеж, Квартал Жилой массив Олимпийский, д. 4, кв. 273. Не является членом РОДП «ЯБЛОКО»',
    },
    {
      alias: 'kobylkin',
      name: 'Кобылкин Владислав Васильевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  23: [
    {
      alias: 'pyrinov',
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
      alias: 'safonov',
      name: 'Сергей Сафонов',
      role: 'начальник цеха АО «Завод железобетонных изделий №2',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'zverev',
      name: 'Зверев Николай Николаевич',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
  24: [
    {
      alias: 'bazhenov',
      name: 'Сергей Баженов',
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
      alias: 'sokolov',
      name: 'Вячеслав Соколов',
      role: 'гендиректор «Ника Моторс»',
      photo: noPhoto,
      party: Parties.rodina,
    },
    {
      alias: 'bobrov',
      name: 'Бобров Алексанр Валентинович',
      role: 'Президент некоммерческого партнерства «Общественное благополучие Воронежа»',
      photo: noPhoto,
      party: Parties.yabloko,
      bio:
        'дата рождения 04 декабря 1965 г., образование – Высшее профессиональное,  место жительства Воронежская обл., г. Воронеж, ул. Карла Маркса, д.94, кв. 22. Не является членом Партии «ЯБЛОКО»',
    },
    {
      alias: 'roslik',
      name: 'Рослик Денис Викторович',
      photo: noPhoto,
      party: Parties.kprf,
    },
  ],
}

export default candidats
