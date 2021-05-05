import "./App.css";
import Head from "./component/head/index";
import MobileProgramming from "./component/mobile-programming/index";
import CurriculumSystem from "./component/curriculum-system/index";
import Faculty from "./component/faculty/index";
import CurriculumForm from "./component/curriculum-form/index";
import PositiveFeedback from "./component/positive-feedback/index";
import SocialResponsibility from "./component/social-responsibility/index";
import Footer from "./component/footer/index";

function App() {
  return (
    <div className="App">
      <Head />
      <main>
        <div className="bgGray">
          <MobileProgramming />
        </div>
        <CurriculumSystem />
        <div className="bgGray">
          <Faculty />
        </div>
        <CurriculumForm />
        <div className="bgGray">
          <PositiveFeedback />
        </div>
        <SocialResponsibility />
      </main>
      <Footer />
    </div>
  );
}

export default App;
