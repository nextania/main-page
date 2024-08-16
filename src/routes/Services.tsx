import { styled } from "solid-styled-components";

const ServicesBase = styled.div`
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 80vh;
    margin-top: 2rem;
`;

const Services = () => {
    return (
        <ServicesBase>
            <h1>Services</h1>
            <p>
                Hmm, I wonder what this is all about. Coming soon!
            </p>
        </ServicesBase>
    );
}

export default Services;