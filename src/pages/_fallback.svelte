<script>
    import { url, metatags } from '@roxi/routify'
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

<Navigation signedIn={signedIn} requestCompleted={requestCompleted} />
<div class="all">
  <div class="e404 text-center justify-center">
    <div class="py-20"></div>
    <div class="text-8xl">404</div>
    <div class="text-3xl mb-20">Page not found. 
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('../')}>Go back</a>
    </div>
    <div class="py-20"></div>
  </div>
</div>
<Footer />