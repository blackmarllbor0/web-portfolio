import "./Summary.scss";
import summary from "../../Assets/summary.pdf";

export const Summary = () => {
  return (
    <section className="summary">
      <h1>
        Здесь вы можете скачать и ознокомиться с моим резюме. Так же снизу будут
        указаны контакты для связи. До связи!
      </h1>
      <div className="download_block">
        <a href="." download={summary} title={"Панов Даниил"}>
          Скачать резюме в .pdf
        </a>
      </div>
    </section>
  );
};
