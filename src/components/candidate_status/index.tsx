import React, { memo } from 'react'
import { Badge } from 'react-bootstrap'

import { CandidateStatuses } from '../../types'

const mapStatusToVariant = {
  [CandidateStatuses.registered]: 'success',
  [CandidateStatuses.declined]: 'danger',
  [CandidateStatuses.lost]: 'dark',
  [CandidateStatuses.mandatRejected]: 'dark',
}

export default memo(({ status, isList }: { status?: CandidateStatuses; isList?: boolean }) => (
  <>
    <Badge pill variant={status ? mapStatusToVariant[status] : 'warning'} style={{ whiteSpace: 'normal' }}>
      {status || 'Выдвинут'}
    </Badge>
    {isList && <>{' по списку'}</>}
  </>
))
