import { styled } from "solid-styled-components";
import Box from "../components/primitive/Box";
import { useStore } from "../state";
import { Show } from "solid-js";

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
    /* TODO: This is commented for coming soon text only */
    /* margin-top: 150px; */
    z-index: 10;
`;

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    width: 100%;
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
`;

const Section = styled.div`
    display: flex;
    width: 80%;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const SectionLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * + * {
        margin-top: 20px;
    }
`;
const SectionRight = styled.div`
    width: 50%;
`;

const Gradient1 = styled.h1`
    background: linear-gradient(90deg, #f8895a, #ce00e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Gradient2 = styled.h1`
    background: linear-gradient(90deg, #6bfb7b, #26beff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Gradient3 = styled.h1`
    background: linear-gradient(90deg, #3e81fd, #8f07ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const SectionText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
`;

const HeroButton = styled.button`
    border-radius: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.25rem;
    text-align: center;
    cursor: default;
    user-select: none;
    &:hover {
        filter: brightness(0.85);
    }
    &:disabled {
        background-color: #cbd5e0;
    }

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
    border: none;
`;

const HeroButtonPrimary = styled(HeroButton)`
    background: linear-gradient(90deg, #00dc9a, #9500f0);
    color: white;
`;

const HeroButtonSecondary = styled(HeroButton)`
    background: rgba(0, 220, 154, 0.1);
    border: 1px solid #00dc9a;
    color: white;
`;

// TODO: BEGIN COMING SOON TEXT

const ComingSoonContainer = styled.div`
    height: 150px;
    z-index: 10;
    display: flex;
    justify-content: center;
`;

const ComingSoon = styled.div`
    padding: 10px;
    width: 60%;
`;

const ComingSoonBox = styled(Box)`
    display: flex;
    align-items: center;
    & > * + * {
        margin-left: 1rem;
    }
`;

// TODO: END COMING SOON TEXT

const SmallBigText = styled(BigText)`
    margin-top: 50px;
    font-size: 2.75rem !important;
    width: 400px;
`;

const SmallDescription = styled(Description)`
    font-size: 1rem;
    margin-top: 1rem;
`;

const MobileSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    font-size: 1.5rem;
`;

const MobileSectionText = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
`;


const Home = () => {
    const store = useStore();
    const register = () => {
        location.href = "https://account.nextania.com/register?continue=" + encodeURIComponent("https://nextania.com/authenticate");
    };
    return (
        <HomeBase>
            <Show when={!store.get("mobile")} fallback={ 
                <>
                    <SmallBigText>Open source solutions for the future</SmallBigText>
                    <SmallDescription>
                    User-first cloud. <br />
                    Latest privacy and security standards. <br/>
                    No ads. No tracking. Just a better internet. <br />
                    Shouldn't that be the standard?
                    </SmallDescription>
                </>
            }>
                <Lighting />
                <ComingSoonContainer>
                    <ComingSoon>
                        <ComingSoonBox type="warning">
                            <h2>Notice</h2>
                            {/* <p>Nextflow is currently in development. Some features may not be available yet.</p> */}
                            <p>Nextania is currently under construction. Many features may not work yet. If you create an account, we will notify you when they are ready.</p>
                        </ComingSoonBox>
                    </ComingSoon>
                </ComingSoonContainer>
                <BigText>Open source solutions for the future</BigText>
                <Description>
                    User-first cloud. Latest privacy and security standards. <br/>
                    No ads. No tracking. Just a better internet. <br />
                    Shouldn't that be the standard?
                </Description>
            </Show>
            <ButtonContainer>
                <HeroButtonPrimary onClick={register}>Get started</HeroButtonPrimary>
                <HeroButtonSecondary>Learn more</HeroButtonSecondary>
            </ButtonContainer>

            <HeroImage>
                Some image goes here but I don't have one yet
            </HeroImage>

            <Show when={!store.get("mobile")} fallback={
                <>
                    <MobileSection>
                        <Gradient1>
                            Independent.
                        </Gradient1>
                        <MobileSectionText>
                            Nextania is run by volunteers and funded by donations. It is free from corporate interests, and is built to serve the people. 
                            The full source code of the Nextania stack is available for anyone to audit, and we are committed to transparency.
                            Nextania software is licensed under the GNU Affero General Public License, ensuring that the software will always be free and open source.
                        </MobileSectionText>
                    </MobileSection>
                    <MobileSection>
                        <Gradient2>
                            Secure.
                        </Gradient2>
                        <MobileSectionText>
                            Nextania uses the latest encryption standards to protect your data. Your private data, such as direct messages and files, are end-to-end encrypted using the latest
                            quantum-resistant encryption standards. This means that nobody, including Nextania, has access to this information.
                            Nextania also uses the latest security standards to protect your account from unauthorized access.
                        </MobileSectionText>
                    </MobileSection>
                    <MobileSection>
                            <Gradient3>
                                Modern.
                            </Gradient3>
                            <MobileSectionText>
                                Nextania services are built with the latest web technologies, ensuring that you have the best experience possible. We are constantly improving our services to ensure that you have the best experience possible.
                            </MobileSectionText>
                    </MobileSection>
                </>
                
            }>
                <Section>
                    <SectionLeft>
                        <Gradient1>
                            Independent.
                        </Gradient1>
                        <SectionText>
                            Nextania is run by volunteers and funded by donations. It is free from corporate interests, and is built to serve the people. 
                            The full source code of the Nextania stack is available for anyone to audit, and we are committed to transparency.
                            Nextania software is licensed under the GNU Affero General Public License, ensuring that the software will always be free and open source.
                        </SectionText>
                    </SectionLeft>
                    <SectionRight>

                    </SectionRight>
                </Section>

                <Section>
                    <SectionLeft>
                        <Gradient2>
                            Secure.
                        </Gradient2>
                        <SectionText>
                            Nextania uses the latest encryption standards to protect your data. Your private data, such as direct messages and files, are end-to-end encrypted using the latest
                            quantum-resistant encryption standards. This means that nobody, including Nextania, has access to this information.
                            Nextania also uses the latest security standards to protect your account from unauthorized access.
                        </SectionText>
                    </SectionLeft>
                    <SectionRight>

                    </SectionRight>
                </Section>

                <Section>
                    <SectionLeft>
                        <Gradient3>
                            Modern.
                        </Gradient3>
                        <SectionText>
                            Nextania services are built with the latest web technologies, ensuring that you have the best experience possible. We are constantly improving our services to ensure that you have the best experience possible.
                            
                        </SectionText>
                    </SectionLeft>
                    <SectionRight>

                    </SectionRight>
                </Section>
            </Show>
        </HomeBase>
    );
}

export default Home;
