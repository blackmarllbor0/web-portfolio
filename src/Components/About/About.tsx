import "./About.scss";
import me from "../../Assets/me.jpg";

export const About = () => {
  return (
    <section className="about">
      <div id="image_block">
        <img src={me} alt="Я" id="me" />
      </div>
      <p id="description">
        Мне 20 лет, я <strong>студент выпускного курса</strong> колледжа.
        Занимаюсь веб-программированием уже <strong>2 года</strong>. Имею около{" "}
        <strong>8 месяцев комерческого опыта </strong> {" на "}
        <strong>freelance</strong> биражах. Как основной язык -{" "}
        <strong>TypeScript</strong>. Так же имеется опыт в других направлениях.
        Был опыт создания игр на
        <strong>{" Unity"}</strong>, программирование учебного робота (как не
        странно - на <strong>JavaScript</strong>) и не только. Занимаюсь как{" "}
        <strong>front</strong>, так и <strong>back</strong>
      </p>
      <p id="next_desc">
        частью веб-прложений. Основной стек:{" "}
        <strong>
          {"{React/Nest}"}
          *.js
        </strong>
        . Но так же есть отличное понимание{" "}
        <strong>ванильного frontend'а и backend'а на Express.js</strong>. Как ОС
        использую <strong>Arch Linux</strong>, но считаю себя просто увереным
        пользователем, а не профессионалом. Так же есть опыт использования{" "}
        <strong>Docker</strong>, писал скрипты на <strong>Python</strong>.
        Использовал БД <strong>MySql и Postgres</strong>.
      </p>
    </section>
  );
};
