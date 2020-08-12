import React, { memo } from 'react'
import { Badge } from 'react-bootstrap'

import { CandidateStatuses } from '../../types'

const mapStatusToVariant = {
  [CandidateStatuses.registered]: 'success',
  [CandidateStatuses.declined]: 'danger',
  [CandidateStatuses.lost]: 'dark',
}

export default memo(({ status }: { status?: CandidateStatuses }) => (
  <Badge pill variant={status ? mapStatusToVariant[status] : 'warning'} style={{ whiteSpace: 'normal' }}>
    {status || 'Выдвинут'}
  </Badge>
))
