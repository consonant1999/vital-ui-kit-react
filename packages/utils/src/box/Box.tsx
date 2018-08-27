import {
  space,
  width,
  fontSize,
  color,
  display,
  height,
  maxWidth,
  maxHeight,
  minHeight,
  size,
  position,
  zIndex,
  top,
  right,
  left,
  bottom,
  boxShadow,
  backgroundImage,
  backgroundPosition,
  background,
  backgroundRepeat,
  backgroundSize,
  opacity,
  borders,
  borderColor,
  borderRadius,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  fontFamily,
  BackgroundImageProps,
  BackgroundPositionProps,
  BackgroundProps,
  BackgroundRepeatProps,
  BackgroundSizeProps,
  BorderColorProps,
  BorderRadiusProps,
  BordersProps,
  BottomProps,
  BoxShadowProps,
  ColorProps,
  DisplayProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  HeightProps,
  LeftProps,
  LetterSpacingProps,
  LineHeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  OpacityProps,
  PositionProps,
  RightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TopProps,
  WidthProps,
  ZIndexProps,
} from 'styled-system';
import styled from 'styled-components';
import { css, CssProps } from '../style';

export interface BoxProps
  extends BackgroundImageProps,
    BackgroundPositionProps,
    BackgroundProps,
    BackgroundRepeatProps,
    BackgroundSizeProps,
    BorderColorProps,
    BorderRadiusProps,
    BordersProps,
    BottomProps,
    BoxShadowProps,
    ColorProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    HeightProps,
    LeftProps,
    LetterSpacingProps,
    LineHeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    OpacityProps,
    PositionProps,
    RightProps,
    SizeProps,
    SpaceProps,
    TextAlignProps,
    TopProps,
    WidthProps,
    ZIndexProps,
    CssProps {}

export const Box = styled.div<BoxProps>`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${height};
  ${display};
  ${maxWidth};
  ${maxHeight};
  ${minHeight};
  ${size};
  ${position};
  ${zIndex};
  ${top};
  ${right};
  ${left};
  ${bottom};
  ${boxShadow};
  ${backgroundImage};
  ${backgroundPosition};
  ${background};
  ${backgroundRepeat};
  ${backgroundSize};
  ${opacity};
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${textAlign};
  ${lineHeight};
  ${fontWeight};
  ${letterSpacing};
  ${fontFamily};
  ${css};
`;

Box.displayName = 'Vital_Box';
