import React from 'react'
import { Container, ImageContainer, Content, Header, MyButton } from './Style'
import { BsFillReplyFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const SingleReview = ({ src, name, time, text }) => {
    return (
        <Container>
            <ImageContainer>
                <img src={src} alt={name} />
            </ImageContainer>
            <Content>
                <Header>
                    <div>
                        <h5>{name}</h5>
                        <p>{time}</p>
                    </div>
                    <div>
                        <MyButton>
                            <BsFillReplyFill />
                        </MyButton>
                        <MyButton>
                            <IoMdClose />
                        </MyButton>
                    </div>
                </Header>
                <p>{text}</p>
            </Content>
        </Container>
    )
}

export default SingleReview