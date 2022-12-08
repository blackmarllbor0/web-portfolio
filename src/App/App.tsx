import { About } from "../Components/About/About";
import { Contacts } from "../Components/Contacts/Contacts";
import { Projects } from "../Components/Projects/Projects";
import { Summary } from "../Components/Summary/Summary";
import { Header } from "../Layout/Header/Header";
import "./App.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Summary />
        <Contacts />
      </main>
      <footer></footer>
    </>
  );
};
