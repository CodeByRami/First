import * as React from 'react';
import styles from '../components/FirstProgram.module.scss';

const Mycal: React.FC = () => {
  const [currentValue, setCurrentValue] = React.useState<string>('');       // current number being typed
  const [previousValue, setPreviousValue] = React.useState<string>('');     // stored number before operator
  const [operator, setOperator] = React.useState<string | null>(null);      // operator (+, -, *, /)
  const [expression, setExpression] = React.useState<string>('');           // expression shown while typing
  const [result, setResult] = React.useState<string>('');                   // final result after "="

  const handleNumberInput = (value: string) => {
    const newValue = currentValue + value;
    setCurrentValue(newValue);
    setExpression(expression + value); // keep showing the expression
    setResult(''); // clear any previous result
  };

  const handleOperator = (op: string) => {
    if (currentValue !== '') {
      setPreviousValue(currentValue);
      setCurrentValue('');
    }
    setOperator(op);
    setExpression(expression + ' ' + op + ' ');
    setResult('');
  };

  const handleEquals = () => {
    if (operator && previousValue !== '' && currentValue !== '') {
      const num1 = Number(previousValue);
      const num2 = Number(currentValue);
      let calcResult = 0;

      switch (operator) {
        case '+': calcResult = num1 + num2; break;
        case '-': calcResult = num1 - num2; break;
        case '*': calcResult = num1 * num2; break;
        case '/': calcResult = num2 !== 0 ? num1 / num2 : NaN; break;
      }

      setResult(calcResult.toString());   // show only result
      setExpression('');                  // clear expression
      setCurrentValue(calcResult.toString());
      setPreviousValue('');
      setOperator(null);
    }
  };

  const handleClear = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperator(null);
    setExpression('');
    setResult('');
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.screen}>
        {result || expression || '0'}
      </div>

      <div className={styles.buttonRow}>
        <button onClick={() => handleNumberInput('1')}>1</button>
        <button onClick={() => handleNumberInput('2')}>2</button>
        <button onClick={() => handleNumberInput('3')}>3</button>
        <button onClick={() => handleOperator('+')}>+</button>
      </div>

      <div className={styles.buttonRow}>
        <button onClick={() => handleNumberInput('4')}>4</button>
        <button onClick={() => handleNumberInput('5')}>5</button>
        <button onClick={() => handleNumberInput('6')}>6</button>
        <button onClick={() => handleOperator('-')}>-</button>
      </div>

      <div className={styles.buttonRow}>
        <button onClick={() => handleNumberInput('7')}>7</button>
        <button onClick={() => handleNumberInput('8')}>8</button>
        <button onClick={() => handleNumberInput('9')}>9</button>
        <button onClick={() => handleOperator('*')}>*</button>
      </div>

      <div className={styles.buttonRow}>
        <button onClick={() => handleNumberInput('0')}>0</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperator('/')}>/</button>
      </div>
    </div>
  );
};

export default Mycal;
