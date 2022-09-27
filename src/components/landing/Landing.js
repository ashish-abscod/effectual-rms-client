import './landing.css'
import Header from './Header'
import Section1 from './Section1'
import About from './About'
import Highlights from './Highlights'
import Footer from './Footer'
import Features from './Features'
import GetStarted from './GetStarted'
import Contact from './Contact'
import Login from '../LogInOut/Login'
import ForgotPassword from '../LogInOut/ForgotPassword'

export default function Landing() {
  return (
    <>
    <Login/>
    <ForgotPassword/>
    <Header/>
    <Section1/>
    <About/>
    <Highlights/>
    <Features/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </>
  )
}
