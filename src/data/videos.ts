import { Video } from '../types'

const videos: Video[] = [
  {
    title: 'Особенности депутатской рыбалки',
    url: 'https://www.youtube.com/watch?v=WYct4xnsb0M',
    date: '13.08.2019',
    objects: [{ type: 'person', id: 'alimenko_igor' }],
  },
  {
    title: 'Главный бездельник Воронежской областной думы',
    url: 'https://www.youtube.com/watch?v=xWl0rnoS_rM',
    date: '14.11.2019',
    objects: [{ type: 'person', id: 'blagov_andrej' }],
  },
  {
    title: 'Воронежские жулики. Буздалин',
    url: 'https://www.youtube.com/watch?v=ylkCeFHyyPs',
    date: '14.11.2019',
    objects: [{ type: 'person', id: 'buzdalin_viktor' }],
  },
  {
    title: 'Воронежские жулики. Чуйко',
    url: 'https://www.youtube.com/watch?v=MFHZJ5diaqg',
    date: '7.04.2020',
    objects: [{ type: 'person', id: 'chujko_grigorij' }],
  },
  {
    title: 'Сергей Баженов: выдвигаюсь в муниципальные депутаты',
    url: 'https://www.youtube.com/watch?v=N2jSHirUY-w',
    date: '3.06.2020',
    objects: [{ type: 'person', id: 'bazhenov_sergej' }],
  },
  {
    title: 'На связи #1: Сергей Баженов — о выборах, политике и Прекрасной России Будущего',
    url: 'https://www.youtube.com/watch?v=iFq6n4aD230',
    date: '13.06.2020',
    objects: [{ type: 'person', id: 'bazhenov_sergej' }],
  },
  {
    title: 'Как нас лишают избирательных прав',
    url: 'https://www.youtube.com/watch?v=KnPRWYA3Swg',
    date: '2.08.2020',
    objects: [{ type: 'person', id: 'bazhenov_sergej' }],
  },
  {
    title: 'Георгий Бородин: «Я иду в гордуму»',
    url: 'https://www.youtube.com/watch?v=9PKCJkw5s1s',
    date: '18.05.2020',
    objects: [{ type: 'person', id: 'borodin_georgij' }],
  },
  {
    title: 'Речь Евгения Карпова на заседании избирательной комиссии',
    url: 'https://www.youtube.com/watch?v=goTY29oo-_E',
    date: '4.08.2020',
    objects: [{ type: 'person', id: 'karpov_evgenij' }],
  },
  {
    title: 'Евгений Карпов: «Я иду в городскую думу»',
    url: 'https://www.youtube.com/watch?v=4_Dua7m2ANk',
    date: '8.06.2020',
    objects: [{ type: 'person', id: 'karpov_evgenij' }],
  },
  {
    title: 'Как мы будем побеждать?',
    url: 'https://www.youtube.com/watch?v=8Pig4eKmp2M',
    date: '28.07.2020',
    objects: [{ type: 'person', id: 'karpov_evgenij' }],
  },
  {
    title: 'Блокнот',
    date: '4.03.2020',
    url: 'https://www.youtube.com/watch?v=elpmZtXx7-o',
    objects: [{ type: 'area', id: 'city_1' }],
  },
  {
    title: 'Блокнот',
    date: '5.03.2020',
    url: 'https://www.youtube.com/watch?v=R8ivoafCwHA',
    objects: [{ type: 'area', id: 'city_2' }],
  },
  {
    title: 'Блокнот',
    date: '12.03.2020',
    url: 'https://www.youtube.com/watch?v=B-Kp3Lx6c5s',
    objects: [{ type: 'area', id: 'city_3' }],
  },
  {
    title: 'Блокнот',
    date: '13.03.2020',
    url: 'https://www.youtube.com/watch?v=xGMEdXdh46Q',
    objects: [{ type: 'area', id: 'city_4' }],
  },
  {
    title: 'Блокнот',
    date: '19.03.2020',
    url: 'https://www.youtube.com/watch?v=tH1FszRg5Fc',
    objects: [{ type: 'area', id: 'city_5' }],
  },
  {
    title: 'Блокнот',
    date: '20.03.2020',
    url: 'https://www.youtube.com/watch?v=dBfQVo07Er8',
    objects: [{ type: 'area', id: 'city_6' }],
  },
  {
    title: 'Блокнот',
    date: '26.03.2020',
    url: 'https://www.youtube.com/watch?v=1TQPsPMlIvY',
    objects: [{ type: 'area', id: 'city_7' }],
  },
  {
    title: 'Блокнот',
    date: '27.03.2020',
    url: 'https://www.youtube.com/watch?v=ZJUf3tU3Tis',
    objects: [{ type: 'area', id: 'city_8' }],
  },
  {
    title: 'Блокнот',
    date: '21.05.2020',
    url: 'https://www.youtube.com/watch?v=QRvNCMkZqr8',
    objects: [{ type: 'area', id: 'city_9' }],
  },
  {
    title: 'Блокнот',
    date: '21.05.2020',
    url: 'https://www.youtube.com/watch?v=lN-Fw3pxhQk',
    objects: [{ type: 'area', id: 'city_10' }],
  },
  {
    title: 'Блокнот',
    date: '28.05.2020',
    url: 'https://www.youtube.com/watch?v=BG9Nxf_htXI',
    objects: [{ type: 'area', id: 'city_11' }],
  },
  {
    title: 'Блокнот',
    date: '29.05.2020',
    url: 'https://www.youtube.com/watch?v=GBoncMKkKrM',
    objects: [{ type: 'area', id: 'city_12' }],
  },
  {
    title: 'Блокнот',
    date: '4.06.2020',
    url: 'https://www.youtube.com/watch?v=2Po0mKee_as',
    objects: [{ type: 'area', id: 'city_13' }],
  },
  {
    title: 'Блокнот',
    date: '5.06.2020',
    url: 'https://www.youtube.com/watch?v=QORbg42IvvI',
    objects: [{ type: 'area', id: 'city_14' }],
  },
  {
    title: 'Блокнот',
    date: '11.06.2020',
    url: 'https://www.youtube.com/watch?v=iyjDQ_pbh74',
    objects: [{ type: 'area', id: 'city_15' }],
  },
  {
    title: 'Блокнот',
    date: '11.06.2020',
    url: 'https://www.youtube.com/watch?v=Wm7yYPO3PUk',
    objects: [{ type: 'area', id: 'city_16' }],
  },
  {
    title: 'Блокнот',
    date: '18.06.2020',
    url: 'https://www.youtube.com/watch?v=i6s2roeYDuA',
    objects: [{ type: 'area', id: 'city_17' }],
  },
  {
    title: 'Блокнот',
    date: '18.06.2020',
    url: 'https://www.youtube.com/watch?v=Lm4j1SgdDlg',
    objects: [{ type: 'area', id: 'city_18' }],
  },
  {
    title: 'Блокнот',
    date: '25.06.2020',
    url: 'https://www.youtube.com/watch?v=4WJ9b1Thmpg',
    objects: [{ type: 'area', id: 'city_19' }],
  },
  {
    title: 'Блокнот',
    date: '26.06.2020',
    url: 'https://www.youtube.com/watch?v=5XQegxy3HkE',
    objects: [{ type: 'area', id: 'city_20' }],
  },
  {
    title: 'Блокнот',
    date: '2.07.2020',
    url: 'https://www.youtube.com/watch?v=ZoJ6GM8a8tY',
    objects: [{ type: 'area', id: 'city_21' }],
  },
  {
    title: 'Блокнот',
    date: '3.07.2020',
    url: 'https://www.youtube.com/watch?v=ydIJQLXXHBM',
    objects: [{ type: 'area', id: 'city_22' }],
  },
  {
    title: 'Блокнот',
    date: '8.07.2020',
    url: 'https://www.youtube.com/watch?v=gIvNuAb3iuk',
    objects: [{ type: 'area', id: 'city_23' }],
  },
  {
    title: 'Блокнот',
    date: '9.07.2020',
    url: 'https://www.youtube.com/watch?v=7797Gnt_SU8',
    objects: [{ type: 'area', id: 'city_24' }],
  },
]

export default videos
