import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import ProjectLists from './components/ProjectLists';
import Techs from './components/Techs';
function App() {
  return (
    <div className='App'>
      {/* NAVBAR */}
      {/* <Navbar /> */}
      <Nav />
      <Home />
      <AboutMe />
      <Techs />
      <ProjectLists />
      <Footer />
    </div>
  );
}

export default App;
