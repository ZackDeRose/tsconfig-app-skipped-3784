import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import { TestLib } from '@tsconfig-app-skipped-3784/test-lib';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to test-app!</h1>
      </header>
      <main>
        <TestLib></TestLib>
      </main>
    </div>
  );
}

export default App;
