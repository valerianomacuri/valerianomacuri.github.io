import logo from './logo.svg';
import './App.css';
import Stack from './pages/Stack';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import { MainContainer } from './components/MainContainer';
import { ModalButton } from './components/ModalButton ';

function App() {
  return (
    <>
      <MainContainer>
        <AboutMe /> 
        <Projects />
        <Stack />
        <ModalButton />
      </MainContainer>
    </>
  );
}

export default App;
