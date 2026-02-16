import * as React from 'react';
import styles from './FirstProgram.module.scss';
import type { IFirstProgramProps } from './IFirstProgramProps';
import Mycal from '../FirstApp/Mycal';

const FirstProgram: React.FC<IFirstProgramProps> = (props) => {
  return (
    <div className={styles.firstProgram}>
      <h1>Welcome to My First SPFx Program</h1>
      <Mycal />
    </div>
  );
};

export default FirstProgram;

