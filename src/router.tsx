import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Map, Areas, Area, Candidates, Candidate, Parties, Party } from './screens'

export default memo(() => (
  <Switch>
    <Route exact path='/' component={Map} />
    <Route exact path={'/:locationType/areas'} component={Areas} />
    <Route path={'/:locationType/areas/:areaNumber'} component={Area} />
    <Route exact path={'/:locationType/candidates'} component={Candidates} />
    <Route path={'/:locationType/candidates/:candidateAlias'} component={Candidate} />
    <Route exact path='/:locationType/parties' component={Parties} />
    <Route path={'/:locationType/parties/:partyAlias'} component={Party} />
  </Switch>
))
