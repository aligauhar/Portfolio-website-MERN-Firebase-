import React, {useContext} from 'react'
import CustomNavbar from '../../components/HeroSection'
import Component1 from '../../components/comp-one'
import Component2 from '../../components/comp-two'
import Component3 from '../../components/comp-three'
import Component3m from '../../components/comp-three-mid'
import Component4 from '../../components/comp-four'
import Footer from '../../components/Footer'
import { ThemeContext  } from "../../Theme";


const Home = () => {
  const { gradiant} = useContext(ThemeContext );
  return (
    <>
<div
  style={{ 
    backgroundColor: `#002CFF`|| `#76DBC9`,
    backgroundImage: gradiant,
    backgroundSize: 'cover',
  }}
>
      <CustomNavbar/>
      <Component1/>
      <Component2/>
      <Component3m/>
      <Component3/>
      <Component4/>
      <Footer/>
      </div>
    </>
  )
}

export default Home

