import React, { memo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { groupBy } from 'lodash'

import { CandidateStatuses, LocationType, Person } from '../../types'
import { getCurrentCandidate } from '../../helpers'

const mapStatusToColors = {
  'На проверке': '#f0ad4e',
  [`${CandidateStatuses.registered}`]: '#5cb85c',
  [`${CandidateStatuses.declined}`]: '#d9534f',
}

export default memo(({ candidates, locationType }: Props) => {
  const groupped = groupBy(candidates, (p) => getCurrentCandidate(p, locationType)?.status || 'pending')
  const data = [
    {
      [CandidateStatuses.registered]: groupped[CandidateStatuses.registered]?.length,
      [CandidateStatuses.declined]: groupped[CandidateStatuses.declined]?.length,
      'На проверке': groupped['pending']?.length,
    },
  ]

  return (
    <div style={{ height: '20px' }}>
      <ResponsiveBar
        data={data}
        keys={Object.keys(mapStatusToColors)}
        groupMode='stacked'
        layout='horizontal'
        colors={(d) => mapStatusToColors[d.id]}
        isInteractive={false}
      />
    </div>
  )
})

interface Props {
  candidates: Person[]
  locationType: keyof typeof LocationType
}
