import React, { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Main, Areas, Area, Candidates, PersonScreen, Parties, Party, Deputates, Videos } from './screens'

// function RouteWrapper({ component: Component, layout: Layout, ...rest }: RouteProps & { layout: any; component: any }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   )
// }

export default memo(() => (
  <Switch>
    <Route exact path='/' component={Main} />

    <Redirect exact from={'/areas'} to={'/city/areas'} />
    <Redirect from={'/areas/:areaNumber'} to={'/city/areas/:areaNumber'} />
    <Redirect from={'/area/:areaNumber'} to={'/city/areas/:areaNumber'} />
    <Redirect exact from={'/candidates'} to={'/city/candidates'} />
    <Redirect from={'/candidates/:candidateAlias'} to={'/persons/:personAlias'} />
    <Redirect exact from='/parties' to={'/city/parties'} />
    <Redirect from={'/parties/:partyAlias'} to={'/city/parties/:partyAlias'} />
    <Redirect from={'/candidats'} to={'/city/candidates'} />

    <Route exact path={'/:locationType/areas'} component={Areas} />
    <Route path={'/:locationType/areas/:areaNumber'} component={Area} />
    <Route exact path={'/:locationType/candidates'} component={Candidates} />
    <Route path={'/persons/:personAlias'} component={PersonScreen} />
    <Route exact path='/:locationType/parties' component={Parties} />
    <Route path={'/:locationType/parties/:partyAlias'} component={Party} />
    <Route path={'/:locationType/deputates'} component={Deputates} />
    <Route path={'/videos'} component={Videos} />
    <Route path='*'>
      <Redirect to={'/'} />
    </Route>
  </Switch>
))
