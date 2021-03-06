import React, { memo } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CURRENT_CITY_CALL_NUMBER, CURRENT_REGION_CALL_NUMBER } from '../../constants'
import { noPhoto } from '../../images/candidates'
import { LocationType, Person } from '../../types'
import { PartyLink } from '../index'

export default memo(({ person, locationType }: Props) => {
  const currentCallNumber = locationType === 'city' ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  const deputatCandidate = person?.candidate.find((c) => c.deputat && c.callNumber === currentCallNumber)

  if (!person || !deputatCandidate) {
    return null
  }

  return (
    <div className=''>
      <Link to={`/persons/${person.alias}`} className='d-block'>
        <Image width={'100%'} className='mr-3' src={person.photo || noPhoto} alt={`фото депутата ${person.name}`} />
      </Link>
      <div className='mt-2'>
        <Link to={`/persons/${person.alias}`} className='d-block'>
          {person.name}
        </Link>
        <PartyLink party={deputatCandidate.party} locationName={deputatCandidate.locationType} />
        <div className='mt-1'>
          {deputatCandidate.areaNumber === 0 ? 'По списку партии' : `${deputatCandidate.areaNumber} округ`}
        </div>
        {/*<div className='mt-1'>Адрес приёмной:</div>*/}
        {/*<div>{deputatCandidate?.deputat?.office}</div>*/}
        {/*<div className='mt-1'>Телефон приёмной:</div>*/}
        {/*<div>*/}
        {/*  {deputatCandidate?.deputat?.phones?.map((phone) => {*/}
        {/*    return (*/}
        {/*      <a key={phone} href={`tel:${phone}`} className='d-block'>*/}
        {/*        {phone}*/}
        {/*      </a>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</div>*/}
        {deputatCandidate?.deputat?.website && (
          <a
            className='d-block mt-1'
            href={deputatCandidate?.deputat?.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            Перейти на сайт депутата
          </a>
        )}
      </div>
    </div>
  )
})

interface Props {
  person?: Person
  locationType: keyof typeof LocationType
}
