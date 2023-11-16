import { Header } from "./components/Header";
import "./scss/base/_base.scss";
import "./scss/layout/_main.scss";
import { JobList } from "./components/JobList";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <JobList></JobList>
      </main>
    </>
  );
}

export default App;
