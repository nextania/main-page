<script>
    export let title;
    export let content;
    export let buttons;
    export let onClose;
</script>

<div class="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-50 backdrop-blur-sm z-50" onContextMenu={e => e.preventDefault()}>
    <div class="rounded-md bg-white p-5 drop-shadow-lg opacity-100">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center justify-between">
                <h2 class="text-2xl font-semibold">
                    {title}
                </h2>
            </div>
            <div class="flex flex-col">
                {content}
            </div>
            <div class="flex flex-row justify-end">
                {#each buttons as button}
                    <button id={button.id} class={`px-4 py-2 mx-2 rounded-md ${button.primary ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 hover:bg-gray-400"}`} on:click={() => onClose(button.id)}>
                        {button.text}
                    </button>
                {/each}
                
            </div>
        </div>
    </div>
</div>