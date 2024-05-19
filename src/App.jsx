import './App.css'
import Navbar from './components/Navbar'
import profile from './assets/image/profile.png'
import Project from './components/Project'
import { Contact } from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="App-con">
        <div className="section-about-con">
          <div className="about-info">
            <h1>Hi 👋, <br />My name is <div className="name">Jirawat</div>I build thing for web</h1>
          </div>
          <div className="about-profile">
            <img className='profile' src={profile} alt="" />
          </div>
        </div>

        <div className="section-tech-con">
          <h1>My Tech Stack</h1>
          <p>Technologies I've been working qith recently</p>
          <div className="tech-items-grid">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" alt="" />
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" alt="" />
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/dart-icon-2042x2048-775u9j9x.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="" />
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/github-icon-512x511-q5m65q8c.png" alt="" />
          </div>
        </div>

        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
