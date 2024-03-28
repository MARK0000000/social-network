import React, { useState } from 'react'
import Search from './Search'
import MyLink from './UI/link/MyLink'
import Person from './UI/person/Person'

export default function Friends() {
  const [list, setList] = useState([
    {name: "Андрей", lastMessage: "пошел напнпрвапвровоарп"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей", lastMessage: "пошел напнпрвапвровоарп"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей", lastMessage: "пошел напнпрвапвровоарп"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей", lastMessage: "пошел напнпрвапвровоарп"},
    {name: "Андрей"},
    {name: "Андрей"},
    {name: "Андрей"},

  ])


  return (
    <section className='friends'>
      <Search className='friends__search'/>
      <div className='friends__requests'>
        <span>Запросов в друзья 0</span>
        <MyLink text="Посмотреть запросы"/>
      </div>
      <div className='friends__content'>
        {list.map((item) => 
          <Person name={item.name} lastMessage={item.lastMessage} photo={item.photo}/>
        )}
      </div>
    </section>
  )
}
