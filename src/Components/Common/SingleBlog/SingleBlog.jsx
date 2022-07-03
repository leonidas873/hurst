import React from 'react'
import { MyPaper, MySocialLink, InteractionContainer, BlogHeader, LinkContainer, ProductTitle, Number, ReadMore, HeaderDetails } from './Style'
import { AiFillHeart } from 'react-icons/ai'
import { MdModeComment } from 'react-icons/md'
import { BsFillShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <MyPaper elevation="0">
            <LinkContainer>
                <Link to="/product">
                    <img src="https://template.hasthemes.com/hurst-v1/hurst/img/blog/3.jpg" width="100%" alt="product" />
                </Link>
                <InteractionContainer id="interactions">
                    <MySocialLink to="/">
                        <AiFillHeart />
                        <span>89 Like</span>
                    </MySocialLink>
                    <MySocialLink to="/">
                        <MdModeComment />
                        <span>59 Comments</span>
                    </MySocialLink>
                    <MySocialLink to="/">
                        <BsFillShareFill />
                        <span>29 Share</span>
                    </MySocialLink>
                </InteractionContainer>
            </LinkContainer>
            <BlogHeader>
                <Number>
                    <span>30</span>
                </Number>
                <HeaderDetails>
                    <p>June, 2021</p>
                    <ProductTitle variant='h4'>Farniture drawing 2021</ProductTitle>
                </HeaderDetails>
            </BlogHeader>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolor dolorem, deleniti eum sapiente quae quis. Quia sapiente rerum, excepturi beatae ea temporibus obcaecati animi nam incidunt, voluptate earum rem.</p>
            <ReadMore to="/">Read more...</ReadMore>
        </MyPaper>
    )
}

export default SingleBlog