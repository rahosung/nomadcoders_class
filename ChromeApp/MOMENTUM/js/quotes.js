// Quotes
const quotes = [
    {
        quote: "口禍之門 : 구화지문",
        meaning: "입은 재앙을 불러들이는 문이 된다는 뜻으로 말조심을 하라고 경계하는 말",
    },
    {
        quote: "不撤晝夜 : 불쳘주야",
        meaning: "밤낮을 가리지 않는다는 뜻으로 조금도 쉴 사이 없이 일에 힘씀",
    },
    {
        quote: "事必歸正 : 사필귀정",
        meaning: "처음에는 시비를 가리지 못하여 그릇되더라도 모든 일은 결국에 가서는 반드시 정리로 돌아감",
    },
    {
        quote: "因果應報 : 인과응보",
        meaning: "원인과 결과는 서로 물고 물린다는 뜻",
    },
    {
        quote: "殺身成仁 : 살신성인",
        meaning: "자기의 몸을 희생하여 옳은 도리를 행함",
    },
    {
        quote: "錦衣還鄕 : 금의환향",
        meaning: "비단옷 입고 고향에 돌아온다는 뜻으로, 출세하여 고향에 돌아옴을 이르는 말",
    },
    {
        quote: "學而時習 : 학이시습",
        meaning: "배우고 때로 익힌다는 뜻으로 배운 것을 복습하고 연습하면 그 참 뜻을 알게 됨",
    },
    {
        quote: "落花流水 : 낙화유수",
        meaning: "떨어지는 꽃과 흐르는 물이라는 뜻으로, 남녀 간 서로 그리워하는 애틋한 정",
    },
    {
        quote: "錦上添花 : 금상첨화",
        meaning: "비단(緋緞) 위에 꽃을 더한다는 뜻으로, 좋은 일에 또 좋은 일이 더하여짐을 이르는 말",
    },
    {
        quote: "粉骨碎身 : 분골쇄신",
        meaning: "뼈가 가루가 되고 몸이 부서진다는 뜻으로, 있는 힘을 다해 노력(努力)함",
    },
];

const quote = document.querySelector("#quote span:first-child");
const meaning = document.querySelector("#quote span:last-child");

const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote;
meaning.innerText = toDayQuote.meaning;