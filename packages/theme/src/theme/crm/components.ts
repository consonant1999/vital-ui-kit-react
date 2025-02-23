import { rgba, lighten } from 'polished';
import { css } from 'styled-components';

// component theme factory
export default <T extends any>(theme: T) => ({
  borderColor: theme.colors.secondary300,
  labelColor: theme.colors.secondary600,
  border: `1px solid ${theme.colors.secondary300}`,
  shadowColor: rgba(theme.colors.primary, 0.2),
  avatar: {
    badgeBg: theme.colors.alarm,
    xsmall: {
      size: '16px',
      borderRadius: '2px',
      badgeHeight: '5px',
    },
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
  },
  badge: {
    bg: theme.colors.info,
    inverseBg: theme.colors.white,
    color: theme.colors.white,
    inverseColor: theme.colors.info,
  },
  button: {
    buttonStyle: undefined,
    natureColor: {
      default: theme.colors.secondary700,
      primary: theme.colors.primary,
      success: theme.colors.success,
      info: theme.colors.info,
      alarm: theme.colors.alarm,
      warning: theme.colors.warning,
    },
    default: {
      bg: theme.colors.secondary100,
      hoverBg: theme.colors.secondary300,
      activeBg: theme.colors.secondary400,
    },
    subtle: {
      bg: theme.colors.secondary400,
      hoverBg: theme.colors.secondary300,
      color: theme.colors.secondary700,
    },
    flat: {
      bg: theme.colors.secondary200,
      color: theme.colors.white,
      hoverBg: theme.colors.secondary300,
      activeBg: theme.colors.secondary,
      activeBorderColor: theme.colors.secondary,
    },
    light: {
      bg: theme.colors.white,
      hoverBg: theme.colors.secondary200,
      activeBg: theme.colors.secondary200,
      borderColor: theme.colors.secondary400,
    },
    link: {
      bg: 'transparent',
      color: theme.colors.primary,
      hoverBg: 'transparent',
      darkColor: theme.colors.secondary700,
      hoverColor: theme.colors.primary900,
      hoverDarkColor: lighten(0.1, theme.colors.secondary700),
    },
    disabled: {
      color: '#93a8ce',
      borderColor: '#eaeff8',
      bg: theme.colors.secondary100,
    },
    xsmall: {
      fontSize: '0.8rem',
      borderRadius: '2px',
      padding: 'calc(0.2rem - 1px) 0.533rem',
      height: '1.2rem',
    },
    small: {
      fontSize: '0.866rem',
      borderRadius: '3px',
      padding: 'calc(0.4rem - 1px) 0.8rem',
      height: '1.666rem',
    },
    medium: {
      fontSize: '16px',
      borderRadius: '100px',
      padding: '8px 16px',
      height: '32px',
    },
    large: {
      fontSize: '1.2rem',
      borderRadius: '5px',
      padding: 'calc(0.666rem - 1px) 1.2rem',
      height: '2.532rem',
    },
    xlarge: {
      fontSize: '1.4rem',
      borderRadius: '6px',
      padding: 'calc(0.8rem - 1px) 1.333rem',
      height: '3rem',
    },
  },
  card: {
    bg: theme.colors.white,
    color: theme.colors.secondary700,
    button: {
      bg: theme.colors.white,
      color: (isPrimary: boolean) =>
        isPrimary ? theme.colors.primary : theme.colors.secondary700,
      hover: theme.colors.secondary300,
    },
  },
  checkbox: {
    boxShadow: `0 0 0 2px ${rgba(theme.colors.primary, 0.2)}`,
    borderColor: theme.colors.secondary400,
    checkedBorderColor: theme.colors.primary700,
    checkedBg: theme.colors.primary700,
    size: '1.066rem',
    roundBg: theme.colors.white,
    bg: theme.colors.white,
    label: {
      color: theme.colors.secondary700,
    },
    icon: {
      size: '1rem',
      color: theme.colors.white,
      roundColor: theme.colors.white,
      disabledColor: theme.colors.secondary300,
    },
  },
  switch: {
    checked: theme.colors.primary,
    disabled: theme.colors.secondary200,
    shadow: '0 0 0 3px rgba(255, 132, 0, 0.3)',
    buttonSize: '18px',
    label: {
      checkedColor: theme.colors.white,
      bg: theme.colors.secondary200,
      shadowColor: theme.colors.secondary400,
      color: theme.colors.secondary500,
    },
    icon: theme.colors.secondary400,
  },
  form: {
    bg: theme.colors.white,
    disabledBg: theme.colors.secondary200,
    color: theme.colors.secondary700,
    borderColor: theme.colors.secondary400,
    hoverBorderColor: theme.colors.secondary600,
    focusBorderColor: theme.colors.primary500,
    inputPadding: '7px 12px',
    inputStyle: undefined,
    placeholder: {
      color: theme.colors.secondary,
    },
    addon: {
      bg: theme.colors.secondary200,
    },
    disabled: {
      bg: theme.colors.secondary200,
      alarmBg: '#ffd0b8',
    },
    hint: {
      color: theme.colors.secondary,
    },
    inputIcon: {
      color: '#456296',
      leftColor: '#C3D1EB',
      rightHoverColor: theme.colors.secondary400,
    },
  },
  list: {
    link: {
      bg: theme.colors.secondary300,
      color: theme.colors.primary400,
    },
    item: {
      bg: '#f7f9fd',
    },
  },
  pill: {
    bg: (selected: boolean) => (selected ? '#2A4880' : 'transparent'),
    color: (selected: boolean) =>
      selected ? theme.colors.white : '#456296',
    hover: {
      bg: '#d8e2f5',
      color: '#456296',
    },
    active: {
      bg: '#c3d1eb',
      color: '#456296',
    },
  },
  radio: {
    color: (disabled: boolean) =>
      disabled ? theme.colors.secondary : theme.colors.secondary700,
    hoverBorderColor: theme.colors.primary,
    size: '16px',
    checkedSize: '6px',
    checkedBg: theme.colors.primary700,
    checkedAfter: theme.colors.white,
    bg: theme.colors.white,
  },
  select: {
    tag: {
      bg: theme.colors.secondary700,
      hoverBg: theme.colors.secondary400,
      borderRadius: '100px',
      padding: '4px 8px 4px 10px',
    },
    item: {
      color: theme.colors.secondary600,
      hoverBg: theme.colors.secondary200,
    },
    button: {
      color: theme.colors.secondary700,
    },
  },
  table: {
    color: theme.colors.secondary700,
    hoverBg: theme.colors.secondary300,
    striped: {
      odd: theme.colors.secondary100,
    },
  },
  tab: {
    bg: `linear-gradient(to left, ${theme.colors.info}, ${
      theme.colors.primary
    })`,
    panel: {
      bg: theme.colors.white,
      color: theme.colors.secondary600,
    },
    item: {
      color: theme.colors.white,
      bg: rgba(255, 255, 255, 0.3),
      current: {
        color: theme.colors.secondary700,
        bg: theme.colors.white,
      },
    },
  },
  tooltip: {
    bg: '#63636F',
    color: theme.colors.white,
    maxWidth: '330px',
    css: css`
      padding: 6px 12px;
      font-size: 0.928rem;
      box-shadow: 0 2px 10px 0 rgba(35, 35, 39, 0.3),
        0 1px 20px 0 rgba(35, 35, 39, 0.15);
    `,
  },
  track: {
    borderColor: theme.colors.secondary,
    bg: theme.colors.secondary300,
    alarmbg: '#FFD0B8',
  },
  selection: {
    background: theme.colors.secondary,
    disabledBackground: '#95ABD3',
  },
});
