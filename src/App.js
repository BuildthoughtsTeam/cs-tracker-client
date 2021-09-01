import MyNavbar from './shared/Navbar/Navbar'
import Home from './pages/Home/Home'
import Progress from './pages/Progress/Progress'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import SubjectTopics from './pages/SubjectTopics/SubjectTopics'
import Questions from './pages/Questions/Questions'
import CurrentQuestion from './pages/CurrentQuestion/CurrentQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/progress" component={Progress} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/dsa" component={SubjectTopics} />
        <Route path="/questions" component={Questions}/>
        <Route path="/currentQuestion" component={CurrentQuestion} />
      </Router>
    </>
  )
}

export default App
