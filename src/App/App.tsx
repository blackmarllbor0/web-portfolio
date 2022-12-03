import { About } from "../Components/About/About";
import { Header } from "../Layout/Header/Header";
import "./App.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <footer></footer>
    </>
  );
};
