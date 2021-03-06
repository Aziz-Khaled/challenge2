import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar title ="Portfolio" />
      <h2 className='Title' >About</h2>
      <About name ="Aziz Khaled"/>
      <h2 className='Title'>Projects</h2>
      <Projects link1='https://github.com/Aziz-Khaled/checkpoint-REACT-components'
      link2 ='https://github.com/Aziz-Khaled/checkpoint-JSX'
      link3 ='https://github.com/Aziz-Khaled/checkpoint-React'
      link4 ="https://github.com/Aziz-Khaled/Github-checkpoint" />
      <h2 className=' Title'> Contact me</h2>

      <Contact description ="Some positive Feedback"
      email='enter your email'/>

      <Footer copyright ='© 2001-2021, GomyCode & Lac1, All Rights Reserved'/>
    </div>
  );
}

export default App;
