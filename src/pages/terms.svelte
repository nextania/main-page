<script>
    import { metatags } from "@roxi/routify";
    import { onMount } from "svelte";

    import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte"
    
    metatags.title = "Nextflow Cloud Technologies";
    metatags.description = "Embrace the open-source future";
    let signedIn;
    let requestCompleted;
    const getCookie = name => {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
        else return null;
    }
    const getSignedIn = async () => {
        const token = localStorage.getItem("token") || getCookie("token");
        if (token) {
            const request = await Promise.race([fetch("https://secure.nextflow.cloud/api/validate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token })
            }), new Promise(resolve => setTimeout(resolve, 5000))]);
            if (request && request.ok) {
                signedIn = true;
            } 
        } 
        requestCompleted = true;
    }
    onMount(() => getSignedIn());
</script>

<div class="all" style="min-height: calc(100vh - 92px);">
    <Navigation signedIn={signedIn} requestCompleted={requestCompleted} />
    <div class="py-10">
        <h1 class="text-6xl text-left text-bookmark-blue md:mx-72 py-2"><strong>Terms of Service</strong></h1>
        <h1 class="text-4xl text-left text-gray-500 md:mx-72">Updated: February 24, 2022</h1>
    </div>
    <div class="w-full border-t border-gray-500"></div>
    <div class="py-4 mt-4">
        <div class="sm:w-3/4 md:mx-72 px-2 flex flex-col">
            <p class="text-left text-bookmark-grey mt-4 whitespace-pre-wrap mb-8">Our terms of service is coming soon!
            </p>
        </div>
    </div>
</div>
<Footer />