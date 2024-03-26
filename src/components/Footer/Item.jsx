import React from 'react'

const Item = ({Links,title}) => {
  return (
    <ul>
        <h1 className='mb1 font-semibold'>{title}</h1>
    {
        Links.map((Link)=>(
            <li key={Link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm- cursor-pointer' href={Link.link}>{Link.name}</a>
            </li>
        ))
    }


    </ul>
)
}

export default Item
