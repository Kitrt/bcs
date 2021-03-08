import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => {
  const [item, setItem] = useState(null)
  const {list, onChange} = props

  useEffect(() => {
    if (list[0]) setItem(list[0])
  }, [])

  useEffect(() => {
    if (onChange) onChange(item)
  }, [item])

  return (
    <ul className="menu">
      {list && list.map((itemMenu) => (
        <li key={itemMenu.id} 
          className={`menu__item ${item && itemMenu.type === item.type ? 'menu__item--active' : ''}`}
          onClick={() => setItem(itemMenu)}>
          {itemMenu.name}
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func
}

export default React.memo(Menu)