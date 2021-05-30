import React from 'react'

import Separator from './Separator'
import Item from './Item'

const MenuItems = ({ children, refs = {}, isLastItem }) => {
  return React.Children.map(children, (child) => {
    const id = child?.props?.['data-id']
    const separatorId = id + '-separator'

    return id ? (
      <>
        <Item id={id} key={'menuItem__' + id} refs={refs}>
          {child}
        </Item>
        {!isLastItem(id) && <Separator id={separatorId} refs={refs} />}
      </>
    ) : (
      child
    )
  })
}

export default MenuItems