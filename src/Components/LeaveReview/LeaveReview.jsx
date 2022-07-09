import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { Title, MyRating, RatingTitle, MyMainButton, MyForm } from './Style'

const LeaveReview = ({ratingOff}) => {

    const [value, setValue] = useState(0);

    return (
        <>
            <Title>LEAVE YOUR REVIW</Title>
           {Boolean(ratingOff) || <><RatingTitle>Your rating</RatingTitle>
            <MyRating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            /></>}
            <MyForm action="">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <input type="text" placeholder="Your name here..." name="name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input type="text" placeholder="Subject..." name="name" />
                    </Grid>
                </Grid>
                <textarea name="message" cols="30" rows="10" placeholder='Your review here...' />
                <MyMainButton altName="submit review">submit review</MyMainButton>
            </MyForm>
        </>
    )
}

export default LeaveReview