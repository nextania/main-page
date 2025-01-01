import { ParentProps } from "solid-js";
import { styled } from "solid-styled-components";

const BaseBox = styled.div`
    border-radius: 0.375rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
`;

const SuccessBox = styled(BaseBox)`
    background-color: #86efac;
    border-color: #22c55e 2px solid;
`;

const InformationBox = styled(BaseBox)`
    background-color: #0ea5e9;
    border: #7dd3fc 2px solid;
`;

const ErrorBox = styled(BaseBox)`
    background-color: #ff7b7b;
    border: #ff0000 2px solid;
`;

const WarningBox = styled(BaseBox)`
    background-color: #808000;
    border: #ffff00 2px solid;
`;

const Box = (props: ParentProps<{ class?: string, type: "success" | "error" | "warning" | "information" }>) => {
    if (props.type === "success") {
        return (
            <SuccessBox class={props.class}>
                {props.children}
            </SuccessBox>
        );
    } else
    if (props.type === "information") {
        return (
            <InformationBox class={props.class}>
                {props.children}
            </InformationBox>
        );
    } else
    if (props.type === "error") {
        return (
            <ErrorBox class={props.class}>
                {props.children}
            </ErrorBox>
        );
    } else
    if (props.type === "warning") {
        return (
            <WarningBox class={props.class}>
                {props.children}
            </WarningBox>
        );
    }
    return (
        <div>
            {props.children}
        </div>
    );
    
};

export default Box;
