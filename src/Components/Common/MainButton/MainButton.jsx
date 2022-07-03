import React from 'react'
import { MyButton } from './Style'

const MainButton = ({ name, altName }) => {
    return (
        <MyButton altName={altName} type='submit'>{name}</MyButton>
    )
}

export default MainButton