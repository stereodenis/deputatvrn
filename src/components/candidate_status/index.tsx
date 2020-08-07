import React, { memo } from 'react'
import { Badge } from 'react-bootstrap'

import { CandidateStatuses } from '../../types'

export default memo(({ status }: { status?: CandidateStatuses }) => (
  <Badge pill variant={status ? (status === CandidateStatuses.registered ? 'success' : 'danger') : 'warning'}>
    {status || 'Выдвинут'}
  </Badge>
))
