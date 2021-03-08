import React from 'react'
import {Menu} from './components/menu'
import {ListByCategory} from './components/list-by-category'

export function MainPage() {
  return (
    <div>
      <Menu />
      <ListByCategory />
    </div>
  )
}
