/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Button } from '../../packages/button/src/Button';
import { Card } from '../../packages/card/src';
import { Modal } from '../../packages/modal/src/Modal';

const items = [
  {
    text: 'Dashboard',
    current: true,
  },
  { text: 'Projects', badge: '23' },
  { text: 'Issues', badge: '99+' },
  { text: 'Reports', badge: '6' },
  { text: 'User Center' },
];

storiesOf('Packages | Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Modal')(() => <ModalExample />),
    ),
  );

class ModalExample extends Component {
  state = { showModal: false };

  render() {
    return (
      <Fragment>
        <Button
          subtle
          onClick={() => this.setState({ showModal: true })}
        >
          Show
        </Button>
        <Modal show={this.state.showModal}>
          <Card width="300px" height="220px">
            <Card.Header badge="99+" title="This is a Card" />
            <Card.Content>Welcome to Vital UI Kit!</Card.Content>
            <Card.Footer>
              <Card.FooterButton
                onClick={() => this.setState({ showModal: false })}
              >
                Cancel
              </Card.FooterButton>
              <Card.FooterButton
                primary
                onClick={() => this.setState({ showModal: false })}
              >
                Confirm
              </Card.FooterButton>
            </Card.Footer>
          </Card>
        </Modal>
      </Fragment>
    );
  }
}
