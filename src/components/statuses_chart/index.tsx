import React, { memo, useMemo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { groupBy, flatten } from 'lodash'

import { CandidateStatuses, LocationType, Person } from '../../types'
import { getCurrentCandidates } from '../../helpers'

const mapStatusToColors = {
  'На проверке': '#f0ad4e',
  [`${CandidateStatuses.registered}`]: '#5cb85c',
  [`${CandidateStatuses.declined}`]: '#d9534f',
  [`${CandidateStatuses.lost}`]: '#343A40',
  [`${CandidateStatuses.mandatRejected}`]: '#343A40',
}

export default memo(({ persons, locationType }: Props) => {
  const candidates = useMemo(
    () => flatten(persons.map((p) => getCurrentCandidates(p, locationType))),
    [locationType, persons]
  )
  const groupped = useMemo(() => groupBy(candidates, (c) => c.status || 'pending'), [candidates])
  const data = [
    {
      [CandidateStatuses.registered]: groupped[CandidateStatuses.registered]?.length || 0,
      [CandidateStatuses.declined]: groupped[CandidateStatuses.declined]?.length || 0,
      [CandidateStatuses.lost]: groupped[CandidateStatuses.lost]?.length || 0,
      'На проверке': groupped['pending']?.length || 0,
    },
  ]

  return (
    <div style={{ height: '20px' }}>
      <ResponsiveBar
        indexBy={(d) => String(d[`${CandidateStatuses.registered}`])}
        data={data}
        keys={Object.keys(mapStatusToColors)}
        groupMode='stacked'
        layout='horizontal'
        colors={(d) => mapStatusToColors[d.id]}
        // @ts-ignore
        labelTextColor={(d) => (d.data.id === CandidateStatuses.lost ? 'white' : '#343A40')}
        isInteractive={false}
      />
    </div>
  )
})

interface Props {
  persons: Person[]
  locationType: keyof typeof LocationType
}
