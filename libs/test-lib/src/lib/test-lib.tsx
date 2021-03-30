import React from 'react';

import './test-lib.module.css';
import { Theme } from 'node_modules/baseui/theme';
const theme = {} as Theme;

/* eslint-disable-next-line */
export interface TestLibProps {}

export function TestLib(props: TestLibProps) {
  return (
    <div>
      <h1>Welcome to test-lib!</h1>
      <pre>{ JSON.stringify(theme, null, 2)}</pre>
    </div>
  );
}

export default TestLib;
