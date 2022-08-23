<script>
    export let title;
    export let message;
    export let hidden;
    export let id;
    export let divid;
    let hiddenClass = hidden ? 'hidden' : 'block';
</script>
<div id={divid} class={hiddenClass}>
    <div class="bg-green-200 border-green-500 text-green-700 p-4 shadow-lg mt-4" role="alert">
        {#if title}
            <p class="font-semibold">{title}</p>
        {/if}
        <p id={id}>{message}</p>
    </div>
</div>