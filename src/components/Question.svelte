<script>
    export let question = '';
    export let answer = '';
    let expand = false;
    let expandClass;
    let ansClass = 'hidden p-4';

    const doThis = () => {
        expand = !expand;
        expandClass = expand ? '' : 'hidden';
        ansClass = `${expandClass} p-4`
    }
    
</script>
<div class="shadow rounded border border-gray-100 border-t-0 mb-4 select-none" on:click={doThis}>
    <div class="flex items-center border-b py-4 px-4">
        <span class="flex-1">
            {question}
        </span>
        <button aria-label="question-expander" class="mr-auto focus:outline-none cursor-default">
            {#if expand}
                <i class="fas fa-chevron-up"></i>
            {:else}
                <i class="fas fa-chevron-down"></i>
            {/if}
        </button>
    </div>
    <div class={ansClass}>
        {answer}
    </div>
</div>