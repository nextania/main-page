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
    <section class="py-20 hidden md:block">
        <div class="mx-40 p-2 flex flex-col">
            <h1 class="text-6xl text-center text-bookmark-blue">Downloads</h1>
            <p class="text-center text-bookmark-grey mt-4">Download your favourite software from Nextflow here. ;)</p>
            <!-- I had another idea of making it into cards so that when easylink and etc get released its easier to scale the downloads page oooh do you like that idea?-->
            <div class="flex flex-wrap place-content-between justify-content-center items-center gap-8 mt-10"> <!--Let's see how this looks-->
                {#each downloads as download} <!-- I like it horizontal keep it like that @computergeek12 uhhh its not center-->
                    <div class="flex flex-col justify-center items-center border rounded-md p-5 shadow-md" style="flex: 1 0 calc(16.66% - 20px);">
                        <img src="{download.image}" alt="{download.name} (image)" class="w-32 h-32 mb-4">
                        <h2 class="text-center text-bookmark-blue">{download.name}</h2>
                        <p class="text-center text-bookmark-grey">{download.description}</p>
                        <a href="{download.url}" class="btn btn-primary bg-purple-400 text-white hover:bg-bookmark-white hover:text-black my-2">Download</a>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    <section class="py-20 mt-20">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 flex flex-col">
            <h1 class="text-6xl sm:text-left md:text-center lg:text-center text-bookmark-blue">Want to download our projects for mobile?</h1>
            <p class="text-center text-bookmark-grey mt-4">We unfortunately do not have mobile apps yet. However, it is in progress. You can help make apps for mobile by contributing on our github, or gitea.</p>
        </div>
    </section>
</div>
<Footer />
