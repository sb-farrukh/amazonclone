import React, { useEffect, useState } from 'react'
import './BackToTop.css'
const BackToTop = () => {
  const [isVisible,setIsVisible]=useState(false)
  const toggleVisible= ()=>{
    if (window.pageYOffset > 900){
      setIsVisible(true)
    }else {
      setIsVisible(false)
    }
  }
  const ScrolToTop = ()=>{
   window.scrollTo({
     top:0,
     bahavior:'smooth'
   })
  }
  useEffect(()=>{
    window.addEventListener('scroll',toggleVisible);
return()=>{
  window.removeEventListener('scroll',toggleVisible)
}
  },[])
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={ScrolToTop} className="back-top-container">
          Go To Top
        </div>
      )}
    </div>
  )
}

export default BackToTop;
