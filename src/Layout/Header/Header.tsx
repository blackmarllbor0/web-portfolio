import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="me">
        <h1>Даниил Панов</h1>
        <a
          href="https://github.com/blackmarllbor0"
          target={"_blank"}
          rel="noreferrer"
        >
          @blackmarllbor0
        </a>
      </div>
      <p>Люблю писать код и думать о хорошем</p>
    </header>
  );
};
