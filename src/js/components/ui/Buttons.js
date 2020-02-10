import React from 'react';

export const ButtonEdit = ({ onClick }) => {

  return (
    <button 
          className="icon"  
          type="button" 
          onClick={() => onClick()}
        >
          <svg viewBox="0 0 512 512" aria-hidden="true" className="svg-icon" focusable="false" role="img">
            <path fill="currentColor" d="m140 439l26-26-67-67-26 26 0 30 37 0 0 37z m150-265c0-4-2-7-7-7-1 0-3 1-4 2l-155 155c-2 2-2 3-2 5 0 4 2 6 6 6 2 0 4 0 5-2l155-154c1-2 2-3 2-5z m-16-55l119 119-238 237-118 0 0-118z m195 27c0 10-3 19-10 26l-48 47-118-118 47-48c7-7 15-10 26-10 10 0 18 3 26 10l67 67c7 8 10 16 10 26z"></path>
          </svg>
        </button>
  )

}

export const ButtonDelete = ({ onClick }) => {

  return (
    <button 
          className="icon"  
          type="button" 
          onClick={() => onClick()}
        >
          <svg viewBox="0 0 512 512" aria-hidden="true" className="svg-icon" focusable="false" role="img">
            <path fill="currentColor" d="m201 210l0 165c0 3-1 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-2-1-2-3-2-6l0-165c0-2 0-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 1 1 2 4 2 6z m73 0l0 165c0 3-1 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-1-1-2-3-2-6l0-165c0-2 1-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 1 1 2 4 2 6z m73 0l0 165c0 3 0 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-1-1-2-3-2-6l0-165c0-2 1-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 2 1 2 4 2 6z m37 207l0-271-256 0 0 271c0 4 1 8 2 12 1 3 3 6 4 7 2 2 3 3 3 3l238 0c0 0 1-1 3-3 1-1 3-4 4-7 1-4 2-8 2-12z m-192-307l128 0-14-34c-1-1-3-2-5-3l-90 0c-2 1-4 2-5 3z m265 9l0 18c0 3-1 5-2 7-2 1-4 2-7 2l-27 0 0 271c0 16-5 30-14 41-9 12-20 17-32 17l-238 0c-12 0-23-5-32-16-9-11-14-25-14-41l0-272-27 0c-3 0-5-1-7-2-1-2-2-4-2-7l0-18c0-3 1-5 2-7 2-1 4-2 7-2l88 0 20-48c3-7 8-13 16-18 7-5 15-7 22-7l92 0c7 0 15 2 22 7 8 5 13 11 16 18l20 48 88 0c3 0 5 1 7 2 1 2 2 4 2 7z"></path>
          </svg>
        </button>
  )

}

export const ButtonBack = ({ onClick }) => {

  return (
    <button 
          className="button--large button--symbol"  
          type="button" 
          onClick={() => onClick()}
        >
          <svg viewBox="0 0 512 512" aria-hidden="true" className="svg-icon" focusable="false" role="img">
            <path fill="currentColor" d="m475 256l0 37c0 10-3 18-9 25-6 8-14 11-24 11l-201 0 84 84c7 7 10 16 10 26 0 10-3 19-10 26l-22 21c-7 7-15 11-26 11-9 0-18-4-26-11l-186-186c-7-7-10-16-10-26 0-10 3-18 10-26l186-185c8-8 16-11 26-11 10 0 19 3 26 11l22 21c7 7 10 16 10 26 0 10-3 18-10 26l-84 83 201 0c10 0 18 4 24 11 6 7 9 16 9 26z"></path>
          </svg>
        </button>
  )

}
