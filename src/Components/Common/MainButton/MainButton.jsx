import React from 'react'
import { MyButton } from './Style'

const MainButton = ({ name, altName, onClick }) => {
    return (
        <MyButton altName={altName} type='submit' onClick={onClick}>{name}</MyButton>
    )
}

export default MainButton