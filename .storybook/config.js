import { injectGlobal } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import * as React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import '../packages/web/src/global.css';
import { ThemeProvider } from '../packages/theme/dist';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// tslint:disable-next-line
injectGlobal`
  #root {
    padding: 20px;
  }
`;

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  styles: stylesheet => ({
    ...stylesheet,
    button: {
      ...stylesheet.button,
      topRight: {
        ...stylesheet.button.topRight,
        top: 'unset',
        bottom: '0',
      },
    },
  }),
});

setOptions({
  name: 'Vital UI Kit React',
  url: '#',
  addonPanelInRight: false,
  sortStoriesByKind: true,
  sidebarAnimations: false,
});

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.jsx$/);
const req = require.context('../stories', true, /.stories.tsx$/);
configure(loadStories, module);
