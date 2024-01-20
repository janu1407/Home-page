import React from 'react'
import "./footer.css"
import plus from "../../components/images/plus.svg"
import logo1 from "../../components/images/logo1.png"
import hyggex from "../../components/images/hyggex.png"
// import down from "../../components/images/down.png"

const Footer = () => {
  return (
    <div className='faq'>

<section className="hi">
      <div className="hey">
        <div className="icon2">
          <img
            className="logo1"
            loading="eager"
            alt=""
            src={logo1}
          />
        </div>
        <div className="pub">
          <b className="relative">Published by</b>
          <img
            className="hyggex"
            alt=""
            src={hyggex}
          />
        </div>
      </div>
      <div className="com">
        <div><img
          className="plus"
          alt=""
          src={plus}
        /></div>
        <div><h3 className="fc">
          Create Flashcard
        </h3></div>
      </div>
</section>

<b><p className='hello'>FAQ</p></b>
{/* <div class="accordion-body">
    <div class="container">
      <div className='f1'><b><div class="label">Can education flashcards be used for all age groups?</div></b>
      <div><img src={down} alt='' className='down'></img></div></div>
      <div class="content">Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.</div>
    </div>
    <div class="container">
    <div className='f1'><b><div class="label">How do education flashcards work?</div></b>
    <img src={down} alt='' className='down'></img></div>
      <div class="content">Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.</div>
    </div>
    <div class="container">
    <div className='f1'><b><div class="label">Can education flashcards be used for test preparation?</div></b>
    <img src={down} alt='' className='down'></img></div>
      <div class="content">Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.</div>
    </div>
</div> */}




</div>
     
  )
}

export default Footer
