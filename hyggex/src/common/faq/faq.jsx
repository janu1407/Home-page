import React from 'react'
import './faq.css'


const Faq = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-base text-gray font-med mq450:gap-[16px]">
    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
      <div className="relative leading-[26px] font-semibold">
      Can education flashcards be used for all age groups?
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/frame-8.svg"
      />
    </div>
    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
      <div className="relative leading-[26px] font-semibold">
        How do education flashcards work?
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/frame-8.svg"
      />
    </div>
    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
      <div className="relative leading-[26px] font-semibold">
        Can education flashcards be used for test preparation?
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/frame-8.svg"
      />
    </div>

    </div>
  )
}

export default Faq
