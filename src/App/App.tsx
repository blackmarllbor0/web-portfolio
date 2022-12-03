import { About } from "../Components/About/About";
import { Projects } from "../Components/Projects/Projects";
import { Header } from "../Layout/Header/Header";
import "./App.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
};
