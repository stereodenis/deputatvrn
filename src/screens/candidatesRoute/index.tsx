import React, { memo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Candidates from '../candidatesScreen'
import Candidate from '../candidateScreen'

export default memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={Candidates} />
      <Route path={`${path}/:candidateAlias`} component={Candidate} />
    </Switch>
  )
})
