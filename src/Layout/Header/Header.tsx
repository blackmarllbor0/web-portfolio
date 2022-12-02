import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="me">
        <h1>
          <strong>Даниил Панов</strong>
        </h1>
        <a
          href="https://github.com/blackmarllbor0"
          target={"_blank"}
          rel="noreferrer"
        >
          @blackmarllbor0
        </a>
      </div>
      <p>Люблю писать код и не думать только о плохом</p>
    </header>
  );
};
