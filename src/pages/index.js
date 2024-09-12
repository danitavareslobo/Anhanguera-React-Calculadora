import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h1>Calculadora</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles['input-group']}>
          <label htmlFor="num1"
          className={styles.label}>Número 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles['input-group']}>
          <label htmlFor="num2"
          className={styles.label}>Número 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Calcular</button>
      </form>
      {result !== null && (
        <div className={styles.result}>
          <h2>Resultado: {result}</h2>
        </div>
      )}
    </div>
  );
}
