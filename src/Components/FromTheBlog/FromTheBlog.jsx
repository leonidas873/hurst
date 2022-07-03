import React from 'react'
import { Container, Grid } from '@mui/material'
import { SectionTitle, SingleBlog } from '../Common'

const FromTheBlog = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', overflow: 'hidden' }}>
            <SectionTitle text="From The Blog" variant="h2" />
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
            </Grid>
        </Container>
    )
}

export default FromTheBlog