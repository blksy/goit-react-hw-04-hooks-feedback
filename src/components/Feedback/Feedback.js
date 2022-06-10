import React  from 'react'
import './Feedback.css'

export default function Feedback ({options, addFeed}) {
    return (
    <>
      <ul className='feedback-list'>{options.map((el, i) => (
        <button className={el} name={el} key={i} onClick={addFeed}>{el}</button>))}
      </ul>
    </>
    )
  }
