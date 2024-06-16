<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tab from "./shared/Tab.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import PollStore from "./store/PollStore";
	
	let polls = []
	// tabs
	let items = ["Current Polls", "Add New Poll"]
	let activeItem =  'Current Polls'

	const tabChange = (e) => {
		// all we want to do here is to reset the tab = to what ever item we sent with the e
		activeItem = e.detail;
		console.log(e.detail)
	}


	const handleAdd = (e) =>{
		activeItem = "Current Polls"
	}

	// This is a store that we used to add transistion to our poll bar

	// <Button/>

	
</script>

<!-- <button on:click={() => value.set(1)}>{$value}</button> -->
<Header/>
<main>
	<Tab {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
	<!-- we render the component if the components matches it tab -->
		<PollList/>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>