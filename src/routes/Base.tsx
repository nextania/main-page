import { useNavigate, useParams } from "@solidjs/router";
import Home from "./Home";
import { Match, onMount, Show, Switch } from "solid-js";
import { styled } from "solid-styled-components";
import Logo from "../components/Logo";
import Button from "../components/primitive/Button";
import About from "./About";
import Resources from "./Resources";
import Services from "./Services";
import { saveUser, useStore } from "../state";

const Header = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    backdrop-filter: blur(20px);
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LogoContainer = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    align-items: center;
`;

const AccountContainer = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    justify-content: flex-end;
`;


const HeaderRouteList = styled.div`
    display: flex;
    & > * + * {
        margin-left: 20px;
    }
`;

const HeaderRoute = styled.div`
    cursor: default;
    user-select: none;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    ${(props: { active?: boolean }) => props.active ? `
        &::after {
            content: "";
            display: block;
            width: 75%;
            margin-left: 12.5%;
            height: 3px;
            background-color: var(--secondary);
            border-radius: 5px;
            margin-top: 5px;
            transition: width 0.3s, margin-left 0.3s;
        }
        &:hover::after {
            width: 100%;
            margin-left: 0;
        }
    ` : ""}
`;

const Content = styled.div`
    height: auto;
`;

const Footer = styled.div`
    background-color: var(--secondary);
`

const FooterBody = styled.div`
    padding: 30px;
`;

const FooterFooter = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

const FooterControls = styled.div`
    display: flex;
    & > * + * {
        margin-left: 10px;
    }
`;

const FooterControl = styled.div`
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    & > * + * {
        margin-left: 8px;
    }
    cursor: default;
    user-select: none;
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    background-color: #00db00;
    border-radius: 50%;
`;

const FooterHeader = styled.div`
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
    & > * + * {
        margin-left: 40px;
    }
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 24px;
`;

const Base = () => {
    const params = useParams();
    const n = useNavigate();
    const store = useStore();

    onMount(async () => {
        const token = localStorage.getItem("token");
        if (token) {
            const result = (await saveUser(token).catch(() => {})) ?? false;
            if (!result) localStorage.removeItem("token");
        }
    });

    const login = () => {
        // TODO:
        location.href = "https://sso.nextflow.cloud/login?continue=" + encodeURIComponent("https://nextflow.cloud/authenticate");
    };

    const account = () => {
        location.href = "https://sso.nextflow.cloud/manage";
    }

    return (
        <>
            <Header>
                <LogoContainer onClick={() => n("/")}><Logo /></LogoContainer>
                
                <HeaderRouteList>
                    <HeaderRoute active={!params.page} onClick={() => n("/")}>Home</HeaderRoute>
                    <HeaderRoute active={params.page === "about"} onClick={() => n("/about")}>About us</HeaderRoute>
                    <HeaderRoute active={params.page === "services"} onClick={() => n("/services")}>Services</HeaderRoute>
                    <HeaderRoute active={params.page === "resources"} onClick={() => n("/resources")}>Resources</HeaderRoute>
                </HeaderRouteList>
                <AccountContainer>
                    <Show when={store.get("user") !== undefined} fallback={
                        <Button onClick={login}>Log in</Button>
                    }>
                        <Button onClick={account}>Account</Button>
                    </Show>
                </AccountContainer>
            </Header>
            <Content>
                <Switch fallback={
                    <div>
                        <h1>404</h1>
                        <button onClick={() => n("/")}>Go Home</button>
                    </div>
                }>
                    <Match when={!params.page}>
                        <Home />
                    </Match>
                    <Match when={params.page === "about"}>
                        <About />
                    </Match>
                    <Match when={params.page === "services"}>
                        <Services />
                    </Match>
                    <Match when={params.page === "resources"}>
                        <Resources />
                    </Match>
                </Switch>
            </Content>
            <Footer>
                <FooterHeader>
                    <h2>Try Nextflow for free today</h2>
                    <Button>Get started</Button>
                </FooterHeader>
                <FooterBody>
                    <h1>Nextflow</h1>
                    <p>Canada</p>
                    <p>Monero:  <u><span title="Due to technical reasons, we are unable to accept any other payment method at this time.">4ALqMFtBLV5KHoH6JjPZeuX9WnFKp5kZ49tythEMhFqAbJciqX9Qy5y796kREaU5nLfM1py6Gjt5C9YT1paBNDk8VNzhzRr</span>
                    </u></p>
                </FooterBody>
                <FooterFooter>
                    <p>© 2024 Nextflow Cloud Technologies and contributors.</p>
                    <FooterControls>
                        <FooterControl><Circle /> <span>All systems operational</span></FooterControl>
                        <FooterControl>English</FooterControl>
                    </FooterControls>
                </FooterFooter>
            </Footer>
        </>
    )
};
export default Base;
