import { LocationType, Person, Parties, CandidateStatuses } from '../../types'

const pensioners: Person[] = [
  {
    alias: 'vaskov_evgenij',
    name: 'Васьков Евгений Юрьевич',
    birthdate: '06.03.1974',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 0,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'moskalev_vladimir',
    name: 'Москалев Владимир Александрович',
    birthdate: '06.02.1967',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 0,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kolpakov_pavel',
    name: 'Колпаков Павел Александрович',
    birthdate: '15.11.1974',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 0,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'nesterenko_yurij',
    name: 'Нестеренко Юрий Егорович',
    birthdate: '16.09.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 1,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'plotnikov_sergej',
    name: 'Плотников Сергей Николаевич',
    birthdate: '17.09.1976',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 1,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'baranovich_rimma',
    name: 'Баранович Римма Ивановна',
    birthdate: '05.12.1951',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 1,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'orlova_tatyana',
    name: 'Орлова Татьяна Павловна',
    birthdate: '12.05.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 2,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'borisova_valentina',
    name: 'Борисова Валентина Петровна',
    birthdate: '01.01.1944',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 2,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'vorotnikova_olga',
    name: 'Воротникова Ольга Михайловна',
    birthdate: '15.06.1960',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 2,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'martyanova_valeriya',
    name: 'Мартьянова Валерия Юрьевна',
    birthdate: '01.02.1959',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 3,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lepekhina_mariya',
    name: 'Лепехина Мария Ивановна',
    birthdate: '03.09.1938',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 3,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gordeeva_nadezhda',
    name: 'Гордеева Надежда Георгиевна',
    birthdate: '05.10.1952',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 3,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sologub_elena',
    name: 'Сологуб Елена Львовна',
    birthdate: '24.05.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 4,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'arzhanyh_olga',
    name: 'Аржаных Ольга Николаевна',
    birthdate: '18.02.1983',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 4,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ershova_marina',
    name: 'Ершова Марина Львовна',
    birthdate: '02.11.1961',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 4,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gusakova_lyudmila',
    name: 'Гусакова Людмила Васильевна',
    birthdate: '04.08.1960',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 5,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'korneenko_natalya',
    name: 'Корнеенко Наталья Игоревна',
    birthdate: '06.08.1966',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 5,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'indyuhov_nikolaj',
    name: 'Индюхов Николай Николаевич',
    birthdate: '06.12.1959',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 5,
        listNumber: 3,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'feshchenko_ivan',
    name: 'Фещенко Иван Николаевич',
    birthdate: '12.05.1994',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 7,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lvova_tatyana',
    name: 'Львова Татьяна Львовна',
    birthdate: '16.04.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 7,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'malyzhenkova_larisa',
    name: 'Малыженкова Лариса Николаевна',
    birthdate: '22.06.1945',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 7,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tyulenev_aleksej',
    name: 'Тюленев Алексей Юрьевич',
    birthdate: '11.12.1972',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 8,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mashchenko_vera',
    name: 'Мащенко Вера Александровна',
    birthdate: '11.10.1948',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 8,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'medvedev_vladimir',
    name: 'Медведев Владимир Владимирович',
    birthdate: '22.02.1970',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 8,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gosteva_ekaterina',
    name: 'Гостева Екатерина Евгеньевна',
    birthdate: '17.04.1988',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 9,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zajceva_lyudmila',
    name: 'Зайцева Людмила Витальевна',
    birthdate: '01.04.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 9,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'belkov_vasilij',
    name: 'Бельков Василий Геннадьевич',
    birthdate: '09.02.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 9,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gusakov_vladimir',
    name: 'Гусаков Владимир Иванович',
    birthdate: '03.09.1957',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 10,
        listNumber: 1,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'parahin_sergej',
    name: 'Парахин Сергей Владимирович',
    birthdate: '03.04.1985',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 10,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'esin_aleksandr',
    name: 'Есин Александр Александрович',
    birthdate: '25.05.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 10,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'uzemblo_kseniya',
    name: 'Узембло Ксения Сергеевна',
    birthdate: '13.07.1994',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 11,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tyuleneva_galina',
    name: 'Тюленева Галина Михайловна',
    birthdate: '15.03.1984',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 11,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'legotin_andrej',
    name: 'Леготин Андрей Алексеевич',
    birthdate: '18.11.1963',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 11,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gusakova_inna',
    name: 'Гусакова Инна Владимировна',
    birthdate: '01.01.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 12,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dudukina_valentina',
    name: 'Дудукина Валентина Ефремовна',
    birthdate: '11.04.1940',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 12,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'grechneva_nataliya',
    name: 'Гречнева Наталия Михайловна',
    birthdate: '19.02.1951',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 12,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'banshchikov_maksim',
    name: 'Банщиков Максим Александрович',
    birthdate: '01.07.1978',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 13,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'babin_konstantin',
    name: 'Бабин Константин Александрович',
    birthdate: '19.05.1972',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 13,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'olyunin_aleksandr',
    name: 'Олюнин Александр Петрович',
    birthdate: '09.10.1956',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 13,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'selivanov_aleksej',
    name: 'Селиванов Алексей Владимирович',
    birthdate: '17.03.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 14,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'basova_nataliya',
    name: 'Басова Наталия Ивановна',
    birthdate: '25.03.1962',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 14,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'filippov_andrej',
    name: 'Филиппов Андрей Сергеевич',
    birthdate: '18.01.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 14,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sitnikov_kirill',
    name: 'Ситников Кирилл Юрьевич',
    birthdate: '28.04.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 20,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parfenov_sergej',
    name: 'Парфенов Сергей Васильевич',
    birthdate: '26.11.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 20,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'stukalov_denis',
    name: 'Стукалов Денис Валерьевич',
    birthdate: '06.11.1974',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 20,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'dobrohotova_olga',
    name: 'Доброхотова Ольга Владимировна',
    birthdate: '10.03.1973',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 22,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'frolov_aleksej',
    name: 'Фролов Алексей Дмитриевич',
    birthdate: '09.01.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 22,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'roslyakov_igor',
    name: 'Росляков Игорь Анатольевич',
    birthdate: '02.03.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.pensioners,
        areaNumber: 22,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default pensioners
