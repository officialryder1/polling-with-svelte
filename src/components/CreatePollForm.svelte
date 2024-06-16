<script>
    import Button from "../shared/Button.svelte";
    import {createEventDispatcher} from "svelte";
    import PollStore from "../store/PollStore";
 
 

    let dispatch = createEventDispatcher()

    let fields = {
        question: '', answerA: '', answerB: ''
    }
    let error = {
        question: '', answerA: '', answerB: ''
    }
    let valid = false;

    const AddPoll = () =>{
        valid = true;
        // validate Question
        // we Don't want any question last than 5 word
        if(fields.question.trim().length < 5){
            valid=false
            error.question = "Question must be at least 5 characters long";
        }else{
            error.question = '';
        }
        // Validate Answer A
        if(fields.answerA.trim().length < 1){
            valid=false
            error.answerA= "Answer A can not be empty";
        }else{
            error.answerB = '';
        }
        // Validate Answer B
        if(fields.answerB.trim().length < 1){
            valid=false
            error.answerB= "Answer B can not be empty";
        }else{
            error.answerB = '';
        }

        // add a new poll
        if(valid){
            if (valid) {
                let poll = { ...fields, voteA: 0, voteB: 0, id: Math.random() };
                // Save poll to store
                PollStore.update(currentPolls => {
                    return [poll, ...currentPolls];
                })
                dispatch('add');

            }
        }
    }
</script>

<form on:submit|preventDefault={AddPoll}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div>
            <p class="error">{error.question}</p>
        </div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div>
            <p class="error">{error.answerA}</p>
        </div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div>
            <p class="error">{error.answerB}</p>
        </div>
    </div>

    <Button type="secondary" flat={true} inverse={true}>Add Poll</Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>