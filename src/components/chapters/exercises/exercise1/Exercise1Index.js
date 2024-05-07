import React from 'react'
import { useParams } from 'react-router-dom';
import ExerciseOne from './ExerciseOne';
import ExerciseTwo from './ExerciseTwo';
import Header from '../../../Header';

function Exercise1Index() {
  const { id } = useParams();
  let content;
  if(id === '1.1'){
    content = (
      <div>
        <ExerciseOne />
      </div>
    )
  }
  else if(id === '1.2'){
    content = (
      <div>
        <ExerciseTwo />
      </div>
    )
  }
  else if(id === '1.3'){
    content = (
      <div>
       <Header />
      </div>
    )
  }
  else{
    content = (
      <div>
       Exercise Four
      </div>
    )
  }

  return (
    <div>{content}</div>
  )
}

export default Exercise1Index;