
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div>
      <img className="main-picture" src="https://static.vecteezy.com/system/resources/previews/002/294/862/non_2x/digital-courses-web-banner-design-student-watching-online-courses-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg" alt=""  />
      <h1 className="heading1">Hello, I am Merili and this website is made
        <br></br>
        for Programming or Design to show my portfolio
      </h1>
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://www.shutterstock.com/image-vector/colleagues-office-flat-vector-illustration-600nw-1494754745.jpg" alt="" />
          <p>Work</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://clipart-library.com/8300/2368/hand-drawn-flat-people-hobbies_23-2149053953.jpg" alt="" />
          <p>Hobbies</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://img.freepik.com/premium-vector/man-focused-computer-screen-engaged-online-education-business-training-online-education-business-training-concept-distance-courses-simple-minimalist-flat-vector-illustration_538213-55647.jpg" alt="" />
          <p>Courses</p>
        </Link>
      </div>
      <h1 className="video-heading">Watch course introduction video here</h1>
      <iframe className="video" height="400" width="700" src="https://www.youtube.com/embed/VCPGMjCW0is?si=4aSChFx8s9qbdBdI">
      </iframe>

      <Routes>
        <Route path="work" element={ <Work/> } />
        <Route path="hobbies" element={ <Hobbies/> } />
        <Route path="courses" element={ <Courses/> } />
      </Routes>

      <div className="logo-alignment">
        <a className="facebook-button" href="https://www.facebook.com/jee">
          <img src="/facebook.png" alt="" />
          <span>Facebook</span>
        </a>
        <a className="instagram-button" href="https://www.instagram.com/jee">
          <img src="/instagram.png" alt="" />
          <span>Instagram</span>
        </a>
        <a className="linkedin-button" href="https://www.linkedin.com/jee">
          <img src="/linkedin.png" alt="" />
          <span>Linkedin</span>
        </a>
        <a className="youtube-button" href="https://www.youtube.com/jee">
          <img src="/youtube.png" alt="" />
          <span>Instagram</span>
        </a>
      </div>
      <p className="icon-text">Icons made by Freepik from www.flaticon.com. Video made by Umault from www.youtube.com. Pictures from www.vecteezy.com, www.shutterstock.com, www.clipart-library.com, www.freepik.com.</p>
    </div>
  )
}

export default App
