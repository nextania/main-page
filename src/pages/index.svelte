<script>
    import { goto, metatags } from "@roxi/routify";
    import { onMount } from "svelte";
    
    import Dialog from "../components/Dialog.svelte";
    import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte"
    import Question from "../components/Question.svelte"
    
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
                <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">Open-source solutions for the future</h2>
                <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                    We make open source solutions for the people. We are going to ALWAYS be open source. We believe that all types of software should have a open source alternative. We have many open source projects such as a Single Sign On (SSO) system, a password manager, and so much more to come down the road!
                </p>
                <div class="flex justify-center flex-wrap gap-6">
                    <button class="btn btn-purple hover:bg-bookmark-white hover:text-black select-none cursor-default" on:click={() => {
                        
                    }}>Check out</button>
                    <button class="btn btn-white hover:bg-bookmark-purple hover:text-white select-none cursor-default" on:click={() => {

                    }}>See more</button>
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
            <h1 class="text-3xl text-center text-bookmark-blue">About Us</h1>
            <p class="text-center text-bookmark-grey mt-4">
                We are a organization that aims to make free and open source software for the public. You can help us, by contributing to projects, and creating a better future for open source software.
            </p>
        </div>
        <div class="relative mt-20 lg:mt-24">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/nextpass_stock_2.png" alt="" />
                    </div>
                    <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-3xl text-bookmark-blue">NextPass</h1>
                    <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        A free and open source password manager. This password manager can sync to the cloud, with encrypted backups. No worries all the data is encrypted client side, and the server recieves the encrypted data. This is a secure, and reliable password manager.
                    </p>
                    <div class="flex justify-center flex-wrap gap-6">
                        <button class="btn btn-purple hover:bg-bookmark-white hover:text-black select-none cursor-default" on:click={() => showDialog("Attention", "You are about to leave this site. Are you sure?", [{ id: "yes", text: "Yes", primary: true }, { id: "no", text: "No" }], b => {
                            if (b === "yes") {
                                location.href = "https://github.com/nextflow-cloud/nextpass";
                            } else {
                                hideDialog();
                            }
                        })}>View on GitHub</button>
                        <button class="btn btn-white hover:bg-bookmark-purple hover:text-white select-none cursor-default" on:click={() => showDialog("Attention", "You are about to leave this site. Are you sure?", [{ id: "yes", text: "Yes", primary: true }, { id: "no", text: "No" }], b => {
                            if (b === "yes") {
                                location.href = "https://git.nextflow.cloud/Nextflow-Cloud/nextpass";
                            } else {
                                hideDialog();
                            }
                        })}>View on Gitea</button>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
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
    <!-- Contact Us -->
    <section class="bg-bookmark-purple text-white py-20">
        <div class="container">
            <div class="sm:w-3/4 lg:w-1/2 mx-auto">
                <p class="font-light text-center mb-8">Be the first to contact us!</p>
                <h1 class="text-3xl text-center">Get the latest news</h1>
                <form action='/contact'>
                    <div class="flex flex-col sm:flex-row gap-6 mt-8"> 
                        <input type="email" id="email" name="email" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" required />
                        <button type="submit" id="contact" class="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black">Contact Us</button>
                    </div>
                </form>
                <p class="font-light text-center mb-10">We will not sell, nor store personally trackable information regarding your email.</p>
            </div>
        </div>
    </section>
    <Footer />
</div>

{#if dialog}
    <Dialog title={title} buttons={buttons} content={content} onClose={onClose} />
{/if}
