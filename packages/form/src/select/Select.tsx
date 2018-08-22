/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
} from 'downshift';

import FieldInput from '../FieldInput';
import InputBase, {
  Props as InputProps,
} from '../input/StatelessInput';
import { DropdownBase, DropdownItem } from './Dropdown';
import { withContext, Context } from './context';
import { _SelectButton, _SelectButtonText } from './styled';

// @ts-ignore
interface Props<T> extends DownshiftProps<T> {
  children: React.ReactNode;
  label?: React.ReactNode;
  shouldRenderItem?: (item: T, value: string | null) => boolean;
}

const Input = (props: InputProps) => (
  <InputBase
    {...props}
    rightIcon={props.value ? props.rightIcon || null : null}
  />
);

const Button: React.SFC<{
  text?: string;
  children?: React.ReactNode;
}> = ({ text, children, ...props }) => (
  <_SelectButton {...props}>
    {text && <_SelectButtonText>{text}</_SelectButtonText>}
    {children}
  </_SelectButton>
);

Button.defaultProps = {
  text: undefined,
  children: null,
};

const Dropdown = withContext(
  DropdownBase,
  ({ getMenuProps, isOpen, inputValue, shouldRenderItem }) => ({
    getMenuProps,
    isOpen,
    inputValue,
    shouldRenderItem,
  }),
);

class Select<T> extends React.Component<Props<T>> {
  static defaultProps = {
    shouldRenderItem: () => true,
  };

  static Input = withContext(
    Input,
    ({ getInputProps, clearSelection }) => ({
      ...getInputProps(),
      onRightIconClick: clearSelection,
    }),
  );

  static Dropdown: typeof Dropdown = Dropdown;

  static DropdownItem: typeof DropdownItem = DropdownItem;

  static Context: typeof Context = Context;

  static Button: typeof Button = withContext(
    Button,
    ({ getToggleButtonProps }) => getToggleButtonProps(),
  );

  render() {
    const { children, label, ...props } = this.props;
    return (
      <Downshift {...props}>
        {(options: ControllerStateAndHelpers<T>) => (
          <div>
            <Context.Provider value={{ ...props, ...options }}>
              <FieldInput
                label={label}
                labelProps={options.getLabelProps()}
              >
                {children}
              </FieldInput>
            </Context.Provider>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;
