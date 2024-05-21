import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className='container nav_bar'
      

      data-aos="fade-down"
      data-aos-duration="1000"
      >
      

        <div className='left nav_items'>Rishikesh</div>
        <div className='right'>
            <a href="#home" className="nav_items">Home</a>
            <a href="#about" className="nav_items">About</a>
            <a href="#skill" className="nav_items">Skill</a>
            <a href="#project" className="nav_items">Project</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar;