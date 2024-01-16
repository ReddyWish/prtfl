import React from 'react';
import styles from './style.module.scss';
function Index({ text, className }) {
  return (
    <h1>
      <span className='sr-only'>{text}</span>
    </h1>
  );
}

export default Index;