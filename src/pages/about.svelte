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
    <section class="py-20 mt-20 ">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 flex flex-col">
            <h1 class="text-6xl text-center text-bookmark-blue">About</h1>
            <p class="text-center text-bookmark-grey mt-4">We are the open source future. Empowering consumers with control of their privacy. Fuck you, Google could not have been said better. We want an open future not a propiatery one.</p>
            <p class="text-center text-bookmark-grey mt-4">Want to help us with our mission? Join us in the revolution <a class="text-purple-300" href="https://github.com/nextflow-cloud">here</a> to get started. Be part of the community and contribute code for the better good of open source software!</p>
        </div>
    </section>
</div>
<Footer />