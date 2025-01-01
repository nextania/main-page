import { styled } from "solid-styled-components";
import Button from "../components/primitive/Button";

const ServicesBase = styled.div`
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 80vh;
    margin-top: 2rem;
`;

const ServicesContainer = styled.div`
    width: 60%;
`;

const Service = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ServiceDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;


const LearnMore = styled(Button)`
    height: 4rem;
`

const Services = () => {
    return (
        <ServicesBase>
            <h1>Services</h1>
            <ServicesContainer>
                <Service>
                    <ServiceDescription>
                        <h2>Harmony</h2>
                        <p>Harmony is a communication app for individuals and organizations alike.</p>
                    </ServiceDescription>
                    <LearnMore>Learn more</LearnMore>
                </Service>
            </ServicesContainer>
        </ServicesBase>
    );
}

export default Services;