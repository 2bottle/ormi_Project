const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $chatList = document.querySelector("ul");


// openAI API
let url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/'

let question = '';

// 질문과 답변 저장
let data = [
    { 
    role: "system",
    content: "assistant는 친절한 답변가이다.",
    },

    {
    role: "user",
    content: "체중감량을 위한 식단과 운동루틴을 추천해줘", 
    },
    
    {
    role: "assistant",
    content: "식단 추천: 저칼로리 식사: 체중 감량을 위해서는 칼로리 섭취를 줄이는 것이 중요합니다. 하루 평균 칼로리 섭취량을 줄여서 균형잡힌 식단을 유지하세요. 고단백, 저지방 식품: 단백질은 근육을 보호하고 대사를 촉진하는데 도움을 줄 수 있습니다. 가급적이면 저지방 고단백 식품을 섭취하세요. 닭 가슴살, 토푸, 생선, 두부, 견과류 등이 좋은 선택입니다. 다양한 채소와 과일: 식사에 신선한 과일과 채소를 풍부하게 포함하세요. 이로써 필요한 비타민, 미네랄, 식이섬유를 공급받을 수 있습니다.식사 빈도 조절: 자주 작은 식사를 취하면 혈당을 안정화하고 과식을 방지할 수 있습니다. 3끼 식사보다는 5-6끼로 나눠 드세요. 간식 대안: 과자, 간식 대신 건강한 간식을 선택하세요. 예를 들어, 그린 야채 스틱과 허브 드레싱, 그릭 요거트와 과일 등이 좋은 선택입니다.운동 루틴 추천: 유산소 운동: 유산소 운동은 체중 감량에 효과적입니다. 걷기, 조깅, 수영, 사이클링, 유산소 댄스 등을 포함하세요. 주 3-5회, 30분 이상씩 실시하세요. 근력 운동: 근력 운동은 근육을 빌드하고 대사를 촉진합니다. 무게를 들거나 본체중 운동을 하세요. 주 2-3회 실시하세요. 스트레칭과 유연성 운동: 유연성을 향상시키고 근육을 길게 유지하기 위해 스트레칭과 요가를 실시하세요. 고강도 간격 훈련: 고강도 간격 훈련은 대사를 촉진하고 체중 감량에 도움이 됩니다. 단기적으로 높은 강도로 운동하고 휴식을 취하세요.일상 활동 증가: 가능하면 계단을 이용하고 걷기를 늘리는 등의 일상 활동을 늘리세요.", 
    },

    {
    role: "user",
    content: "당뇨가 있으니 고려해서 수정해줘", 
    },

    {
    role: "assistant",
    content: "식단 수정: 탄수화물 관리: 당뇨 환자는 탄수화물 섭취를 조절해야 합니다. 식사 후 혈당을 안정시키기 위해 고립된 당(당도가 높은 음식) 섭취를 피하고, 복합 탄수화물(채소, 곡물, 과일)을 중심으로 식사하세요. 식사 시간 관리: 정기적인 식사 시간을 유지하고 급격한 혈당 변화를 방지하기 위해 간식을 꾸준하게 섭취하세요. 당도가 낮은 과일 선택: 과일을 먹을 때는 당도가 낮은 것을 선택하고, 서빙 크기를 조절하세요. 예를 들어, 딸기, 블루베리, 사과 등이 좋은 선택입니다. 단백질 중심 식사: 단백질은 혈당 변화를 안정시키는 데 도움이 됩니다. 닭 가슴살, 두부, 채소, 견과류, 어류를 섭취하세요. 고섬유 식품: 고섬유 식품은 소화를 느리게 하고 혈당을 안정시키는 데 도움을 줍니다. 꽃게, 귀리, 견과류, 채소 등을 포함하세요. 간식 관리: 건강한 간식을 선택하고, 혈당을 모니터링하며 적절한 간식을 먹으세요.운동 루틴 수정: 규칙적인 운동: 정기적인 유산소 운동은 혈당 관리에 도움이 됩니다. 하지만 운동 전후에 혈당을 모니터링하고 의사의 지시에 따라 조절하세요. 고강도 간격 훈련 주의: 고강도 간격 훈련은 당뇨 환자에게 적합하지 않을 수 있으므로 의사와 상담 후 진행하세요. 앉아서 하는 시간 줄이기: 장시간 앉아있는 것을 피하고, 일상 생활에서 활동량을 늘리기 위해 걷기나 스트레칭을 통해 꾸준한 움직임을 유지하세요. 혈당 모니터링: 운동 전후에 혈당을 모니터링하여 어떻게 반응하는지 파악하고 조절하세요. 의사와 협의: 운동 계획을 시작하기 전에 의사와 협의하여 안전하게 운동할 수 있는지 확인하세요.", 
    },

    {
    role: "user",
    content: "근무시간이 길어 1시간정도만 운동할수있어 수정해서알려줘", 
    },

    {
    role: "assistant",
    content: "운동 루틴 (1시간 이내): 10분의 빠른 유산소 운동: 운동을 시작하기 전에 10분 동안 고강도의 유산소 운동을 실시하세요. 뛰기, 자전거 타기, 스쿼트 점프, 로프 체조 등이 있습니다. 이것은 대사를 촉진하고 칼로리를 빠르게 소모하는 데 도움이 됩니다. 30분의 강도 높은 근력 운동: 근력 운동은 근육을 빌드하고 대사를 촉진하는데 효과적입니다. 다양한 근력 운동을 30분 동안 진행하세요. 이때는 전신 운동, 윗몸 일으키기, 스쿼트, 푸시업, 랫풀다운 등을 포함시킬 수 있습니다. 각 운동은 10-15회씩 2-3세트로 진행하세요. 10분의 스트레칭과 유연성 운동: 운동 후 근육을 풀고 부상을 예방하기 위해 10분 동안 스트레칭과 유연성 운동을 진행하세요. 10분의 쿨다운: 운동이 끝나면 10분 동안 저강도의 유산소 활동(걷기 등)을 통해 심박수를 천천히 낮추고 몸을 안정시키세요.", 
    },

    {
    role: "user",
    content: "일주일에 운동을 3번해", 
    },

    {
    role: "assistant",
    content: "운동 루틴 (주 3회): 운동 종류 선택: 각 운동 세션에서 유산소 운동, 근력 운동 및 유연성 운동을 포함하는 것이 좋습니다. 유산소 운동 (1회): 뛰기, 자전거 타기, 수영, 빠른 걷기 등을 선택하여 30-40분 동안 실시하세요. 이는 심혈관 기능을 향상시키고 칼로리를 소모하는 데 도움이 됩니다. 근력 운동 (1회): 다리, 가슴, 등, 팔 등 다양한 근육 그룹을 포함한 근력 운동을 실시하세요. 각 운동을 2-3세트로 10-15회씩 진행하세요. 풀 바디 웨이트 트레이닝 루틴을 고려해보세요. 유연성 운동 (1회): 요가, 스트레칭 또는 필라테스와 같은 유연성 운동을 20-30분 동안 진행하여 근육을 풀고 몸을 유연하게 유지하세요.", 
    },

    {
    role: "user",
    content: "달리기 같은 유산소운동을 선호해", 
    },

    {
    role: "assistant",
    content: "주 3회 달리기 루틴: 웜업 (5-10분): 미리 워밍업을 통해 근육을 준비하세요. 걷기나 느린 달리기로 시작하고 천천히 페이스를 높여 나가세요. 본 달리기 (20-40분): 주 3회의 달리기 세션 중 하나에서 본격적인 달리기를 진행하세요. 이때는 시간에 따라 진행하거나, 거리에 따라 목표를 설정하세요. 처음 시작하거나 체력이 낮은 경우, 조금씩 시작하고 점차 거리와 속도를 늘려가세요. 쿨다운과 스트레칭 (10-15분): 달리기 후에는 10-15분 동안 쿨다운을 진행하고 근육을 스트레칭하여 풀어줍니다. 이는 근육을 회복하고 부상을 예방하는 데 도움이 됩니다. 유산소 운동 외에 다른 운동: 나머지 주 2회에는 다른 유산소 운동을 선택하여 달리기와 교대하면 좋습니다. 자전거 타기, 수영, 줄넘기, 무용 등을 고려할 수 있습니다.", 
    }
];

function getRecommendation() {
    const goal = document.getElementById("goallist").value;
    const health = document.getElementById("health").value;
    const lifestyle = document.getElementById("lifestyle").value;
    const ability = document.getElementById("ability").value;
    const exercise = document.getElementById("exercise").value;

    const goalval = () => {
        if (goal === 'goal1') {
            return '체중감량'
        } else if (goal === 'goal2') {
            return '근육증가'
        } else if (goal === 'goal3') {
            return '체력향상'
        } else {
            return '취미'
        }
    }

    question = `운동의 목표는 ${goalval()}이고 ${health}를 고려해야해. 평소 생활패턴은 ${lifestyle}이고, 나의 운동수준은 ${ability}이며, 내가 선호하는 운동은 ${exercise}야. 운동루틴과 식단을 추천해줘`;

    return question;
}

// 화면에 뿌려줄 데이터, 질문들
let questionData = [];


// 사용자의 질문을 객체를 만들어서 push
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

// 화면에 질문 그려주는 함수
const printQuestion = async () => {
    if (question) {
    let li = document.createElement("li");
    li.classList.add("question");
    questionData.map((el) => {
        li.innerText = el.content;
    });
    $chatList.appendChild(li);
    questionData = [];
    question = false;
    }
};

// 화면에 답변 그려주는 함수
const printAnswer = async (answer) => {
    let li = document.createElement("li");
    li.classList.add("answer");
    li.innerText = answer;
    $chatList.appendChild(li);
};


const apiPost = async () => {
    try {
        const result = await axios({
            method: "post",
            maxBodyLength: Infinity,
            url: url,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });

        // API 요청이 성공하면 응답 데이터를 콘솔에 출력
        console.log("API 응답 데이터:", result.data);

        if (result.data.choices && result.data.choices.length > 0) {
            printAnswer(result.data.choices[0].message.content);
        } else {
            console.log("API 응답에 유효한 데이터가 없습니다.");
        }
    } catch (err) {
        console.error("API 요청 중 오류 발생:", err);
    }
};

// submit
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    $input.value = null;
    const question = getRecommendation();
    sendQuestion(question);
    apiPost();
    printQuestion();
});
