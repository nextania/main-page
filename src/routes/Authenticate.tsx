import { useNavigate, useSearchParams } from "@solidjs/router";
import { onMount } from "solid-js/types/server/reactive.js";

const Authenticate = () => {
    const [params] = useSearchParams();
    const n = useNavigate();
    onMount(() => {
        if (params.token) {
            localStorage.setItem("token", params.token);
            const continuePath = params.continue || "/";
            n(continuePath);
        }
    });
    return (
        <div>
            <h1>Authenticate</h1>
        </div>
    );
};
export default Authenticate;