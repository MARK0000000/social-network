import React, { useState } from 'react'
import Search from '../componenets/Search'
import Person from '../componenets/UI/person/Person'
export default function Communities() {
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
    <section className='communities'>
      <Search className='communities__search'/>
      <div className='communities__content'>
        {list.map((item) => 
          <Person name={item.name} lastMessage={item.lastMessage} photo={item.photo}/>
        )}
      </div>
    </section>
  )
}
