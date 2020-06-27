import React, { useEffect } from 'react'
import './App.css'

import data from './screens/map/data'
import { deputats } from './deputats_data'
import { balloonContent } from './helpers'
import { Map } from './screens'

export declare let ymaps: any

export default function App() {
  return <Map />
}
