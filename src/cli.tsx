#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import { render } from 'ink';
import App from './app.js';

const cli = meow(
  `
	Usage
	  $ ausg

	Options
		--name  Your name
    --member AUSG 기수

	Examples
	  $ ausg --name=김태강
	  AUSG CLI에 오신 것을 환영합니다, 김태강님!
    ...
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
      member: {
        type: 'string',
      },
    },
  }
);

render(<App name={cli.flags.name} member={cli.flags.member} />);
