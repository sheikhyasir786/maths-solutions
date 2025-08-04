import React from 'react'
import { useParams } from 'react-router-dom';
import ExerciseOne from './ExerciseOne';
import ExerciseTwo from './ExerciseTwo';
import ExperciseThree from './ExerciseThree';
import Header from '../../../Header';
import ExerciseFour from './ExerciseFour';

function ChapterOneIndex() {
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
        <ExperciseThree />
      </div>
    )
  }
   else if(id === '1.4'){
    content = (
      <div>
        <ExerciseFour />
      </div>
    )
  }
  else{
    content = (
      <div>
        
      </div>
    )
  }

  return (
    <section>
       <Header />
       <div>{content}</div>
    </section>
    
  )
}

export default ChapterOneIndex;