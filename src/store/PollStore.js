import { writable } from "svelte/store";
const PollStore = writable([{
    id:1,
    question: "Python or Javascript",
    answerA: 'python',
    answerB: 'Javascript',
    voteA: 0,
    voteB: 0,
}]);

export default PollStore;


