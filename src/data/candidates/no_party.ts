import * as photos from '../../images/candidates'
import { CandidateStatuses, LocationType, LinkTitle, Parties, Person, Project } from '../../types'

const noParty: Person[] = [
  {
    alias: 'akulov_evgenij',
    name: 'Акулов Евгений Алексеевич',
    birthdate: '28.05.1998',
    candidate: [
      {
        areaNumber: 20,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'aleksanyan_nelli',
    photo: photos.aleksanyan_nelli,
    name: 'Алексанян Нелли Арушановна',
    birthdate: '14.07.1965',
    candidate: [
      {
        areaNumber: 10,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'aslanyan_ruslan',
    name: 'Асланян Руслан Сергеевич',
    birthdate: '07.07.1973',
    candidate: [
      {
        areaNumber: 3,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'bazhenov_sergej',
    name: 'Баженов Сергей Алексеевич',
    birthdate: '23.06.1996',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/md_bazhenov' },
      { title: LinkTitle.facebook, url: 'http://facebook.com/mdbazhenov' },
      { title: LinkTitle.vk, url: 'http://vk.com/md_bazhenov' },
      { title: LinkTitle.instagram, url: 'http://instagram.com/md_bazhenov' },
    ],
    photo: photos.bazhenov,
    candidate: [
      {
        areaNumber: 24,
        role: 'глава реготделения Либертарианской партии России',
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
    videos: [
      {
        title: 'Сергей Баженов: выдвигаюсь в муниципальные депутаты',
        url: 'https://www.youtube.com/watch?v=N2jSHirUY-w',
      },
      {
        title: 'На связи #1: Сергей Баженов — о выборах, политике и Прекрасной России Будущего\n',
        url: 'https://www.youtube.com/watch?v=iFq6n4aD230',
      },
      { title: 'Как нас лишают избирательных прав', url: 'https://www.youtube.com/watch?v=KnPRWYA3Swg' },
    ],
  },
  {
    alias: 'bessmertnyj_oleg',
    name: 'Бессмертный Олег Валентинович',
    birthdate: '14.07.1981',
    candidate: [
      {
        areaNumber: 9,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'borodin_georgij',
    name: 'Бородин Георгий Андреевич',
    birthdate: '06.05.1998',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/George_Borodin' },
      { title: LinkTitle.website, url: 'http://borodin2020.ru' },
    ],
    photo: photos.borodin,
    candidate: [
      {
        areaNumber: 13,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
    bio:
      'Воронеж — мой родной город. В 13-м округе, на улице Чапаева я живу с рождения. Я хочу, чтобы мой город был комфортным, красивым и безопасным, поэтому решил участвовать в выборах. Я хочу и готов принимать участие в жизни города, отстаивать интересы жителей своего округа, потому что знаком с их проблемами, готов моментально реагировать на новые обращения.',
  },
  {
    alias: 'brezhnev_sergej',
    name: 'Брежнев Сергей Юрьевич',
    birthdate: '22.01.1972',
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'vorobev_sergej',
    name: 'Воробьев Сергей Николаевич',
    birthdate: '02.01.1960',
    photo: photos.vorobiev,
    candidate: [
      {
        areaNumber: 11,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'vorotyncev_sergej',
    name: 'Воротынцев Сергей Валерьевич',
    birthdate: '01.01.1975',
    candidate: [
      {
        areaNumber: 7,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'georgievskij_vladimir',
    name: 'Георгиевский Владимир Всеволодович',
    birthdate: '13.06.1985',
    photo: photos.georgievskiy,
    candidate: [
      {
        areaNumber: 7,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'gorbunov_aleksej',
    name: 'Горбунов Алексей Сергеевич',
    birthdate: '28.11.1993',
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gridyaev_mihail',
    name: 'Гридяев Михаил Михайлович',
    birthdate: '21.11.2001',
    candidate: [
      {
        areaNumber: 23,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gulin_anton',
    name: 'Гулин Антон Валентинович',
    birthdate: '14.11.1983',
    photo: photos.gulin,
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/digitalpartisan' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/viaestvita' },
      { title: LinkTitle.vk, url: 'https://vk.com/digitalpartisan' },
    ],
    candidate: [
      {
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'zheleznyakov_maksim',
    name: 'Железняков Максим Александрович',
    birthdate: '19.01.1975',
    candidate: [
      {
        areaNumber: 7,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'zhivotov_aleksandr',
    name: 'Животов Александр Викторович',
    birthdate: '14.01.1989',
    candidate: [
      {
        areaNumber: 7,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'zajcev_denis',
    name: 'Зайцев Денис Викторович',
    birthdate: '02.08.1992',
    candidate: [
      {
        areaNumber: 14,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ivleva_svetlana',
    photo: photos.ivleva_svetlana,
    name: 'Ивлева Светлана Викторовна',
    birthdate: '22.09.1967',
    candidate: [
      {
        areaNumber: 10,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kabanov_leonid',
    name: 'Кабанов Леонид Алексеевич',
    birthdate: '09.12.1991',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/kabanovl' },
      { title: LinkTitle.vk, url: 'https://vk.com/kabanovl' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/212' },
    ],
    photo: photos.kabanov,
    candidate: [
      {
        areaNumber: 2,
        role: '28 лет. Акционерное общество «Концерн «Созвездие», старший инженер',
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
        message:
          'Меня зовут Леонид и я не политик. Я инженер и программист, и вот уже много лет жду когда в городе появятся велодорожки, которые нам обещают, когда вместо газелей поедут низкопольные трамваи. Но ничего не происходит и пора это изменить. Моя задача — расшевелить инертную систему и заставить её строить удобный безопасный и современный город.',
      },
    ],
  },
  {
    alias: 'kazmin_aleksandr',
    name: 'Казьмин Александр Сергеевич',
    birthdate: '21.05.1987',
    candidate: [
      {
        areaNumber: 3,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'karpov_evgenij',
    name: 'Карпов Евгений Вячеславович',
    birthdate: '10.07.1988',
    photo: photos.karpov,
    links: [{ title: LinkTitle.telegram, url: 'http://t.me/KarpovJack' }],
    candidate: [
      {
        areaNumber: 12,
        role: 'глава штаба Навального в Воронеже',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
    videos: [
      {
        title: 'Речь Евгения Карпова на заседании избирательной комиссии',
        url: 'https://www.youtube.com/watch?v=goTY29oo-_E',
      },
    ],
  },
  {
    alias: 'kovalenko_anton',
    name: 'Коваленко Антон Александрович',
    birthdate: '21.12.1989',
    candidate: [
      {
        areaNumber: 21,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
      },
    ],
  },
  {
    alias: 'kovalyov_mihail',
    name: 'Ковалёв Михаил Федорович',
    birthdate: '14.11.1986',
    candidate: [
      {
        areaNumber: 7,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kornienko_mihail',
    name: 'Корниенко Михаил Михайлович',
    birthdate: '18.04.1993',
    photo: photos.kornienko,
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/kornienko_vrn' },
      { title: LinkTitle.instagram, url: 'https://instagram.com/kornienko_vrn' },
      { title: LinkTitle.vk, url: 'https://vk.com/kornienko_vrn' },
    ],
    // problems: 'https://docs.google.com/document/d/1o-Wi4iRgiXeWcyiDIH4P-lgpK0Q0K-33A94_fce6Ig8/edit?usp=drivesdk'
    candidate: [
      {
        areaNumber: 19,
        problems: [
          '1. Высокие тротуары и отсутствие пандусов. Маломобильные граждане (мамы с колясками, пожилые люди и люди с ограниченными возможностями) не могут полноценно передвигаться даже от своего дома до магазина или аптеки, что уж говорить про поездки по городу. Высокие тротуары без съездов и пандусов, подъезды если и оснащены ими в редких случаях, то их угол представляет опасность и заставляет каждого человека становится экстремальным спортсменом по преодолению препятствий. \n',
          '2. Лужи и отсутствие тротуаров. Даже если человеку удаётся выйти из подъезда, дальше его ждёт очередная полоса препятствий: тротуары, которые заканчиваются в самом неожиданном месте, лужи на дорогах и тротуарах, грязь из которых развозится по всему району, заборы, которые закрывают проход по тротуару и заставляют людей протаптывать новые тропинки по газону, который при любом маленьком дожде так же становится болотом, искать обход по дороге и вступать в конфликт с проезжающими автомобилями.',
          '3. Детские площадки и зоны отдыха. Сейчас, когда все заведения, кафе и рестораны, детские сады и школы закрыты, особенно хорошо видно какую нагрузку приходится выносить зонам отдыха рядом с домом и как они с этой задачей не справляются. Люди не должны каждый раз ехать в парк “Динамо” (теперь “Центральный”), чтобы погулять с ребенком на хорошей площадке и посидеть на удобных лавочках или в центр, чтобы комфортно погулять по широким тротуарам. Это должно быть не роскошью, а доступной и комфортной средой в шаговой доступности. Каким образом на двор из четырех высотных домов стоит три лавочки? Бедные родители ждут пока их чада наиграются и стоят по несколько часов, а новые лавочки местные депутаты ставят только в канун выборов, агитируя при этом голосовать за них на ближайших выборах. На следующие четыре-пять лет про комфортную среду они опять забывают и только к следующему созыву ставят опять пару лавочек. А представляете как было бы здорово выйти из дома в зелёный двор и посидеть в тени на лавочке, поесть моронеженое, например?',
          '4. Транспортная доступность. Про это уже много написано, но мне кажется важным поднять эту тему ещё раз, потому что она никак не решает и даже не обсуждается в городском аппарате. Северный район один из самых многочисленных по численности и точно самый плотно заселённый в нашем городе. Все знают про то, что не нужно выезжать на Московский проспект без особой надобности, особенно в час-пик, иначе рискуешь потерять час-полтора-два своего времени. Дальше Московского проспекта тоже ситуация лучше не становится. И корень этой проблемы мне видится в недостаточной развитости общественного транспорта в нашем направлении. Каким образом район, с населением 300 тысяч (!) может обеспечить несколько маленьких маршруток и пару больших автобусов? Утром и вечером в них просто не протолкнуться, заходить в них по высоким ступеням удобно только физически здоровым людям, а родители с колясками, пожилые и маломобильные люди в прямом смысле остаются на обочине. Да и общий дискомфорт такой поездки толкает людей больше склоняться к покупке личного автомобиля, что понятно, и тем самым ещё больше нагружать транспортную сеть района. Я считаю, если расширить линию общественного транспорта, сделать его комфортным и доступным, в идеале пустить по выделенным полосам, то всё больше людей начнут его выбирать вместо ежедневных поездок на автомобиле, что разгрузит дороги и все участники движения от этого выиграют.',
          '5. Уборка снега и сосулек. Как хорошо, что сейчас лето и можно быстро и относительно комфортно передвигаться по городу!  Другое дело в межсезонье и зимой: дороги и тротуары заливает сначала дождями и приходится петлять между лужами и грязью, а зимой заваливает снегом так, что остаётся тоненькая тропинка на месте нормально тротуара, и если вдруг встретятся два человека навстречу друг другу, кому-то одному придется пропускать второго и постоять в сугробе. Ну допустим из двора мы вышли к остановке, а дальше начинается конкурс по коллективным прыжкам через сугробы на обочине прямо у остановки к автобусу. Всё это ещё смешивается с дорожной грязью и мы получаем снежно-грязевое месиво на полу, обуви и иногда одежде.  Узнали? Согласны? Не надоело? А сосульки? Когда вместо того, чтобы оперативно сбивать их с крыши, работники ЖЭКа огораживают несколько метров от дома и вешают табличку “Осторожно, возможно падение сосулек!”, чаще всего лишая пешеходов последней возможности пройти по тротуару, вынуждая таким образом идти по дороге, где их опять ждёт снежно-грязевая жижа и конфликт с автомобилями. И вот я смотрю на всё это и думаю, есть же небольшие специально для этого придуманные машины-снегоуборщики, рассчитанные на узкие тротуары, есть дворники в конце концов, в том же Советском районе это чуть лучше реализуют, так чем мы хуже то?',
        ],
        role: 'Юрист в сфере Госзакупок',
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kosareva_kristina',
    name: 'Косарева Кристина Юрьевна',
    birthdate: '23.07.1980',
    candidate: [
      {
        areaNumber: 8,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kosilova_ekaterina',
    name: 'Косилова Екатерина Алексеевна',
    birthdate: '27.11.1985',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'krivonosov_dmitrij',
    name: 'Кривоносов Дмитрий Сергеевич',
    birthdate: '27.03.1978',
    photo: photos.krivonosov,
    links: [
      { title: LinkTitle.vk, url: 'https://vk.com/id12192546' },
      { title: LinkTitle.whatsapp, url: 'https://wa.me/79192451919' },
    ],
    candidate: [
      {
        areaNumber: 24,
        callNumber: 5,
        locationType: LocationType.city,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kudryavceva_galina',
    name: 'Кудрявцева Галина Александровна',
    birthdate: '03.07.1945',
    photo: photos.kudryavzeva,
    candidate: [
      {
        areaNumber: 2,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kulikov_igor',
    name: 'Куликов Игорь Валентинович',
    birthdate: '21.10.1961',
    candidate: [
      {
        areaNumber: 1,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kurpek_alevtina',
    name: 'Курпек Алевтина Сергеевна',
    birthdate: '13.10.1995',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/Alya_Kurpek' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/profile.php?id=100035366483123' },
      { title: LinkTitle.vk, url: 'https://vk.com/skogoreva_alya' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/alya_kurpek/' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/277' },
    ],
    photo: photos.kurpek,
    candidate: [
      {
        areaNumber: 19,
        role: '24 года. Индивидуальный предприниматель Коваленко Андрей Владимирович, Руководитель отдела маркетинга',
        project: Project.gorpr,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        message:
          'Всем сердцем люблю город Воронеж. Здесь я родилась, ходила в школу, закончила университет, работаю. Не воспринимаю себя отдельно от Воронежа, он часть меня. Имею большой опыт правозащитной деятельности и реализации социальных проектов. Я выдвигаюсь в депутаты потому, что хочу сделать наш город безопасным и комфортным для всех групп населения, нам просто необходимо сократить смертность на наших дорогах.',
      },
    ],
  },
  {
    alias: 'losev_igor',
    name: 'Лосев Игорь Владимирович',
    birthdate: '19.04.1989',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/LosevIgor' },
      { title: LinkTitle.vk, url: 'https://vk.com/losevigor' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/super_losev' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/248' },
    ],
    photo: photos.losev,
    bio: 'закончил юрфак ВГУ, 10 лет работал юристом.',
    candidate: [
      {
        areaNumber: 5,
        // role: '31 год',
        project: Project.gorpr,
        message:
          'Моя мечта — удобный город, с безбарьерной средой, без грязи и заброшенных территорий. Город, в котором видно внимание ко всем его деталям. До выдвижения в городскую Думу я писал обращения в администрацию на обустройство пандусами бордюров, асфальтирование разрушенных участков тротуаров, уборку мусора вокруг контейнеров, расширения тротуаров. Многое получалось, надеюсь получится еще больше!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
        problems: [
          'на пешеходные зоны Ленинского проспекта заезжают автомобили, используют их под парковку, тротуар вдоль проспекта постоянно прерывается.',
          'Отсутствуют островки безопасности на пешеходных переходах, при таком количестве полос они обязаны там быть, это повысит безопасность пешеходов и не позволит автомобилям разгонятся до высоких скоростей.',
          'Отсутствуют пандусы даже возле детской поликлиники. Отсутствуют велодорожки. Потенциал набережной как места отдыха и прогулок не используется. Между дворами много заброшенных участков, на которых даже для уборки мусора жителям приходится писать обращения в управу.',
          'У округа очень хороший потенциал, это центр всего Левого берега и я считаю здесь должны быть широкие тротуары, тихие уютные дворы и современная набережная, безбарьерная среда, безопасные пешеходные переходы и тротуары без машин.',
        ],
      },
    ],
  },
  {
    alias: 'lukin_anton',
    name: 'Лукин Антон Николаевич',
    birthdate: '22.06.1981',
    candidate: [
      {
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'lutov_vladislav',
    name: 'Лутов Владислав Андреевич',
    birthdate: '20.04.1987',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'mavidi_andrej',
    name: 'Мавиди Андрей Николаевич',
    birthdate: '13.09.1968',
    candidate: [
      {
        areaNumber: 20,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'neverov_aleksej',
    name: 'Неверов Алексей Владимирович',
    birthdate: '26.05.1972',
    candidate: [
      {
        areaNumber: 8,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'nekrasov_aleksej',
    name: 'Некрасов Алексей Владимирович',
    birthdate: '20.08.1982',
    candidate: [
      {
        areaNumber: 14,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'nikolaev_maksim',
    name: 'Николаев Максим Олегович',
    birthdate: '23.03.1993',
    photo: photos.nikolaev,
    candidate: [
      {
        areaNumber: 21,
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
        message:
          'Родился и вырос в Воронеже, являюсь выпускником международного института компьютерных технологий, занимаюсь разработкой игр на мобильные устройства. Всегда интересовался общественной жизнью города, служил в армии, демобилизован в звании младшего сержанта. Для меня депутатство - это попытка сделать шаг в сторону политики, работающей в интересах избирателей.',
        role:
          '27 лет. инженер, Общество с ограниченной ответственностью «Воронежское конструкторское бюро средств связи»',
      },
    ],
    links: [
      { title: LinkTitle.telegram, url: 'https://t.me/Nikolaev_Maxim' },
      { title: LinkTitle.vk, url: 'https://vk.com/id6263910' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/412' },
    ],
  },
  {
    alias: 'obrazcov_nikolaj',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/obraztsov_nn.jpg',
    name: 'Образцов Николай Николаевич',
    birthdate: '17.12.1952',
    candidate: [
      {
        areaNumber: 4,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Туполева, 39',
          phones: ['+74732224305', '+79300112583'],
          website: 'http://gorduma-voronezh.ru/obrazcov-nikolaj-nikolaevich/',
        },
      },
      {
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'orlov_fedor',
    name: 'Орлов Федор Иванович',
    birthdate: '14.11.1988',
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'palyutin_mihail',
    name: 'Палютин Михаил Иванович',
    birthdate: '16.08.1953',
    photo: photos.palutin,
    candidate: [
      {
        areaNumber: 3,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'panov_egor',
    name: 'Панов Егор Львович',
    photo: photos.panovEgor,
    links: [
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/je.l.panov/' },
      { title: LinkTitle.vk, url: 'https://vk.com/jegor.panov' },
    ],
    birthdate: '28.11.1986',
    candidate: [
      {
        areaNumber: 1,
        role: 'временно не работающий',
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'panfilov_aleksej',
    name: 'Панфилов Алексей Иванович',
    birthdate: '02.10.1974',
    candidate: [
      {
        areaNumber: 6,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'pechurina_alla',
    name: 'Печурина Алла Витальевна',
    birthdate: '06.07.1971',
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'podlesnyj_sergej',
    name: 'Подлесный Сергей Михайлович',
    birthdate: '12.04.1998',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/AlpacaEne' },
      { title: LinkTitle.vk, url: 'https://vk.com/alpacaene' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/aoipaca' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/14' },
    ],
    photo: photos.podles,
    candidate: [
      {
        areaNumber: 11,
        role:
          '22 года. руководитель направления практических исследований в Воронеже, Фонд содействия развитию городов «Городские Проекты Ильи Варламова и Максима Каца»',
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
        message:
          'Я активный велосипедист и пешеход. Мне не нравится, что наш город вместо хороших условий для людей предоставляет им только препятствия. Я хочу сделать Воронеж удобнее и безопаснее для пешеходов, доступнее для маломобильных граждан. Это далеко не все, что можно сделать лучше. Для этого я выдвигаюсь в Воронежскую городскую думу. Сейчас мне нужны средства на сбор подписей.',
      },
    ],
  },
  {
    alias: 'pyhteev_sergej',
    name: 'Пыхтеев Сергей Валериевич',
    birthdate: '15.07.1975',
    candidate: [
      {
        areaNumber: 2,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'ratnenko_sergej',
    name: 'Ратненко Сергей Александрович',
    birthdate: '04.02.1984',
    candidate: [
      {
        areaNumber: 2,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'ratushnyj_artem',
    name: 'Ратушный Артем Александрович',
    birthdate: '27.10.1979',
    photo: photos.ratushniy,
    candidate: [
      {
        areaNumber: 24,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'rodionov_yurij',
    name: 'Родионов Юрий Анатольевич',
    birthdate: '10.01.2000',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/Only_arrogance' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/yura.rodionoff' },
      { title: LinkTitle.vk, url: 'https://vk.com/only_arrogance' },
      { title: LinkTitle.instagram, url: 'http://instagram.com/yurbvrn' },
      { title: LinkTitle.website, url: 'https://rodionov2020.ru' },
      { title: LinkTitle.youtube, url: 'https://www.youtube.com/channel/UCRrwyg1gwdkkbLCvRLOO_2A' },
    ],
    photo: photos.rodionov,
    candidate: [
      {
        areaNumber: 15,
        project: Project.gorpr,
        role: 'Глава Горпроектов в Воронеже',
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'rubcov_aleksandr',
    name: 'Рубцов Александр Васильевич',
    birthdate: '26.11.1983',
    candidate: [
      {
        areaNumber: 5,
        status: CandidateStatuses.declined,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'svyatohin_evgenij',
    name: 'Святохин Евгений Евгеньевич',
    birthdate: '04.08.1982',
    candidate: [
      {
        areaNumber: 5,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'selyutin_vladimir',
    name: 'Селютин Владимир Иванович',
    birthdate: '23.11.1962',
    candidate: [
      {
        areaNumber: 21,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'simonov_sergej',
    name: 'Симонов Сергей Иванович',
    birthdate: '10.07.1959',
    candidate: [
      {
        areaNumber: 13,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sokolov_aleksandr',
    name: 'Соколов Александр Александрович',
    birthdate: '17.04.2001',
    photo: photos.sokolovA,
    candidate: [
      {
        areaNumber: 22,
        role: '19 лет. Студент',
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
        message:
          'Я студент Воронежского государственного университета. Иду в городскую думу, чтобы решить проблему с общественным транспортом. Сейчас большая часть транспорта — это пазики и маршрутки. А из-за пробок одна остановка может занимать 40 минут. Нужно сделать выделенные линии для общественного транспорта. Моя главная мечта это вернуть в город трамвай, но, конечно же, не в старом виде. Нужны современные, комфортные и тихие трамваи.',
      },
    ],
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/AllexanderSokollov' },
      { title: LinkTitle.facebook, url: 'https://www.facebook.com/allexandersokolov' },
      { title: LinkTitle.vk, url: 'https://vk.com/allexmarkkula' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/a.sokolov_vrn/' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/15' },
    ],
  },
  {
    alias: 'sonin_vladimir',
    name: 'Сонин Владимир Юрьевич',
    birthdate: '01.06.1989',
    candidate: [
      {
        areaNumber: 2,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'strebkov_ivan',
    name: 'Стребков Иван Андреевич',
    birthdate: '20.01.2002',
    candidate: [
      {
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'surel igor',
    name: 'Сурель Игорь Алексеевич',
    birthdate: '23.03.1964',
    candidate: [
      {
        areaNumber: 17,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'surkov_oleg',
    name: 'Сурков Олег Владимирович',
    birthdate: '01.07.1985',
    candidate: [
      {
        areaNumber: 4,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sychyov_pavel',
    name: 'Сычёв Павел Дмитриевич',
    birthdate: '20.05.1986',
    candidate: [
      {
        areaNumber: 19,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'teryaev_vyacheslav',
    name: 'Теряев Вячеслав Анатольевич',
    birthdate: '28.07.1969',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'tyunyaeva_natalya',
    photo: photos.tunyaeva_natalia,
    name: 'Тюняева Наталья Михайловна',
    birthdate: '19.02.1961',
    candidate: [
      {
        areaNumber: 10,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'chraplak_igor',
    name: 'Храплак Игорь',
    birthdate: '03.11.1993',
    photo: photos.chraplak,
    candidate: [
      {
        areaNumber: 13,
        role: '26 лет. Менеджер IT-проектов, Общество с ограниченной ответственностью "Эд Вест"',
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
        message:
          'Я Игорь и я хочу стать не просто депутатом, а голосом людей, которые живут со мной в одном районе. Моя цель — это удобное и красивое благоустройство дворов, качественные дороги и тротуары, а также современные и чистые места сбора мусора. Моя мечта — сделать так, чтобы люди чувствовали, что их дом не заканчивается за дверью квартиры или дома.',
      },
    ],
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/igorchraplak' },
      { title: LinkTitle.instagram, url: 'https://instagram.com/igorchraplak' },
      { title: LinkTitle.gorprojects, url: 'https://go.city4people.ru/fundraising/personal/425' },
    ],
  },
  {
    alias: 'chekmarev_artem',
    name: 'Чекмарев Артем Олегович',
    birthdate: '17.05.1986',
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'chernikova_irina',
    name: 'Черникова Ирина Аркадьевна',
    birthdate: '23.05.1972',
    candidate: [
      {
        areaNumber: 15,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sherstnyakov_konstantin',
    name: 'Шерстняков Константин Александрович',
    birthdate: '19.06.1966',
    candidate: [
      {
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'shubin_andrej',
    name: 'Шубин Андрей Александрович',
    birthdate: '10.01.1985',
    candidate: [
      {
        areaNumber: 7,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'yudin_aleksej',
    name: 'Юдин Алексей Сергеевич',
    birthdate: '08.06.1976',
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'yanchich_konstantin',
    name: 'Янчич Константин Константинович',
    birthdate: '18.12.1996',
    links: [
      { title: LinkTitle.telegram, url: 'http://t.me/rusnevsmile' },
      { title: LinkTitle.vk, url: 'https://vk.com/rusnevsmile' },
      { title: LinkTitle.instagram, url: 'https://www.instagram.com/rusnevsmile/' },
    ],
    photo: photos.yanchich,
    candidate: [
      {
        areaNumber: 3,
        project: Project.gorpr,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'kosarev_aleksandr',
    name: 'Косарев Александр Александрович',
    birthdate: '16.02.1989',
    candidate: [{ locationType: LocationType.region, callNumber: 7, areaNumber: 4 }],
  },
  {
    alias: 'malyukov_igor',
    name: 'Малюков Игорь Алексеевич',
    birthdate: '19.10.1968',
    candidate: [{ locationType: LocationType.region, callNumber: 7, areaNumber: 4 }],
  },
  {
    alias: 'meshkov_petr',
    name: 'Мешков Петр Станиславович',
    birthdate: '22.10.1965',
    candidate: [{ locationType: LocationType.region, callNumber: 7, areaNumber: 10 }],
  },
  {
    alias: 'shibalkin_dmitrij',
    name: 'Шибалкин Дмитрий Александрович',
    birthdate: '11.03.1981',
    candidate: [
      { locationType: LocationType.region, callNumber: 7, areaNumber: 19, status: CandidateStatuses.declined },
    ],
  },
  {
    alias: 'shcherbakov_vladimir',
    name: 'Щербаков Владимир Митрофанович',
    birthdate: '03.07.1958',
    candidate: [
      { locationType: LocationType.region, callNumber: 7, areaNumber: 5, status: CandidateStatuses.declined },
    ],
  },
]

export default noParty
