import React from 'react'
import Person from './Person'
import { useAxios } from '../hooks.js/useAxios'

const List = () => {
    const [data] = useAxios('http://localhost:5000/api/players')
    return (
        <div>
            {data.map(item => {
                return <Person key={item.id} data={item} />
            })}
        </div>
    )
}

export default List