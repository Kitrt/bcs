import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import {getListByCategory} from './api'
import Menu from './components/menu'
import ListByCategory from './components/list-by-category'

const MAIN_MENU = [
  {
    name: 'Россия',
    type: 'russian',
    id: nanoid()
  },
  {
    name: 'Мир',
    type: 'world',
    id: nanoid()
  },
  {
    name: 'Валюта',
    type: 'currency',
    id: nanoid()
  },
  {
    name: 'Тренды',
    type: 'trends',
    id: nanoid()
  }
]

const MainPage = () => {
  const [itemMainMenu, setItemMainMenu] = useState(null)
  const [itemDataMainMenu, setItemDataMainMenu] = useState({})
  
  const setNewObjectByCategory = (props) => {
    setItemDataMainMenu((prevState) => ({
      ...prevState,
      ...props
    }))
  }

  const getList = (page) => {
    if (!itemMainMenu || !itemDataMainMenu[itemMainMenu.type]) return null
    if (itemDataMainMenu[itemMainMenu.type]['preload']) {
      getListByCategory().then((response) => {
        setNewObjectByCategory({
          [itemMainMenu.type]: {
            data: response.data,
            page: 1,
            preload: false
          }
        })
      }).catch(() => {
        setNewObjectByCategory({
          [itemMainMenu.type]: {
            ...itemDataMainMenu[itemMainMenu.type],
            preload: false
          }
        })
      })
    }

    if (!itemDataMainMenu[itemMainMenu.type]['preload'] && page) {
      setNewObjectByCategory({
        [itemMainMenu.type]: {
          ...itemDataMainMenu[itemMainMenu.type],
          page: page,
          preload: false
        }
      })
    }
  }

  useEffect(() => {
    if (itemMainMenu && !itemDataMainMenu[itemMainMenu.type]) {
      setNewObjectByCategory({
        [itemMainMenu.type]: {
          data: [],
          page: 1,
          preload: true
        }
      })
    }
  }, [itemMainMenu])

  useEffect(() => getList(), [itemDataMainMenu])

  return (
    <div className="main-page">
      <Menu list={MAIN_MENU} onChange={setItemMainMenu} />
      <ListByCategory 
        data={itemMainMenu && itemDataMainMenu[itemMainMenu.type] ? itemDataMainMenu[itemMainMenu.type] : null}
        onNextPage={getList} />
    </div>
  )
}

export default React.memo(MainPage)
