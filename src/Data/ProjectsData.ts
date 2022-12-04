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
    projectDescription: `
    В приложение есть выбор страны и города (по умолчанию Москва). Есть страницы регистрации и входа. 
    Проект представлет собой интернет-магазин электроной техники: телефоны, часы, колонки и т.д.
    Есть фильтры по категориям и цене. Есть быстрый просмотр товара (с красиво сделаной панелью плавания по фотографии),
    так же можно добавить товар в корзину или оформить заказ (сумма считается автоматически) и многое другое.
    `,
  },
  {
    id: 4,
    projectName: "node-weather-cli",
    projectLink: "https://github.com/blackmarllbor0/node-wheather-cli",
    projectType: "back",
    projectTechnologies: ["JavaScript", "Node.js", "Chalk"],
    projectDescription: `
    API представляет собой консольное приложение для просмотра погоды в зависимости
    от вашего местоположения, которое вы можете сохранить в токен. Работает как на Windows,
    так и на IOS/Linux.
    `,
    projectResultLink:
      "https://www.npmjs.com/package/node-weater-cli-blackmarllboro",
  },
  {
    id: 5,
    projectName: "react-nest-postges-todo-list",
    projectLink:
      "https://github.com/blackmarllbor0/react-nest-postges-todo-list",
    projectType: "back",
    projectTechnologies: [
      "Typescript",
      "Node.js",
      "Nest.js",
      "Jest",
      "JsonWebToken",
      "bcrypt",
      "class-walidator",
      "class-transformer",
      "PostgreSql",
      "Docker",
      "TypeOrm",
      "Swagger",
      "Rest API",
      "Coockie",
    ],
    projectDescription: `
      Серверное приложение, которое реализует методы login/register, использует токены JWT 
      для авторизации пользователя. Можно создавать список задач с выбранной категорией. 
      Сделана валидация данных, удобно переносимая - благодоря Dokcer - база данных.
      Данные для входа сохранены и защищены благодоря cookie файлам. Документирование 
      Swagger и многое другое.
      `,
  },
  {
    id: 6,
    projectName: "shop-cart-rest-api",
    projectLink: "https://github.com/blackmarllbor0/shop-cart-rest-api",
    projectType: "back",
    projectTechnologies: [
      "Typescript",
      "Node.js",
      "Nest.js",
      "Jest",
      "JsonWebToken",
      "bcrypt",
      "class-walidator",
      "class-transformer",
      "PostgreSql",
      "Docker",
      "TypeOrm",
      "Rest API",
      "Coockie",
    ],
    projectDescription: `
    Вы можете зайти как неавторизированый пользователь и посмотреть все доступные товары.
    Вы можете зайти или зарегестрировать свою учетную запись, и уже после добавить товар в 
    корзину или оформить заказ. Вы, если у вас есть такая привелегия, можете зайти
    как администартор и добоавлять, изменять и улалять товары. Так же можете делать заказы и себе.
    `,
  },
];
