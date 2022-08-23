<script>
    import { goto } from "@roxi/routify";

    export let signedIn = false;
    export let requestCompleted = false;
</script>
<header class="border-b px-10">
    <nav class="flex items-center py-4">
        <div class="py-1 flex space-x-3" on:click={() => $goto("/")}><img src="/nextflow.png" alt="" class="w-10"><h1 class="text-xl"><b>Nextflow</b></h1></div>
        <ul class="hidden sm:flex md:flex flex-1 justify-end items-center gap-12 text-bookmark-blue text-sm">
            <li on:click={() => $goto("/about")}>About us</li>
            <li on:click={() => $goto("/downloads")}>Downloads</li>
            <li on:click={() => $goto("/enterprise")}>Enterprise Solutions</li>
            <li on:click={() => $goto("/services")}>Services</li>
            <li on:click={() => $goto("/services")}>Resources (dropdown soon)</li>
            {#if signedIn && requestCompleted}
                <li on:click={() => $goto("/account")}>Account</li>
                <button class="bg-bookmark-red text-white rounded-md px-7 py-3 cursor-default select-none border border-white hover:bg-white hover:text-bookmark-red hover:border-slate-300 transition duration-300" on:click={() => { location.href = "https://secure.nextflow.cloud/logout/?continue=" + encodeURIComponent(location.href); }}>Logout</button>
            {:else}
                <button class="bg-bookmark-red text-white rounded-md px-7 py-3 select-none border border-white hover:bg-white hover:text-bookmark-red hover:border-slate-300 cursor-default transition duration-300" on:click={() => { location.href = "https://secure.nextflow.cloud/?continue=" + encodeURIComponent(location.href); }}>Login</button>
            {/if}
        </ul>
    </nav>
</header>