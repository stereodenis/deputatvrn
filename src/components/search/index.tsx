import React, { useCallback, memo } from 'react'
import { Highlighter, Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead'
import List from 'react-tiny-virtual-list'
import { Image } from 'react-bootstrap'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { useHistory } from 'react-router-dom'

import * as photos from '../../images/candidates'
import persons from '../../data/persons'

export default memo(() => {
  const history = useHistory()

  const handleSearch = useCallback(
    (selected) => {
      if (selected.length > 0) {
        history.push(`/persons/${selected[0].alias}`)
      }
    },
    [history]
  )
  const renderMenu = useCallback((results, menuProps, props) => {
    const itemHeight = 32

    return (
      <Menu {...menuProps}>
        <List
          scrollToIndex={props.activeIndex || 0}
          height={results.length < 5 ? results.length * itemHeight : 300}
          itemCount={results.length}
          itemSize={itemHeight}
          renderItem={({ index, style }) => {
            const item = results[index]
            return (
              <MenuItem key={item.alias} option={item} position={index} style={style}>
                <Image src={item.photo || photos.noPhoto} height={32} />
                <Highlighter search={props.text}>{item.name}</Highlighter>
              </MenuItem>
            )
          }}
        />
      </Menu>
    )
  }, [])

  return (
    <Typeahead
      labelKey={'name'}
      id='pagination-example'
      options={persons}
      paginate={false}
      placeholder='Поиск...'
      onChange={handleSearch}
      // @ts-ignore
      renderMenu={renderMenu}
    />
  )
})
