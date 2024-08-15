import { useNavigate, useParams } from "@solidjs/router";
import Home from "./Home";
import { Match, Switch } from "solid-js";
import { styled } from "solid-styled-components";
import Logo from "../components/Logo";
import Button from "../components/primitive/Button";

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

const Base = () => {
    const params = useParams();
    const n = useNavigate();

    const login = () => {
        location.href = "https://sso.nextflow.cloud/login?continue=" + encodeURIComponent(location.href);
    };

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
                    <Button onClick={login}>Log in</Button>
                </AccountContainer>
            </Header>
            <div>
                <Switch fallback={
                    <div>
                        <h1>404</h1>
                        <button onClick={() => n("/")}>Go Home</button>
                    </div>
                }>
                    <Match when={!params.page}>
                        <Home />
                    </Match>
                </Switch>
            </div>
            <div>footer</div>
        </>
    )
};
export default Base;
