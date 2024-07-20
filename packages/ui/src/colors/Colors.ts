import exp from "node:constants";

export type ColorType = {
  name: string
  color: string
}

export type ColorsType = {
  readonly [key: string]: ColorType
}

export const Colors = {
  PP80: {
    name: '--PP80',
    color: '#6953C8',
  },
  PP70: {
    name: '--PP70',
    color: '#8775D3'
  },
  PP60: {
    name: '--PP60',
    color: '#A598DE'
  },
  PP50: {
    name: '--PP50',
    color: '#C3BAE9'
  },
  PP40: {
    name: '--PP40',
    color: '#E1DDF4'
  },
  PP30: {
    name: '--PP30',
    color: '#F0EEFA'
  },
  PP20: {
    name: '--PP20',
    color: '#F4F4F9'
  },

  GY80: {
    name: '--GY80',
    color: '#303030'
  },
  GY70: {
    name: '--GY70',
    color: '#474747'
  },
  GY60: {
    name: '--GY60',
    color: '#595959'
  },
  GY40: {
    name: '--GY40',
    color: '#BDBDBD'
  },
  GY30: {
    name: '--GY30',
    color: '#E7E7E7'
  },
  GY20: {
    name: '--GY20',
    color: '#F4F4F9'
  },
  GY10: {
    name: '--GY10',
    color: '#FAFAFA'
  },

  WH100: {
    name: '--WH100',
    color: '#FFFFFF'
  },

  MI60: {
    name: '--MI60',
    color: '#A0F5CE'
  },
  MI50: {
    name: '--MI50',
    color: '#BAFFDF'
  },

  SB60: {
    name: '--SB60',
    color: '#98EBF6'
  },

  YG60: {
    name: '--YG60',
    color: '#A8D22F'
  },

  OR80: {
    name: '--OR80',
    color: '#F29424'
  },

  RE80: {
    name: '--RE80',
    color: '#FF5D5D'
  },

  TQ80: {
    name: '--TQ80',
    color: '#00B3DA'
  },
} as const

export const TextColors = {
  DEFAULT: {
    name: '--text-default',
    color: Colors.GY80.color,
  },
  PRIORITY_HIGH: {
    name: '--text-high',
    color: Colors.PP80.color,
  },
  PRIORITY_MID: {
    name: '--text-priority-mid',
    color: Colors.GY60.color,
  },
  PRIORITY_LOW: {
    name: '--text-priority-low',
    color: Colors.GY40.color,
  },
  INVERT: {
    name: '--text-invert',
    color: Colors.WH100.color,
  },
  ERROR: {
    name: '--text-error',
    color: Colors.RE80.color,
  },
}

export const BorderColors = {
  DEFAULT: {
    name: '--border-default',
    color: Colors.GY30.color,
  },
  FOCUS: {
    name: '--border-focus',
    color: Colors.PP60.color,
  },
  VALIDATION_ERROR: {
    name: '--border-validation-error',
    color: Colors.RE80.color,
  },
  CHECKBOX: {
    name: '--border-checkbox',
    color: Colors.GY40.color,
  },
  RADIO_BTN: {
    name: '--border-radio-btn',
    color: Colors.GY40.color,
  }
} as const

export const DividerColors = {
  DEFAULT: {
    name: '--divider-default',
    color: Colors.GY30.color,
  }
} as const

export const IconColors = {
  DEFAULT: {
    name: '--icon-default',
    color: Colors.GY60.color,
  },
  PRIORITY_HIGH: {
    name: '--icon-priority-high',
    color: Colors.PP80.color,
  },
  PRIORITY_LOW: {
    name: '--icon-priority-low',
    color: Colors.GY40.color,
  },
} as const

export const makeStyles = (colors: ColorsType) => {
  return Object.keys(colors).reduce((acc: Record<string, string>, key) => {
    const color = colors[key]!
    acc[color.name] = color.color
    return acc
  }, {})
}

export const colorSet = [Colors, DividerColors, BorderColors, IconColors, TextColors]

export const allColorStyles = colorSet.reduce((acc, cur) => {
  const style = makeStyles(cur)
  return {
    ...acc,
    ...style
  }
}, {})
