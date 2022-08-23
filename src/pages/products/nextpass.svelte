<script>
    import { goto, metatags } from "@roxi/routify";
    import { onMount } from "svelte";
    
    import Dialog from "../../components/Dialog.svelte";
    import Navigation from "../../components/Navigation.svelte";
    import Footer from "../../components/Footer.svelte"
    import Question from "../../components/Question.svelte"
    
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
            // alert(token);
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
    let dialog;
    let title;
    let content;
    let buttons;
    let onClose;
    const showDialog = (t, c, b, onC) => {
        title = t;
        content = c;
        buttons = b;
        onClose = onC;
        dialog = true;
    };
    const hideDialog = () => {
        dialog = false;
    }
    onMount(() => getSignedIn());
</script>
<div class="all"> 
    <Navigation signedIn={signedIn} requestCompleted={requestCompleted} />
    <section class="relative px-10">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div class="flex flex-1 flex-col items-center lg:items-start">
                <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">NextPass</h2>
                <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                    A free, open source, and reliable password manager to meet your demands. It is dead simple to use.
                </p>
                <div class="flex justify-center flex-wrap gap-6">
                    <button class="btn btn-purple hover:bg-bookmark-white hover:text-black select-none" on:click={() => showDialog("Attention", "You are about to leave this site. Are you sure?", [{ id: "yes", text: "Yes", primary: true }, { id: "no", text: "No" }], b => {
                        if (b === "yes") {
                            location.href = "https://github.com/nextflow-cloud/nextpass";
                        } else {
                            hideDialog();
                        }
                    })}>View on GitHub</button>
                    <button class="btn btn-white hover:bg-bookmark-purple hover:text-white select-none" on:click={() => showDialog("Attention", "You are about to leave this site. Are you sure?", [{ id: "yes", text: "Yes", primary: true }, { id: "no", text: "No" }], b => {
                        if (b === "yes") {
                            location.href = "https://git.nextflow.cloud/Nextflow-Cloud/nextpass";
                        } else {
                            hideDialog();
                        }
                    })}>View on Gitea</button>
                </div>
                
            </div>
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/bg.png" alt="">
            </div>
        </div>
        <div class="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg: -bottom-28 lg:-right-36"></div>
    </section>
    <!-- About us/products -->
    <section class="bg-boomark-white py-20 mt-20 lg:mt-60 px-10">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 class="text-3xl text-center text-bookmark-blue">Features</h1>
            <p class="text-center text-bookmark-grey mt-4">
                These are the key features to NextPass.
            </p>
        </div>
        <div class="relative mt-20 lg:mt-24">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <svg version="1.1" class="w-2/6 h-2/6 sm:w-3/4 sm:h-3/4 md:w-4/6 md:h-4/6" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                    <g>
                        <path d="M567.297,106.951C416.932,18.793,306.283,0,306.283,0S306.166,0.018,306,0.049C305.834,0.018,305.717,0,305.717,0
                            S195.062,18.793,44.703,106.951c0,0-19.938,445.063,261.014,505.049c0.098-0.018,0.185-0.049,0.283-0.068
                            c0.098,0.018,0.185,0.049,0.283,0.068C587.229,552.014,567.297,106.951,567.297,106.951z M306.302,37.79
                            c24.615,5.323,111.049,27.451,223.778,90.686c-0.492,82.194-14.553,393.213-223.778,445.482V37.79L306.302,37.79z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    <!-- <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/nextpass_stock_2.png" alt="" /> -->
                    <!-- <i class="fa fa-shield w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"></i> -->
                    </div>
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-3xl text-bookmark-blue">Security</h1>
                    <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        We left no compromise on security for NextPass. NextPass features right of the box AES-256 bit, and Scrypt. AES-256 bit encryption is used encrypt your passwords, with a specially derived key from your master passphrase. Scrypt is used to derive the secret key for your vault from your master passphrase securely.
                    </p>
                </div>
            </div>
            <!-- <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div> -->
            
        </div>
        <div class="relative mt-20 lg:mt-24">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <div class="flex flex-1 flex-col items-center lg:items-start">
                <h1 class="text-3xl text-bookmark-blue">Security</h1>
                <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    We left no compromise on security for NextPass. NextPass features right of the box AES-256 bit, and Scrypt. AES-256 bit encryption is used encrypt your passwords, with a specially derived key from your master passphrase. Scrypt is used to derive the secret key for your vault from your master passphrase securely.
                </p>
                </div>
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <svg version="1.1" class="w-2/6 h-2/6 sm:w-3/4 sm:h-3/4 md:w-4/6 md:h-4/6" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                    <g>
                        <path d="M567.297,106.951C416.932,18.793,306.283,0,306.283,0S306.166,0.018,306,0.049C305.834,0.018,305.717,0,305.717,0
                            S195.062,18.793,44.703,106.951c0,0-19.938,445.063,261.014,505.049c0.098-0.018,0.185-0.049,0.283-0.068
                            c0.098,0.018,0.185,0.049,0.283,0.068C587.229,552.014,567.297,106.951,567.297,106.951z M306.302,37.79
                            c24.615,5.323,111.049,27.451,223.778,90.686c-0.492,82.194-14.553,393.213-223.778,445.482V37.79L306.302,37.79z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    <!-- <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/nextpass_stock_2.png" alt="" /> -->
                    <!-- <i class="fa fa-shield w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"></i> -->
                </div>
            </div>
            <!-- <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div> -->

        </div>
    </section>
    <!-- FAQ -->
    <section class="bg-bookmark-white py-20">
        <div class="container">
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 class="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                <p class="text-center text-bookmark-grey mt-4">
                    Here are some of the FAQs by our community. If you have any inquiry please address your inquiry at inquiry@nextflow.cloud, if you have any questions.
                </p>
            </div>
            <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-4 mx-auto">
                <Question question='What is a password manager?' answer='A password manager is a piece of software that securely stores your passwords using encryption and a master passphrase. A good example of a password manager is NextPass a secure, and reliable password manager.' />
                <button type="button" class="flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black">
                    More FAQs
                </button>
            </div>
        </div>
    </section>
</div>
{#if dialog}
    <Dialog title={title} buttons={buttons} content={content} onClose={onClose} />
{/if}
<Footer />