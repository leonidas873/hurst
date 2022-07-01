import React, { useState } from 'react'
import { Title, MyRating, RatingContainer } from './Style'

const LeaveReview = () => {

    const [value, setValue] = useState(0);
    const RatingArray = [1, 2, 3, 4, 5]

    return (
        <>
            <Title>LEAVE YOUR REVIW</Title>
            <strong>Your rating</strong>
            <RatingContainer>
                {
                    RatingArray.forEach((index, element) => {
                        <MyRating
                            key={index}
                            name="simple-controlled"
                            max={parseInt(element)}
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    })
                }
            </RatingContainer>
        </>
    )
}

export default LeaveReview