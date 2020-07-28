import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Map, Areas, Area, Candidates, Candidate, Parties, Party } from './screens'

export default memo(() => (
  <Switch>
    <Route exact path='/' component={Map} />
    <Route exact path={'/area'} component={Areas} />
    <Route path={'/area/:areaNumber'} component={Area} />
    <Route exact path={'/candidates'} component={Candidates} />
    <Route path={'/candidates/:candidateAlias'} component={Candidate} />
    <Route exact path='/parties' component={Parties} />
    <Route path={'/parties/:partyAlias'} component={Party} />
  </Switch>
))
