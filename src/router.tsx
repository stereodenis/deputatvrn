import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Main, Areas, Area, Candidates, Candidate, Parties, Party } from './screens'

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
    <Route exact path={'/:locationType/areas'} component={Areas} />
    <Route path={'/:locationType/areas/:areaNumber'} component={Area} />
    <Route exact path={'/:locationType/candidates'} component={Candidates} />
    <Route path={'/:locationType/candidates/:candidateAlias'} component={Candidate} />
    <Route exact path='/:locationType/parties' component={Parties} />
    <Route path={'/:locationType/parties/:partyAlias'} component={Party} />
  </Switch>
))
