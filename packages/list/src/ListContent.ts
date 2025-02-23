/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

const ListContent = styled.div<any>`
  display: block;
  font-size: 1.2rem;
  border-left: ${({ border, theme }) =>
    border ? theme.border : 'none'};
  border-right: ${({ border, theme }) =>
    border ? theme.border : 'none'};
  padding: 0.928rem 2.856rem 0.928rem 1.428rem;
  line-height: 1.866rem;
`;

ListContent.defaultProps = {
  theme: defaultTheme,
};

export default ListContent;
