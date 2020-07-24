import React, { memo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import PartiesScreen from '../partiesScreen'
import PartyScreen from '../partyScreen'

export default memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={PartiesScreen} />
      <Route path={`${path}/:partyAlias`} component={PartyScreen} />
    </Switch>
  )
})
