import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Description } from "./components/description-landing";
import { Cv } from "./components/cv";
import { Projects } from "./components/projects";
import { TechStack } from "./components/techStack";
import { Title } from "./components/title";

const descLanding =
  "Hello, I’m Jack, a Front-End Software Engineer from Wigan. Over the past 3 years I have been developing creative, accessible, responsive and functional websites. Currently finishing my university degree in web design and development May 2023!  In my spare time I enjoy socialising, keeping fit and gaming, that’s if im not coding! ";

function App() {
  return (
    <>
      <Header />
      <Title title="Welcome" />
      <Description description={descLanding} />
      <Cv />
      <Projects />
      <TechStack />
    </>
  );
}

export default App;
