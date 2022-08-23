<script>
    import { goto, metatags } from "@roxi/routify";
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
    const downloads = [{
        name: "NextPass",
        url: "https://github.com/nextflow-cloud/releases/releases/download/v1.0.0/nextpass-1.0.0.zip",
        description: "NextPass is a command-line tool for managing Nextflow Cloud accounts and projects.",
        image: "/nextflow.png" // for now lets put image as logo
    }, {
        name: "EasyLink",
        url: "https://github.com/nextflow-cloud/releases/releases/download/v1.0.0/easylink-1.0.0.zip",
        description: "Easylink is both a web app, and desktop app for real time communication between friends, families, or businesses.",
        image: "/nextflow.png" // for now lets put image as logo
    }];
    onMount(() => getSignedIn());
</script>

<div class="all" style="min-height: calc(100vh - 92px);">
    <Navigation signedIn={signedIn} requestCompleted={requestCompleted} />
    <section class="py-20">
        <div class="sm:mx-auto md:mx-40 p-2 flex flex-col">
            <h1 class="text-6xl text-center text-bookmark-blue">Services</h1>
            <p class="text-center text-bookmark-grey mt-4">Find your favourite services from Nextflow here. ;)</p>
            <!-- I had another idea of making it into cards so that when easylink and etc get released its easier to scale the downloads page oooh do you like that idea?-->
            <div class="flex flex-wrap place-content-between sm:justify-start sm:items-start md: justify-content-center md: items-center gap-8 mt-10"> <!--Let's see how this looks-->
                {#each downloads as download} <!-- I like it horizontal keep it like that @computergeek12 uhhh its not center-->
                    <div class="flex flex-col justify-center items-center border rounded-md p-5 shadow-md" style="flex: 1 0 calc(16.66% - 20px);">
                        <img src="{download.image}" alt="{download.name} (image)" class="w-32 h-32 mb-4">
                        <h2 class="text-center text-bookmark-blue">{download.name}</h2>
                        <p class="text-center text-bookmark-grey">{download.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>
<Footer />
