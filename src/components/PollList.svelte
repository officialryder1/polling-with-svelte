<script>
    import { fade, slide, scale} from 'svelte/transition'
    import {flip} from 'svelte/animate'
    import PollDetail from "./PollDetail.svelte";
    import PollStore from "../store/PollStore";
    // import {onMount, onDestroy} from 'svelte';
   


    // const unSub = PollStore.subscribe( data => {
    //     polls = data;
    // })

    // // two of the most use lifecycle hook in svelte
    // // onMount(() => {
    // //     // get data from db
    // //     console.log("Component Mounted")
    // // })

    // onDestroy(() => {
    // // unSub from store
    //     console.log("component destroy")
    //     unSub();
    // })
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id) }
        <div in:scale out:slide animate:flip={{duration: 500}}><!--add a fade transition to this card so it fade whenever it comes in and out of the Dom-->
            <PollDetail {poll} />
        </div>
    {/each}

</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    
    }
</style>