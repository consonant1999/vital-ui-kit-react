/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import cn from 'classnames';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';

import { AvatarBadge } from './AvatarBadge';
import { BuiltinTheme, AvatarSize } from './constants';
import { defaultAvatarSets } from './default-avatar';

type SizeStyleProps = {
  size: AvatarSize | number;
  circle?: boolean;
  builtinTheme?: BuiltinTheme;
};

const sizeStyle = css<SizeStyleProps>`
  width: ${({ size, theme, builtinTheme }) => {
    if (typeof size === 'number') {
      return size + 'px';
    }
    return getBuiltInOrTheme(builtinTheme, theme)[size].size;
  }};
  height: ${({ size, theme, builtinTheme }) => {
    if (typeof size === 'number') {
      return size + 'px';
    }
    return getBuiltInOrTheme(builtinTheme, theme)[size].size;
  }};
  border-radius: ${({ size, circle, theme, builtinTheme }) =>
    circle
      ? '50%'
      : getBuiltInOrTheme(builtinTheme, theme)[size].borderRadius};
`;

const Root = styled<BoxProps, 'div'>('div')`
  position: relative;
  display: inline-block;
  ${superBoxStyle};
`;

const Image = styled<SizeStyleProps, 'img'>('img')`
  background-color: ${({ theme }) => theme.grey200};
  box-sizing: border-box;
  ${sizeStyle};
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  ${sizeStyle};
`;
ImageWrapper.defaultProps = {
  theme: defaultTheme,
};
Image.defaultProps = {
  theme: defaultTheme,
};

type Gender = 'male' | 'female';

export interface AvatarProps extends BoxProps {
  /** Default sets of avatar */
  bulltinAvatars?: typeof defaultAvatarSets;
  /** Each Avatar size and borderRadius if circle  */
  builtinTheme?: BuiltinTheme;
  /** Image src html attr of the avatar. */
  src?: string;
  /** @deprecated Circle style. */
  round?: boolean;
  /** Circle style. */
  circle?: boolean;
  /** Avatar size, default is `medium`, `xlarge`, `large`, `medium`, `small`, `xsmall` */
  size?: AvatarSize | number;
  /** Value for the right top badge */
  badge?: React.ReactNode;
  gender?: Gender;
  outline?: boolean;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  badgeStyle?: React.CSSProperties;
  /** Default is `vital__avatar` */
  containerClassName?: string;
  /** Default is `vital__avatar-image` */
  imageClassName?: string;
  /** Default is `vital__avatar-badge` */
  badgeClassName?: string;
  theme?: typeof defaultTheme;
}

/**
 * @render react
 * @name Avatar
 * @description Vital UI Kit Avatar Component
 * @example
 * <Avatar
 *  badge="99+"
 *  size="large"
 *  gender="male"
 *  round
 * />
 */
class AvatarBase extends React.Component<AvatarProps> {
  static defaultProps = {
    bulltinAvatars: defaultAvatarSets,
    circle: false,
    size: 'medium' as AvatarSize,
    outline: false,
  };

  static Badge: typeof AvatarBadge = AvatarBadge;

  render() {
    const {
      src,
      round,
      circle,
      size = 'medium',
      badge,
      outline,
      gender,
      style,
      imageStyle,
      badgeStyle,
      containerClassName,
      imageClassName,
      badgeClassName,
      ...props
    } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__avatar', containerClassName)}
        {...props}
      >
        {src ? (
          <Image
            className={cn('vital__avatar-image', imageClassName)}
            src={src}
            size={size}
            circle={circle}
            style={imageStyle}
          />
        ) : (
          <ImageWrapper
            className={cn('vital__avatar-image-wrapper')}
            size={size}
            circle={circle}
          >
            {this.renderDefaultAvatar()}
          </ImageWrapper>
        )}
        {this.renderBadge()}
      </Root>
    );
  }

  private renderDefaultAvatar = (): JSX.Element => {
    const {
      outline,
      gender,
      bulltinAvatars,
      size,
      builtinTheme,
      theme = defaultTheme,
    } = this.props;
    const sizeTheme = getBuiltInOrTheme(builtinTheme, theme);
    const defaultAvatarRenderer = bulltinAvatars || defaultAvatarSets;
    const avatarProps = {
      width: sizeTheme![size!].size,
      height: sizeTheme![size!].size,
    };
    if (outline && gender) {
      if (gender === 'female') {
        return defaultAvatarRenderer.femaleOutline(avatarProps);
      }
      if (gender === 'male') {
        return defaultAvatarRenderer.maleOutLine(avatarProps);
      }
      return defaultAvatarRenderer.outline(avatarProps);
    }
    if (!outline && gender) {
      if (gender === 'female') {
        return defaultAvatarRenderer.female(avatarProps);
      }
      if (gender === 'male') {
        return defaultAvatarRenderer.male(avatarProps);
      }
      return defaultAvatarRenderer.default(avatarProps);
    }
    if (outline && !gender) {
      return defaultAvatarRenderer.outline(avatarProps);
    }
    return defaultAvatarRenderer.default(avatarProps);
  };

  private renderBadge = () => {
    const {
      badge,
      size,
      round,
      circle = round,
      badgeStyle,
      badgeClassName,
    } = this.props;
    if (!badge) {
      return null;
    }
    if (typeof badge === 'string' || typeof badge === 'number') {
      // FIXME: We skip the size calc since AvatarBadge now doesn't support number;
      if (typeof size === 'number') {
        return badge;
      }
      return (
        <AvatarBadge
          className={cn('vital__avatar-badge', badgeClassName)}
          label={badge}
          size={size}
          circle={circle}
          style={badgeStyle}
        />
      );
    }
    return badge;
  };
}

export const Avatar = withTheme(AvatarBase);

function getBuiltInOrTheme(
  builtin: BuiltinTheme | undefined,
  theme: typeof defaultTheme,
) {
  return builtin ? builtin : theme.avatar || constants;
}

const constants = {
  small: {
    size: '24px',
    borderRadius: '2px',
    badgeHeight: '7px',
  },
  medium: {
    size: '32px',
    borderRadius: '3px',
    badgeHeight: '9px',
  },
  large: {
    size: '48px',
    borderRadius: '4px',
    badgeHeight: '13px',
  },
  xlarge: {
    size: '64px',
    borderRadius: '4px',
    badgeHeight: '17px',
  },
};
