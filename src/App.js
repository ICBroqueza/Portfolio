import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectLists from './components/ProjectLists';
import Techs from './components/Techs';

function App() {
  return (
    <div className='App'>
      {/* NAVBAR */}
      <Navbar />
      <Home />
      <AboutMe />
      <Techs />
      <ProjectLists />
      <Footer />
    </div>
  );
}

export default App;
