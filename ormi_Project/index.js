
const goal = document.getElementById("goallist").value;
const health = document.getElementById("health").value;
const lifestyle = document.getElementById("lifestyle").value;
const ability = document.getElementById("ability").value;
const exercise = document.getElementById("exercise").value;

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;


function getRecommendation(goal, health, lifestyle, ability, exercise) {

    const goalval = () => {
        if(goal === 'goal1'){
            return '체중감량'
        }else if(goal === 'goal2'){
            return '근육증가'
        }else if(goal === 'goal3'){
            return '체력향상'
        }else{
            return '취미'
        }
    }

    return `운동의 목표는 ${goalval()}이고 ${health}를 고려해야해. 평소 생활패턴은 ${lifestyle}이고, 나의 운동수준은 ${ability}이며, 내가 선호하는 운동은${exercise}야 운동루틴과 식단을 추천해줘`
}

let question = getRecommendation(goal, health, lifestyle, ability, exercise);

// 질문과 답변 저장
let data = [
    { 
    role: "system",
    content: "assistant는 친절한 답변가이다.",
    },
];

const sendQuestion = (question) => {
    if (question) {
    data.push({
        role: "user",
        content: question,
    });
    questionData.push({
        role: "user",
        content: question,
    });
    }
};
