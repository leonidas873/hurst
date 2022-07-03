import styled from "@emotion/styled";
import { Article, Team } from "../../Components/AboutUs";
import { MainLayout } from "../../Components";

const AboutUs = () => {
    return <MainLayout>
    <Container>
    <Article/>
     <Team/>
    </Container>
    </MainLayout>
}

export default AboutUs;

const Container = styled.div`
    width:100%;
    max-width:1200px;
    box-sizing:border-box;
    padding:40px 40px 80px 40px;
    margin:auto;
`