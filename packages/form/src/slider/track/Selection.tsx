import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import { borderRightRadius, stateColor } from '@vital-ui/react-utils';

import constants from './constants';
import { Size } from '../types';

const Root = styled('div').attrs<Props>(({ width }) => ({
  style: { width },
}))<Props>`
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  left: 0;
  height: ${props => constants[props.size!].trackHeight};
  top: 0;
  pointer-events: none;
  background-color: ${(props: any) =>
    stateColor(
      props,
      props.disabled
        ? props.theme.disabledBackground
        : props.theme.background,
    )};
  ${borderRightRadius(0)};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  size?: Size;
  disabled?: boolean;
  width: number;
  /** state alarm */
  alarm?: boolean;
  /** state warning */
  warning?: boolean;
  /** state success */
  success?: boolean;
};

const Selection: React.SFC<Props> = ({
  size = 'medium' as Size,
  disabled = false,
  width,
  alarm = false,
  warning = false,
  success = false,
}) => (
  <Root
    size={size}
    disabled={disabled}
    width={width}
    alarm={alarm}
    warning={warning}
    success={success}
  />
);

Selection.defaultProps = {
  size: 'medium',
  disabled: false,
  alarm: false,
  warning: false,
  success: false,
};

export default Selection;
