import "./Summary.scss";
import summary from "../../Assets/summary.pdf";

export const Summary = () => {
  return (
    <section className="summary">
      <p></p>
      <div className="download_block">
        <a href="." download={summary} title={"Панов Даниил"}>
          Скачать резюме в .pdf
        </a>
      </div>
    </section>
  );
};
