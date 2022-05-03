const stageData = [
  {
    targetTag: "dog",
    problem: "강아지가 너무 뚱뚱해요! 크기를 20%로 줄여주세요",
    hint: "width 속성과 % 단위를 이용해보세요!",
    links: [
      {
        URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/width",
        text: "width 학습자료",
      },
    ],
    dogStyle: ".dog{width:50%; height:50%}",
    correctAnswer: "width:20%;",
    initialStyle: ".food { display: none; }",
  },
  {
    targetTag: "flex-ground",
    problem: "강아지가 밥을 먹을 수 있도록 도와주세요!",
    hint: "justify-content 속성을 이용해보세요!",
    links: [
      {
        URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
        text: "justify-content 학습자료",
      },
    ],
    dogStyle: ".dog{width:20%; height:20%}",
    correctAnswer: "justify-content:end;",
    initialStyle: "#gameboxBackground { justify-content: end;",
  },
  {
    targetTag: "flex-ground",
    problem: "강아지가 밥을 먹을 수 있도록 도와주세요!",
    hint: "align-items를 이용해보세요!",
    links: [
      {
        URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
        text: "align-items 학습자료",
      },
    ],
    dogStyle: ".dog{width:20%; height:20%}",
    correctAnswer: "align-items:end;",
    initialStyle: "#gameboxBackground {align-items: end;}",
  },
  {
    targetTag: "flex-ground",
    problem: "강아지가 밥을 먹을 수 있도록 도와주세요!",
    hint: "justify-content와 align-items 속성을 이용해보세요!",
    links: [
      {
        URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
        text: "justify-content 학습자료",
      },
      {
        URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
        text: "align-items 학습자료",
      },
    ],
    dogStyle: ".dog{width:20%; height:20%}",
    correctAnswer: "justify-content:end;align-items:center;",
    initialStyle:
      "#gameboxBackground {justify-content: end; align-items: center;}",
  },
];

export default stageData;
