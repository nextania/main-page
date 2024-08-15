import { styled } from "solid-styled-components";
import Button from "../components/primitive/Button";

const HomeBase = styled.div`
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const BigText = styled.h1`
    font-size: 5.5rem;
    font-weight: 700;
    width: 800px;
    text-align: center;
    background: linear-gradient( #00dc9a, #9500f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    margin-top: 150px;
    z-index: 10;
`;

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    width: 800px;
    text-align: center;
    line-height: 1.5;
    margin-top: 2rem;
    z-index: 10;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    z-index: 10;
    margin-top: 2rem;
    & > * + * {
        margin-left: 20px;
    }
`;

const Lighting = styled.div`
    background: radial-gradient(
        ellipse 600px 200px at 50% 250px,
        rgba(0,220,154,0.25) 0%, 
        rgba(0,147,220,0) 100%
    ), radial-gradient(
        ellipse 600px 200px at 50% 450px,
        rgba(151,90,240,0.3) 0%,
        rgba(0,40,240,0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    pointer-events: none;
`;

const HeroImage = styled.div`
    border-radius: 10px;
    width: 80%;
    height: 800px;
    border: 1px white solid;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    padding: 10px;
`


const Home = () => {
    return (
        <HomeBase>
            <Lighting />
            <BigText>Open source solutions for the future</BigText>
            <Description>
                User-first cloud. Latest privacy and security standards. <br/>
                No ads. No tracking. Just a better internet. <br />
                Shouldn't that be the standard?
            </Description>
            <ButtonContainer>
                <Button>Get started</Button>
                <Button>Learn more</Button>
            </ButtonContainer>

            <HeroImage>
                Some image goes here but I don't have one yet
            </HeroImage>
        </HomeBase>
    );
}

export default Home;