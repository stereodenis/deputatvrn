import * as photos from '../../images/candidates'
import { CandidateStatuses, LocationType, Parties, Person } from '../../types'

const newPeople: Person[] = [
  {
    alias: 'anferov_vyacheslav',
    name: 'Анфёров Вячеслав Валерьевич',
    photo: photos.anferov,
    birthdate: '28.04.1988',
    bio:
      'Уже 12 лет в бизнесе. В 2014 году открыл первый кроссфит-клуб. За 6 лет клиентами компании стали более 30 000 человек. Сегодня в группу компаний SKALA входят 5 фитнес-клубов и маркетинговое агентство.Создал образовательную программу «Школа малого бизнеса», обучение по которой прошли более 2 000 человек. Спортивным проектом «Твой подвиг» объединил 4 000 человек. 5 лет поддерживает благотворительную организацию «Общие дети». Помогает воспитанникам детских домов сделать спорт частью их жизни.Убежден, что спорт должен быть доступен каждому. Делает всё, чтобы вовлекать детей и подростков в спортивную жизнь. Планирует разработку спортивно-оздоровительных программ для людей старшего поколения.Крепкий семьянин, отец двоих детей.',
    candidate: [
      {
        areaNumber: 2,
        party: Parties.newPeople,
        role: 'Владелец группы компаний SKALA',
        message:
          'Я не понаслышке знаю о проблемах малого бизнеса. О проблемах организации спортивно- оздоровительных и образовательных мероприятий. Пора наладить связь между государством и предпринимательским сообществом. Сегодняшняя ситуация показывает, что нам есть что обсудить.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kulyasov',
    name: 'Кулясов Алексей Николаевич',
    birthdate: '14.09.1981',
    bio:
      'Основал Центр правового и хозяйственного обеспечения для работы с проблемными организациями. Полностью разработал план развития Поворинского района Воронежской области. Участвовал в благотворительных акциях. За личные средства приобрёл автобус для одной из спортивных школ региона. Помогал начинающим бизнесменам развивать своё дело, работая в общественном объединении «Опора России». Идёт в политику, чтобы улучшить качество жизни в регионе. Считает, что первый шаг в этом направлении – создание современных рабочих мест и разработка комплексных программ в социальной сфере.',
    candidate: [
      {
        areaNumber: 3,
        party: Parties.newPeople,
        role: 'Юрист, предприниматель',
        message:
          'Все сферы деятельности, где возможна конкуренция и извлечение прибыли, должны освободиться от госмонополии. Государство из исполнителя станет заказчиком товаров и услуг – появятся новые рабочие места, и отечественный бизнес выйдет на международный уровень!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 3,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kovaleva_elena',
    name: 'Ковалева Елена Андреевна',
    birthdate: '17.07.1984',
    photo: photos.kovaleva_elena,
    bio:
      'Волевая и целеустремлённая. Занималась созданием добровольческих дружин для содействия правоохранительным органам. Организовывала проекты и проводила акции, в которых приняли участие 70 000 человек. Как юрист провела более 1 000 бесплатных консультаций для детей, пострадавших от сексуального насилия, и их семей. Отмечена именной благодарностью Главного управления уголовного розыска РФ за содействие в раскрытии 17 дел по преступлениям особо тяжкого характера. Активный зооволонтёр. Занимается лечением бездомных животных и поиском новых хозяев для них.',
    candidate: [
      {
        areaNumber: 4,
        party: Parties.newPeople,
        role: 'Предприниматель, юрист, активный общественный деятель',
        message:
          'Люди должны быть уверены, что принятые законы действуют безоговорочно. Если ты их не нарушал, значит, никто и никогда не сможет лишить тебя свободы, имущества или здоровья. Каждый должен иметь возможность свободно выражать собственное мнение, не опасаясь преследований.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 20,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 4,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gurchenko_sergey',
    name: 'Гурченко Сергей Андреевич',
    photo: photos.gurchenko_sergey,
    birthdate: '15.10.1993',
    bio:
      'Занимается общественной деятельностью с 17 лет. Создал проект «Мой дом – моя крепость», чтобы напомнить руководителям структур ЖКХ об их обязанностях перед жильцами. Сергей считает, что коммунальщики должны прозреть и увидеть за квитанциями людей!',
    candidate: [
      {
        areaNumber: 6,
        party: Parties.newPeople,
        role: 'Активист, молодёжный лидер',
        message:
          'Готов бороться за правду и справедливость. Благодаря ему привлечены к ответственности владельцы 10 торговых точек, продававших алкоголь несовершеннолетним. Организовывал донорские акции в своём университете и вовлёк в них более 250 студентов и преподавателей.Основал фестиваль молодёжных субкультур, набравший 1 000 зрителей и ставший традиционным.Настало время остановить творящийся в городе «коммунальный беспредел» и также упорядочить выделение «пятен» под жилую застройку, приведя её в соответствие с транспортным каркасом. Пора перекрыть «уплотняющую» застройку и строительство многоэтажных жилых комплексов в районах с плохой транспортной доступностью!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 6,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'tukhin_vladimir',
    name: 'Тюхин Владимир Сергеевич',
    birthdate: '01.10.1993',
    photo: photos.tukhin_vladimir,
    bio:
      '5 лет развивал донорское движение «Качели», вовлёк в этот вид благотворительности более 3 000 человек. Убеждён, что высшая ценность в жизни – бескорыстная помощь людям. 7 лет занимался восстановлением лесов, пострадавших во время пожаров 2010 года, высадил более 20 000 сосен и елей .Руководитель проекта «Мой дом – моя крепость» в Левобережном районе. Цель проекта – напомнить коммунальщикам об их обязанностях перед жильцами. Учит результативному общению с сотрудниками сферы ЖКХ с позиции буквы закона.',
    candidate: [
      {
        areaNumber: 7,
        party: Parties.newPeople,
        role: 'Общественный деятель, юрист',
        message:
          'Я иду в политику, чтобы изменить облик Левого берега Воронежа, сделать его не только чистым и комфортным, но и по- настоящему молодёжным!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 7,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'rogozin_maksim',
    name: 'Рогозин Максим Николаевич',
    birthdate: '25.02.1986',
    photo: photos.rogozin_maksim,
    bio:
      'Убежден, что чужих детей не бывает. Организатор благотворительных образовательных акций для детских домов и приютов по обучению пожарной безопасности, правилам поведения при ЧП и обращения в службы помощи. Занятия проводит творчески: в виде песочной анимации и светописи. Разработал проект по повышению юридической грамотности населения. Выступает за инновации в педагогическом процессе и новые технические решения. Считает, что существующая система образования не способствует равенству возможностей: существует большой разрыв между качеством образования, которое получают дети из детских домов, из бедных семей и дети, растущие в богатых семьях. Из-за этого формируется общество наследственной бедности: в лучших школах учатся только те, кто может за это заплатить. Женат, есть сын.',
    candidate: [
      {
        areaNumber: 8,
        party: Parties.newPeople,
        role: 'Инженер',
        message:
          'Мой личный опыт преподавания с помощью песочной анимации доказал свою эффективность – современные дети требуют современных подходов. В настоящее время я учусь в Международном институте компьютерных технологий – сейчас нашему региону нужны цифровые решения, которые смогли бы обеспечить доступ к качественному образованию для каждого!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 8,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'zuev_evgenij',
    name: 'Зуев Евгений Игоревич',
    photo: photos.zuev,
    birthdate: '26.12.1989',
    bio:
      'Закончив школу, выбрал для себя одну из самых сложных и опасных профессий – спасатель. В 21 год возглавил отдел организации аварийно-спасательных работ Управления гражданской обороны Воронежской области. Работал директором Дома Молодёжи (Областного Молодёжного Центра): организовал переезд в новое здание и создал бесплатный коворкинг-центр. Как директор Центра обеспечения и развития образования отвечал за строительство социально значимых объектов в регионе: школ, детских садов и яслей. Автор социально-экологических проектов, в которых уже приняли участие 7 тысяч человек. Разработал проект «СТОП коррупция» и приступил к его реализации. Настало время повысить конкурентоспособность страны, объединив государство, общество и бизнес. Мотивировать бизнес (в том числе и с помощью налогов вычетов) вкладывать деньги в создание образовательных программ в вузах, создать систему государственных и частных грантов для талантливых студентов на создание собственных стартапов и финансирование их научной деятельности.',
    candidate: [
      {
        areaNumber: 9,
        party: Parties.newPeople,
        role:
          'Руководитель Центра развития внешнеэкономической деятельности Торгово-промышленной палаты Воронежской области',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 5,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 9,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'bespalova_diana',
    name: 'Беспалова Диана Егоровна',
    photo: photos.bespalova_diana,
    birthdate: '12.01.1987',
    bio:
      'Много лет изучала тему сиротства, была волонтёром в детских домах. Узнав о явлении «кругового сиротства», когда, вырастая, воспитанники детских домов делают сиротами своих детей, поняла, что не может оставаться «приходящей помощницей», и записалась в школу приёмных родителей. Целенаправленно усыновила ребёнка, у которого были родные братья или сёстры, чтобы они могли расти и воспитываться вместе. Своим примером вдохновила на усыновление или удочерение тех, кто долго не мог решиться на этот ответственный шаг, помогла им справиться со страхами и сомнениями.',
    candidate: [
      {
        areaNumber: 10,
        party: Parties.newPeople,
        role: 'Мама 7 детей, четверо из них «рожденные сердцем» - приёмные дети',
        message:
          'По статистике только 10% выпускников детских домов интегрируются в общество. Явление социального сиротства, когда в детских домах оказываются от 3 до 7 детей из одной семьи, существует из-за того, что родители оказываются в тяжёлой жизненной ситуации. Обычно такая семья нуждается не столько в финансовой, сколько в психологической помощи. Необходимо создание организации психологической поддержки на государственном уровне, которая осуществляла бы работу с приёмными и многодетными семьями. Многих льгот для многодетных семей, действующих в других регионах, нет в Воронеже. Настало время это изменить!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 10,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'penkova_kseniya',
    photo: photos.penkova_kseniya,
    name: 'Пенькова Ксения Юрьевна',
    birthdate: '31.10.1986',
    bio:
      'Большую часть жизни отстаивает интересы людей. Руководит крупнейшим в регионе волонтёрским движением в 4 000 человек. Помогла 33-м интернатам Воронежской области и 5 000 нуждающимся семьям. Координировала партнерский проект с миланским футбольным клубом, благодаря которому более 100 детей из домов-интернатов Семилукского, Бобровского районов и Воронежа социализи- ровались через игру в футбол под руководством двух тренеров клуба. Ксению называют «феей для сирот» – по её инициативе появились няни, работающие с новорожденными «отказниками». Курирует проект «Социальный склад», в рамках которого кризисные семьи могут бесплатно получить одежду и обувь.',
    candidate: [
      {
        areaNumber: 11,
        party: Parties.newPeople,
        role: 'Руководитель благотворительной организации «Общие дети»',
        message:
          'Я поняла, что могу помогать не только отдельным людям, а делать это системно вместе с партией «Новые люди». Для меня идеальное государство – то, в котором у благотворительных организаций попросту нет работы.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 11,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'altukhova_yuliya',
    photo: photos.altukhova_yuliya,
    name: 'Алтухова Юлия Валериевна',
    birthdate: '13.08.1982',
    bio:
      'Председатель президиума городской общественной организации «Совет женщин». Курировала национальные проекты Управления здравоохранения. За 14 лет медицинской практики помогла более 5 000 пациентам. Лично выиграла 4 гранта правительства региона и 2 — президентских. Помогала в их получении воронежским предпринимателям (общая сумма – 48 млн рублей).Дважды организовала семейный праздник «Не ремень, а пример», где объяснила: главное в воспитании детей — ласка и забота, а не ругань и крики. Совместно с ВГМУ им. Н. Н. Бурденко запустила фестиваль «Воронеж на орбите здоровья», где 1 200 человек смогли получить бесплатную консультацию.',
    candidate: [
      {
        areaNumber: 12,
        party: Parties.newPeople,
        role: 'Врач общей практики, кандидат медицинских наук, общественный деятель',
        message:
          'Время создать правильную анатомию здравоохранения в нашем регионе, с новыми стандартами и эффективной системой взаимодействия «доктор- пациент»! Для людей! Люди имеют право на здоровье!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 12,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gurskaya',
    photo: photos.gurskaya,
    name: 'Гурская Анна Александровна',
    birthdate: '04.01.1985',
    bio:
      'Признана «Гордостью России». Мама двоих сыновей. 5 лет назад Анна стала мамой супергероя – особенного ребёнка. Так появился её блог «Мама киборга No1», через который она помогает сотням женщин с детьми-инвалидами справляться с непростыми жизненными обстоятельствами, принять особенность своих детей, верить в себя и свои силы. Чтобы помогать детям с аплазией, создала проект #мойдругкиборг: производство одежды по эскизам, нарисованным её сыном. Цель – помощь подшефному ребёнку в приобретении протеза руки.Благодаря Анне более 200 мам смогли получить положенные им льготы и компенсации. Одну молодую маму прямо в роддоме убедила не отказываться от ребёнка без руки. Ежемесячно организует детские праздники в Воронеже, а также детские спортивные мероприятия для детей с ограниченными возможностями здоровья.',
    candidate: [
      {
        areaNumber: 13,
        party: Parties.newPeople,
        role: 'Блогер, общественный деятель',
        message:
          'Моя жизненная позиция и ценности очень близки многим воронежцам, потому что я человек- дело. Уже сейчас я самостоятельно делаю то, ради чего иду в политику. Я хочу вывести свои социальные и благотворительные проекты на областной уровень.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 7,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 13,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'ekaterina_baklanova',
    photo: photos.ekaterina_baklanova,
    name: 'Бакланова Екатерина Павловна',
    birthdate: '12.07.1994',
    bio:
      'В 20 лет запустила первый практико-ориентированный проект «Моя карьера», который помог найти профессию 5 000 школьникам. Проект получил известность за пределами Воронежской области – в нём приняли участие школьники из Москвы и Санкт-Петербурга.Руководитель образовательного фестиваля «Свежая лекция», в рамках которого студенты могли напрямую выстроить диалог с успешными бизнесменами города. Участник зеленого движения России «ЭКА». Организатор проекта «Больше кислорода» по высадке 5 000 саженцев деревьев в Воронежской области.Награждена ведомственным знаком «Педагог-наставник лауреата премии по поддержке талантливой молодёжи».',
    candidate: [
      {
        areaNumber: 14,
        party: Parties.newPeople,
        role: 'Специалист по обучению персонала в крупной страховой компании',
        message:
          'Система образования не отвечает потребностям современных школьников. Сейчас выпускники школ оказываются совершенно не готовыми к вызовам взрослой жизни. Я уверена в том, что система образования должна быть разнообразной, отражать интересы и склонности каждого учащегося. Это станет возможно, если она станет пластичной и начнет включать в себя такие важные для жизни предметы, как основы бизнеса, финансовой грамотности, цифровой безопасности, уроки этики.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 14,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'strelnikov_andrey',
    photo: photos.strelnikov_andrey,
    name: 'Стрельников Андрей Викторович',
    birthdate: '22.06.1985',
    bio:
      'Реализовал ряд крупных проектов для образовательного центра «Лидер» им. А.В. Гордеева, участвовал в создании проекта школы, дизайна для РАНХиГС при президенте РФ, образовательного центра «Воронежский Институт Развития Образования», детского центра IT CUBE. Создает проекты для таких крупных компаний, как Сбербанк, ГК «ЭФКО», Воронежская Девелоперская Компания. Основное направление деятельности – проектирование социально-значимых объектов: школ, детских садов, спортивных и рекреационных учреждений. Ежегодно становится приглашенным экспертом для оценки выпускных дипломных работ архитектурного факультета. Выступил соорганизатором круглого стола по теме образовательных программ для дошкольных учреждений. В его компании проходят летнюю практику студенты-архитекторы. Разработал дизайн-проект реконструкции 1-й очереди спортивного комплекса «Гран-При».',
    candidate: [
      {
        areaNumber: 15,
        party: Parties.newPeople,
        role: 'Архитектор, руководитель собственного архитектурного бюро',
        message:
          'Массовая застройка игнорирует задачи инфраструктуры. Городу необходима комфортная городская среда – как с точки зрения внешнего вида, так и экологической составляющей. Дома-муравейники должны уйти в прошлое. Я хочу, чтобы люди поняли, что они – реальная власть в стране, что их мнение важно. Не отдельные чиновники, а только сами люди должны решать, в каком городе будут жить они и их дети.',
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 15,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'malkova_olga',
    photo: photos.malkova_olga,
    name: 'Малкова Ольга Андреевна',
    birthdate: '20.08.1995',
    bio:
      'Молодой специалист в сферах агроинженерии, электроэнергетики и электротехники. Идеи, изложенные в выпускных квалификационных работах Ольги, нашли практическое применение на территории региона. Разработанную ею энергоэффективную систему освещения производственного участка электронных изделий внедрила в свою работу научно-производственная организация в Воронеже, а проект реконструкции силовой цепи – подстанция Ольховатского района Воронежской области. Успешно реализовала проекты с участием малого и среднего бизнеса, направленные на улучшение качества жизни воронежцев. Участвовала в областной акции по восстановлению зеленого пояса города, пострадавшего от пожаров в 2010 году – высадке деревьев.',
    candidate: [
      {
        areaNumber: 16,
        party: Parties.newPeople,
        role: 'Работает в сфере агропромышленного комплекса, специалист по электронным продажам',
        message:
          'Хочу добиться эффективной трудовой занятости молодых специалистов с потенциалом развития. У них должна быть возможность работать и достойно зарабатывать, строить карьеру, реализовывать идеи, создавать задел на будущее. Поможем молодёжи – сохраним рабочие профессии!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 16,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'karygin',
    photo: photos.karygin,
    name: 'Карыгин Роман Алексеевич',
    birthdate: '19.04.1987',
    bio:
      'Руководитель проекта «Мой дом – моя крепость» в Коминтерновском районе. Цель проекта – напомнить коммунальщикам об их обязанностях перед жильцами. К примеру, в одном из домов добился перерасчёта оплаты коммунальных услуг – сумма составила более 150 000 рублей! Помогает документально оформить отказ от услуг Фонда Капитального Ремонта, что позволяет жильцам воспользоваться средствами для ремонта текущих неисправностей самим МКД. Занимается общественной и благотворительной деятельностью. Помогает детским интернатам Воронежской области, регулярно передает для них продукцию своей фабрики.',
    candidate: [
      {
        areaNumber: 17,
        party: Parties.newPeople,
        role: 'Основатель компании по производству детской и корпоративной одежды',
        message:
          'Настало время снизить налоговую нагрузку для малого и среднего бизнеса и устранить «серые» схемы выплаты заработной платы. Дать льготы и преимущества бизнесу, создающему новые производства и рабочие места, выпускающему качественные и доступные товары, за пределами столиц и крупных городов.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 17,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'lysikov_dmitriy',
    name: 'Лысиков Дмитрий Валериевич',
    birthdate: '23.04.1972',
    candidate: [
      {
        areaNumber: 18,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.newPeople,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'ivanov_dmitriy',
    photo: photos.ivanov_dmitriy,
    name: 'Иванов Дмитрий Михайлович',
    birthdate: '06.02.1987',
    bio:
      'Борется за благоустройство Коминтерновского района. Добился ремонта остановок, междворовых проездов и тротуаров в жилых кварталах на улице Хользунова. Заставил коммунальщиков навести порядок на тех улицах, уборка которых не производилась в течение нескольких лет. Противостоит вырубке и застройке «Северного леса». Выступает за удобную городскую среду: для молодых мам с колясками, пенсионеров, людей с особыми потребностями и оборудование домов пандусами. Представляет интересы всех, кто устал требовать от организаций простого выполнения их обязанностей и получать формальные «отписки» и сроки, которые даже не попытаются соблюсти.',
    candidate: [
      {
        areaNumber: 19,
        party: Parties.newPeople,
        role: 'Юрист, руководитель регионального подразделения научно-производственной компании «Фаберлик»',
        message:
          'Тех, от кого зависит жизнь людей – от участкового до главы управы – должны выбирать люди. Доказывать свою полезность реальными делами и отчитываться перед населением – прямая обязанность чиновников!',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 19,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'zykeev_boris',
    photo: photos.zykeev,
    name: 'Зыкеев Борис Владимирович',
    birthdate: '30.08.1984',
    bio:
      'За год организовал и провёл 12 соревнований разного масштаба (от клубных до областных), 4 судейских семинара, 5 мастер-классов, на которые привлёк спортсменов мирового и олимпийского уровня.Председатель попечительского совета клуба единоборств «Дмитрий Донской». Как наставник повлиял на мировоззрение 4 000 перспективных и активных молодых людей. Считает, что для укрепления здоровья нации необходимо воспитывать сильную, инициативную молодёжь, будущую опору России.Отстаивает интересы жителей своего микрорайона. Выступает за создание открытых спортивных площадок с функциональными тренажерами в микрорайонах Северный и Подгорное.',
    candidate: [
      {
        areaNumber: 20,
        party: Parties.newPeople,
        role: 'Вице-президент региональной Федерации Панкратиона(вид спортивных единоборств)',
        message:
          'Считаю своей обязанностью создание таких условий для наших семей, которые оградят жителей района от вредных и пагубных привычек. Я уверен, что в нашем районе необходимо создание спортивных объектов, которые подойдут как старшему, так и младшему поколению. Как отец двоих детей поставил себе цель реализовать эти проекты.',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 20,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'stepakov_maksim',
    name: 'Степаков Максим Игоревич',
    birthdate: '14.02.1997',
    candidate: [
      {
        areaNumber: 21,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.newPeople,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 21,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'mamardashvili_rolandi',
    name: 'Мамардашвили Роланди Зурабович',
    birthdate: '15.11.1993',
    candidate: [
      {
        areaNumber: 22,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.newPeople,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'eremichev_sergey',
    name: 'Еремичев Сергей Владимирович',
    birthdate: '14.04.1996',
    candidate: [
      {
        areaNumber: 23,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.newPeople,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 23,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'zhavoronkova_yuliya',
    photo: photos.zhavoronkova_yuliya,
    name: 'Жаворонкова Юлия Сергеевна',
    birthdate: '07.04.1976',
    bio:
      'Развивает собственное дело в бьюти-индустрии. Создала программу обучения молодёжи парикмахерскому искусству. Впоследствии участники этих проектов смогли устроиться на работу по полученной специальности. Вела курсы повышения квалификации мастеров-па- рикмахеров.Всегда интересовалась общественной и политической жизнью города. Участвовала в различных благотворительных акциях: организовала проекты помощи для многодетных семей и ветеранов войны, оказывала поддержку малоимущим и многодетным семьям. Идёт в политику для того, чтобы дать жителям региона возможность работать и зарабатывать.',
    candidate: [
      {
        areaNumber: 24,
        party: Parties.newPeople,
        role: 'Предприниматель, общественный деятель',
        message:
          'Своё дело может открыть каждый, только в современных реалиях сделать это очень тяжело. Малый бизнес «убивает» непосильная налоговая нагрузка, а множество административных барьеров не дают начинающим предпринимателям «расти».',
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.declined,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 24,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'borisov_sergej',
    name: 'Борисов Сергей Анатольевич',
    birthdate: '24.08.1982',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 10,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'busygin_pavel',
    name: 'Бусыгин Павел Игоревич',
    birthdate: '27.04.1988',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zademidkov_sergej',
    name: 'Задемидьков Сергей Павлович',
    birthdate: '29.03.1987',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 17,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'zmienko_maksim',
    name: 'Змиенко Максим Александрович',
    birthdate: '18.05.1983',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 23,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kazarcev_dmitrij',
    name: 'Казарцев Дмитрий Анатольевич',
    birthdate: '25.02.1979',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 22,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kachura_maksim',
    name: 'Качура Максим Олегович',
    birthdate: '17.06.1992',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 21,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'knyazev_stanislav',
    name: 'Князев Станислав Игоревич',
    birthdate: '02.02.1988',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 9,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'lubkov_aleksandr',
    name: 'Лубков Александр Сергеевич',
    birthdate: '15.06.1985',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'netyosov_andrej',
    name: 'Нетёсов Андрей Петрович',
    birthdate: '01.08.1975',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sidelyova_liliya',
    name: 'Сиделёва Лилия Владимировна',
    birthdate: '22.10.1962',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 6,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'skomorohova_yuliya',
    name: 'Скоморохова Юлия Михайловна',
    birthdate: '13.09.1985',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 16,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'stepanenko_andrej',
    name: 'Степаненко Андрей Вячеславович',
    birthdate: '06.03.1996',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 27,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'tkachev_anton',
    name: 'Ткачев Антон Олегович',
    birthdate: '31.03.1994',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 3,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'filippov_yurij',
    name: 'Филиппов Юрий Александрович',
    birthdate: '08.07.1975',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'hrupin_nikita',
    name: 'Хрупин Никита Александрович',
    birthdate: '14.08.1987',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'chekurin_andrej',
    name: 'Чекурин Андрей Александрович',
    birthdate: '08.10.1982',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 2,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'chikalov_ruslan',
    name: 'Чикалов Руслан Анатольевич',
    birthdate: '14.08.1984',
    candidate: [
      {
        party: Parties.newPeople,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'anferov_vyacheslav',
    name: 'Анферов Вячеслав Валерьевич',
    birthdate: '28.04.1988',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 0,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'rataevskaya_elizaveta',
    name: 'Ратаевская Елизавета Сергеевна',
    birthdate: '31.10.2001',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 2,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'trebunskih_darya',
    name: 'Требунских Дарья Александровна',
    birthdate: '23.08.1984',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 3,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'guryanov_nikita',
    name: 'Гурьянов Никита Сергеевич',
    birthdate: '01.04.2001',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 4,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'tkachuk_elena',
    name: 'Ткачук Елена Сергеевна',
    birthdate: '14.01.1998',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 6,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'peresypkin_nikita',
    name: 'Пересыпкин Никита Александрович',
    birthdate: '16.12.1995',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 7,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'kashchenko_maksim',
    name: 'Кащенко Максим Сергеевич',
    birthdate: '18.06.1991',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 8,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gololobov_aleksej',
    name: 'Гололобов Алексей Григорьевич',
    birthdate: '19.05.1993',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 9,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'mahalov_andrej',
    name: 'Махалов Андрей Борисович',
    birthdate: '22.07.1964',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 10,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'golub_andrej',
    name: 'Голуб Андрей Вячеславович',
    birthdate: '29.05.1986',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 11,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gucunaev_georgij',
    name: 'Гуцунаев Георгий Александрович',
    birthdate: '04.07.2001',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 12,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'aniskevich_igor',
    name: 'Анискевич Игорь Сергеевич',
    birthdate: '10.01.1989',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 13,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'hripushin_nikita',
    name: 'Хрипушин Никита Александрович',
    birthdate: '18.09.1998',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 14,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'shevcova_elena',
    name: 'Шевцова Елена Николаевна',
    birthdate: '22.07.1985',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 15,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'harin_dmitrij',
    name: 'Харин Дмитрий Вадимович',
    birthdate: '31.03.1989',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 16,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'gasparik_dayana',
    name: 'Гаспарик Даяна Евгеньевна',
    birthdate: '12.09.2001',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 17,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'karasyov_boris',
    name: 'Карасёв Борис Алесандрович',
    birthdate: '12.10.1982',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 18,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'penigina_valentina',
    name: 'Пенигина Валентина Александровна',
    birthdate: '17.09.2000',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 18,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'sidelev_andrej',
    name: 'Сиделев Андрей Александрович',
    birthdate: '13.11.1987',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 19,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'morozov_miroslav',
    name: 'Морозов Мирослав Романович',
    birthdate: '14.06.2000',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 20,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'ivannikov_vladislav',
    name: 'Иванников Владислав Андреевич',
    birthdate: '14.09.2000',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 21,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'danilov_ivan',
    name: 'Данилов Иван Александрович',
    birthdate: '01.01.1991',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 22,
        listNumber: 1,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'demin_nikita',
    name: 'Демин Никита Владимирович',
    birthdate: '14.06.2002',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 22,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'chernyshov_ilya',
    name: 'Чернышов Илья Александрович',
    birthdate: '06.04.2001',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 23,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'eremina_olga',
    name: 'Еремина Ольга Олеговна',
    birthdate: '24.10.2000',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.newPeople,
        areaNumber: 24,
        listNumber: 2,
        status: CandidateStatuses.declined,
      },
    ],
  },
]

export default newPeople
