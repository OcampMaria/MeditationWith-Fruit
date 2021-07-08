export const Fruits = [
  {
    id: 0,
    name: "Apple",
    score: 0,
  },
  {
    id: 1,
    name: "Apricots",
    score: 0,
  },
  {
    id: 2,
    name: "Banana",
    score: 0,
  },
  // {
  //   id: 3,
  //   name: "Blueberries",
  //   score: 0,
  // },
  // {
  //   id: 5,
  //   name: "Cantaloupe",
  //   score: 0,
  // },
  // {
  //   id: 6,
  //   name: "Cherries",
  //   score: 0,
  // },
  // {
  //   id: 7,
  //   name: "Clementines",
  //   score: 0,
  // },
  // {
  //   id: 8,
  //   name: "Grapes",
  //   score: 0,
  // },
  // {
  //   id: 9,
  //   name: "Honeydew",
  //   score: 0,
  // },
  // {
  //   id: 10,
  //   name: "Kiwi",
  //   score: 0,
  // },
  // {
  //   id: 11,
  //   name: "Mango",
  //   score: 0,
  // },
  // {
  //   id: 12,
  //   name: "Nectarines",
  //   score: 0,
  // },
  // {
  //   id: 13,
  //   name: "Orange",
  //   score: 0,
  // },
  // {
  //   id: 14,
  //   name: "Peaches",
  //   score: 0,
  // },
  // {
  //   id: 15,
  //   name: "Pears",
  //   score: 0,
  // },
  // {
  //   id: 16,
  //   name: "Pineapple",
  //   score: 0,
  // },
  // {
  //   id: 17,
  //   name: "Plums",
  //   score: 0,
  // },
  // {
  //   id: 18,
  //   name: "Pomegranate",
  //   score: 0,
  // },
];
export const QuizData = [
  {
    id: 0,
    question: `Is this fruit available in your store and affordable to you?`,
    options: [`Yes`, `No`],
    quizEnd: false,
    disabled: true,
  },
  {
    id: 1,
    question: `on a scale from 1-10, How familiar is this fruit to you? 0 (Not Familiar)-10 (Very Familiar)`,
    options: [
      `0`,
      `1`,
      `3`,
      `4`,
      `5`,
      `6`,
      `7`,
      `8`,
      `9`,
      `10`,
    ],
    quizEnd: false,
    score: 0,
    disabled: true,
  },
];
export const UserAnswers = [
  {
    fruitName: '', 
    score: 0
  }
];