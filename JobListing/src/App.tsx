import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard";
import "./scss/base/_base.scss";
import "./scss/layout/_main.scss";

function App() {
  const obj = {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  };
  return (
    <>
      <Header></Header>
      <main>
        <JobCard job={obj}></JobCard>
      </main>
    </>
  );
}

export default App;
