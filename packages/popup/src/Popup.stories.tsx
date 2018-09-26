import React from 'react';
import { storiesOf } from '@storybook/react';
import { Popup } from '.';

storiesOf('Components | Popup', module).add('Basic', () => (
  <Popup popup={<Popup.Content>Popup !</Popup.Content>}>
    <button>click</button>
  </Popup>
));
