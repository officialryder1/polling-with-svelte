<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<div class="tab">
    <ul>
        {#each items as item }
            <!-- using an inline function is not necessary -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatch('tabChange', item)}>
                <!-- the class:active is simply just to style it if it is active -->
                <div class:active={item === activeItem}>
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active{
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
    .tab{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
</style>