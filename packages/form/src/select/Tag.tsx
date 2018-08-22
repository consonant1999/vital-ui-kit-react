/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Icon from '@vital-ui/react-icon';

const Li = styled.li`
  color: #ffffff;
  border-color: transparent;
  background-color: #0e86fe;
  border-radius: 4px;
  line-height: 1;
  margin: 4px 0 4px 5px;
  padding: 0.1em 0.15em 0.1em 0.4em;
  font-weight: 400;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: #419ffe;
  }
`;

const Content = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  onCloseClick?: () => void;
};

export const Tag: React.SFC<Props> = ({
  children,
  onClick,
  onCloseClick,
}) => (
  <Li onClick={onClick}>
    <Content>{children}</Content>
    {onCloseClick && (
      <Icon
        onClick={onCloseClick}
        name="close"
        color="#fff"
        size={13}
      />
    )}
  </Li>
);

Tag.defaultProps = {
  onClick: undefined,
  onCloseClick: undefined,
};

export default Tag;
