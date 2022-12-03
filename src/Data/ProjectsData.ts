import { ProjectType } from "../Types/ProjectType";

export const projectsData: ProjectType[] = [
  {
    id: 1,
    projectName: "react-marvel",
    projectLink: "https://github.com/blackmarllbor0/react-marvel",
    projectType: "front",
    projectTechnologies: [
      "JavaScript",
      "React",
      "Redux/toolkit",
      "React-Router-Dom",
      "SCSS",
    ],
    projectDescription: `
    Проект сделанный с помощью Marvel API. Проект умеет показывать супергероев и комиксы.
    Выполнен поиск по официальным именам героев вселенной. Можно посмотреть отдельные 
    комиксы выбраного персонажа или перейти на вкладку Comics, и посмотреть комиксы в 
    хаотичном порядке. Вы можете перейти на вкладку комикса и посмотреть:
    имя, год выпуска, язык, цена, кол-во страниц, описание и состояние продажи.
    `,
    projectResultLink: "https://blackmarllbor0.github.io/react-marvel/",
  },
  {
    id: 2,
    projectName: "react-food",
    projectLink: "https://github.com/blackmarllbor0/react-food",
    projectType: "front",
    projectTechnologies: [
      "JavaScript",
      "React",
      "Redux/toolkit",
      "React-Router-Dom",
      "Materialize css",
    ],
    projectDescription: `
    Проект использует themealdb API и являет собой поиск рецептов для блюд разных категорий.
    Имеется поиск категорий и отдельных блюд. Выбрав категорию, вы поподаете на страницу
    с блюдами данной категории, где вы также можете делать поиск. Выбрав блюдо,
    вы попадает на страницу, где можете либо посмотреть видео с рецептом, либл прочитать
    рецепт, и посмотреть список ингредиентов.
    `,
    projectResultLink: "https://blackmarllbor0.github.io/react-food/",
  },
  {
    id: 3,
    projectName: "react-advant-shop",
    projectLink: "https://github.com/blackmarllbor0/react-advant-shop",
    projectType: "front",
    projectTechnologies: [
      "TypeScript",
      "React",
      "Redux",
      "React-Router-Dom",
      "SASS",
      "svg-captha",
      "valid.sj",
      "thunk",
    ],
    projectDescription: "",
  },
];
