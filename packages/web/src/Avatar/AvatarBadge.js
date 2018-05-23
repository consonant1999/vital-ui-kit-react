// @flow

import React from 'react';
import styled, { css } from 'styled-components';

import { trunTo } from '../utils/math';
import { badgeSizes } from './constants';

const badgeStyle = ({ size, round, label }) => {
  if (size === 'xlarge') {
    return css`
      padding: 0 5px;
      border-radius: 0.75rem;
      font-size: 0.725rem;
      left: ${round ? '70%' : 'auto'};
      right: ${round ? 'auto' : '-12%'};
      top: ${round ? 0 : `calc(${badgeSizes[size].height} / -2)`};
    `;
  }
  // circle badge style
  return css`
    padding: 0;
    border-radius: 50%;
    font-size: 0;
    width: ${badgeSizes[size].height};
    height: ${badgeSizes[size].height};
    right: calc(${badgeSizes[size].height} / -2);
    top: ${round ? 0 : `calc(${badgeSizes[size].height} / -2)`};
    left: ${round ? '70%' : 'auto'};
    right: ${round ? 'auto' : badgeSizes[size].height / -2};

    &:before {
      content: '';
      position: absolute;
      top: calc(50% - (3px / 2));
      left: calc(50% - (3px / 2));
      background: ${label ? '#fff' : 'transparent'};
      border-radius: 50%;
      width: 3px;
      height: 3px;
    }
  `;
};

const Root = styled.span`
  position: absolute;
  background-color: #eb5000;
  color: #fff;
  vertical-align: middle;
  height: ${({ size }) => badgeSizes[size].height};
  line-height: ${({ size }) => badgeSizes[size].height};
  ${props => badgeStyle(props)};
`;

type Props = {
  label: string,
  size?: string,
  round?: boolean
};

const AvatarBadge = ({ label, size, round }: Props) => (
  <Root label={label} size={size} round={round}>
    {size === 'xlarge' ? trunTo(label) : null}
  </Root>
);

AvatarBadge.defaultProps = {
  round: false,
  size: 'medium'
};

export default AvatarBadge;
