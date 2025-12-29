import "./App.css";

// Sections
import BDesHero from "./components/BDesHero";
import AboutBDes from "./components/AboutBDes";
import WhyChooseBDes from "./components/WhyChooseBDes";
import CourseStructure from "./components/CourseStructure";
import Eligibility from "./components/Eligibility";
import AdmissionProcess from "./components/AdmissionProcess";
import Fees from "./components/Fees";
import TopColleges from "./components/TopColleges";
import Careers from "./components/Careers";
import ApplicationForm from "./components/ApplicationForm";

function App() {
  return (
    <div className="app">
      <BDesHero />
      <AboutBDes />
      <WhyChooseBDes />
      <CourseStructure />
      <Eligibility />
      <AdmissionProcess />
      <Fees />
      <TopColleges />
      <Careers />
      <ApplicationForm />
    </div>
  );
}

export default App;
