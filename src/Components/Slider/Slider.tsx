import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { ProjectProp } from "../Projects/ProjectProp";
import randomColor from "randomcolor";

export const Slider = ({ projects }: ProjectProp) => {
  const colors = randomColor({ count: projects.length, luminosity: "light" });

  const render = projects.map(
    (
      {
        id,
        projectName,
        projectLink,
        projectType,
        projectTechnologies,
        projectDescription,
        projectResultLink,
      },
      index
    ) => (
      <SwiperSlide key={id}>
        <div
          className="project_slide"
          style={{ backgroundColor: colors[index] }}
        >
          <h2 id="project_name">{projectName}</h2>
          <a href={projectLink} target={"_blank"} rel="noreferrer">
            Репозиторий проекта
          </a>
          <div className="tech">
            <span className="tech_type">
              {projectType === "back" ? "Backend" : "Frontend"}
            </span>
            <div className="tech_stack">
              {"[ "}
              {projectTechnologies.map((item, index) => (
                <strong key={item} className="tech_item">{`${item}${
                  index === projectTechnologies.length - 1 ? "" : ","
                } `}</strong>
              ))}
              {" ]"}
            </div>
          </div>
          <div className="project_desc">
            <p>{projectDescription}</p>
          </div>
          {projectResultLink ? (
            <a href={projectResultLink} target={"_blank"} rel="noreferrer">
              Посмотреть проект
            </a>
          ) : null}
        </div>
      </SwiperSlide>
    )
  );

  return (
    <Swiper spaceBetween={150} slidesPerView={1}>
      {render}
    </Swiper>
  );
};
