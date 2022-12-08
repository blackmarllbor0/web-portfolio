import "./Contacts.scss";
import { ReactComponent as Github } from "../../Assets/github.svg";
import { ReactComponent as Mail } from "../../Assets/mail.svg";
import { ReactComponent as Telegram } from "../../Assets/telegram.svg";

export const Contacts = () => {
  return (
    <section className="contacts">
      <h1>Как со мной связаться?</h1>
      <div className="links_me">
        <a
          href="https://github.com/blackmarllbor0"
          className="github"
          target={"_blank"}
        >
          <Github className="logo" />
          Blackmarllbor0
        </a>
        <a href="mailto:3100194@gmail.com" className="gmail" target={"_blank"}>
          <Mail className="logo" />
          3100194@gmail.com
        </a>
        <a
          href="https://t.me/blackmarllbor0"
          className="telegram"
          target={"_blank"}
        >
          <Telegram className="logo" />
          @blackmarllbor0
        </a>
      </div>
    </section>
  );
};
