import { Deputat } from './types'

export const balloonContent = (deputat: Deputat, areaNumber: number) => {
  const { website, phones } = deputat
  const phonesLinks = phones
    .map((phone) => {
      return `<a href='tel:${phone}'>${phone}</a>`
    })
    .join(', ')

  return `
  <div style="display: flex; flex-direction: row; align-items: flex-start">
    <img style="margin-right: 10px;" src="${deputat.photo}" alt="фото депутата ${deputat.name}" />
    <div>
      <div style="font-size: 18px;">${deputat.name}</div>
      <div style="margin-top: 10px;">Округ № ${areaNumber}</div>
      <div style="margin-top: 10px;">Адрес приёмной:</div>
      <div>${deputat.office}</div>
      <div style="margin-top: 10px;">Телефон приёмной:</div>
      <div>
        ${phonesLinks}
      </div>
      <a style="display: block; margin-top: 10px;" href="/area/${areaNumber}">Перейти на сайт депутата</a>
    </div>
  </div>
`
}
