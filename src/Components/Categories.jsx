import React from 'react'

function Categories({item}) {
  return (
    <div className="categories">
        <ul>
          <li className="active">Все</li>
          <li>Мясные</li>
          {/* {
            item.map(el => <li>el</li>)
          } */}
          {/* <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li> */}
        </ul>
    </div>
  )
}

export default Categories
