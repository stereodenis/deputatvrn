import React, { useCallback, memo } from 'react'
import { Highlighter, Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead'
import { Image } from 'react-bootstrap'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { useHistory } from 'react-router-dom'

import * as photos from '../../images/candidates'
import persons from '../../data/persons'
import { Person } from '../../types'

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
  const renderMenu = useCallback((results: Person[], menuProps, props) => {
    return (
      <Menu {...menuProps}>
        {results.map((item, index) => (
          <MenuItem key={item.alias} option={item} position={index}>
            <Image src={item.photo || photos.noPhoto} height={32} />
            <Highlighter search={props.text}>{item.name}</Highlighter>
          </MenuItem>
        ))}
      </Menu>
    )
  }, [])

  return (
    <Typeahead
      id='persons-search'
      labelKey='name'
      options={persons}
      align='left'
      placeholder='Поиск...'
      onChange={handleSearch}
      // @ts-ignore
      renderMenu={renderMenu}
      clearButton
      emptyLabel='Ничего не найдено'
      paginationText='Показать больше...'
    />
  )
})
