<script>
    import { metatags } from "@roxi/routify";
    import { onMount } from "svelte";

    import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte"
    import Success from "../components/Success.svelte"
    
    metatags.title = "Nextflow Cloud Technologies";
    metatags.description = "Embrace the open-source future";
    let signedIn;
    let requestCompleted;
    let errored = false;
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

    const whenChanges = () => {
        let textArea = document.getElementById('message');
        let remaining = document.getElementById('remaining');

        if (textArea.value.length === textArea.maxLength) {
            remaining.textContent = 'Maximum characters reached';
        } else if (textArea.value.length === 0) {
            remaining.textContent = 'max. 500 characters';
        } else if (textArea.value.length === textArea.maxLength - 1) {
            remaining.textContent = 'remaining. 1 character';
        } else {
            remaining.textContent = 'remaining. ' + (textArea.maxLength - textArea.value.length.toString()) + ' characters';
        }
    }

    onMount(() => {
        let firstName = document.getElementById('first_name');
        let lastName = document.getElementById('last_name');
        let email = document.getElementById('email');
        let textArea = document.getElementById('message');
        let urlParams = new URLSearchParams(window.location.search);
        const error = document.getElementById('error');
        let success = document.getElementById("succeeded");
        let succeedBox = document.getElementById('hideit');

        firstName.value = urlParams.has('first_name') ? urlParams.get('first_name') : '';
        lastName.value = urlParams.has('last_name') ? urlParams.get('last_name') : '';
        textArea.textContent = urlParams.has('message') ? urlParams.get('message') : '';
        email.value = urlParams.has('email') ? urlParams.get('email') : '';

        let contact = document.getElementById('contact');

        contact.addEventListener('submit', async e => {
            e.preventDefault();
            // console.log('Check network tab for more info.')
            const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
            if (!email.value || !emailRegex.test(email.value)) {
                // alert('Please enter a valid email address.');
                error.value = 'Please enter a valid email address.';
                return;
            }
            var request = await Promise.race([fetch("https://nextflow.cloud/api/contact", {
                method: "POST",
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                    message: textArea.value
                })
            }), new Promise(r => setTimeout(r, 5000))]);
            const response = request && request.ok ? await request.json() : null;
            if (!response) {
                // alert('Something went wrong. Please try again later.');
                // error.style = `display: hidden;`;
                error.style = `display: block;`;
                error.textContent = 'Something went wrong. Please try again later.';
                errored = true;
            } else if (response.error) {
                // alert(response.error);
                error.style = `display: block;`;
                error.textContent = response.error;
                errored = true;
            } else if (response.success) {
                // alert('Thank you for contacting us. We will get back to you as soon as possible. Your Ticket ID is: ' + response.ticketId);
                error.style = `display: hidden;`;
                succeedBox.style = `display: block;`;
                success.textContent = 'Thank you for contacting us. We will get back to you as soon as possible. Your Ticket ID is: ' + response.ticketId + '. Please check your email for a confirmation.';
                errored = false;
                // window.location.href = '/';
            } else {
                // alert('Error: response malformed');
                error.style = `display: block;`;
                error.textContent = 'Error: response malformed';
                errored = true;
            }
        });
    });
</script>

<div class="all" style="min-height: calc(100vh - 92px);">
    <Navigation signedIn={signedIn} requestCompleted={requestCompleted} />
    <section class="py-20 mt-20 ">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 flex flex-col">
            <h1 class="text-6xl text-center text-bookmark-blue">Contact Us!</h1>
            <p class="text-left text-bookmark-grey mt-4">You can contact us either using the website's tool to do so, or by emailing a question to either <strong>inquiry@nextflow.cloud</strong> or <strong>support@nextflow.cloud</strong></p>
        </div>
        <div class="py-4 sm:w-3/4 lg:w-5/12 mx-auto px-2 flex flex-col">
            <form id="contact" action="/api/contact" method="post">
                <ul>
                    <li>
                        <div class="flex flex-row flex-grow">
                            <div class="flex flex-col flex-grow mr-4">
                                <label for="first_name" class="uppercase text-bookmark-grey"><strong>First Name</strong></label>
                                <input type="text" id="first_name" name="first_name" class="border-bookmark-grey border-2 focus:outline-none p-2 hover:border-bookmark-red transition duration-300" required>
                            </div>
                            <div class="flex flex-col flex-grow">
                                <label for="last_name" class="uppercase text-bookmark-grey"><strong>Last Name</strong></label>
                                <input type="text" id="last_name" name="last_name" class="border-bookmark-grey border-2 focus:outline-none p-2 hover:border-bookmark-red transition duration-300" required>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-col flex-grow mt-4">
                            <label for="email" class="uppercase text-bookmark-grey"><strong>Email</strong></label>
                            <input type="email" id="email" name="email" class="border-bookmark-grey border-2 focus:outline-none p-2 hover:border-bookmark-red transition duration-300" required>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-col flex-grow mt-4">
                            <div class="flex flex-row flex-grow">
                                <label for="message" class="uppercase text-bookmark-grey"><strong>Message</strong></label>
                                <label for="message" id="remaining" class="ml-auto uppercase text-bookmark-grey font-bold">Max. 500 characters</label>
                            </div>
                            <textarea on:input={whenChanges} maxLength="500" rows="8" type="text" id="message" name="message" class="border-bookmark-grey border-2 focus:outline-none px-3 py-2 hover:border-bookmark-red transition duration-300" required />
                            <label id="error" class="mr-auto text-bookmark-red mt-4 hidden">Error</label>
                            <Success id="succeeded" divid="hideit" message="" hidden=true />
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-col flex-grow mt-4">
                            <button type="submit" id="preventDe" class="bg-bookmark-red text-white rounded-md px-7 py-3 select-none border border-white hover:bg-white hover:text-bookmark-red hover:border-slate-300 cursor-default transition duration-300">Send Message</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </section>
</div>
<Footer />