export interface Theme {
  // Font families
  fontNormal: string
  fontMono: string

  // Theme colors
  colorPrim: string
  colorSecon: string
  colorDarkishSecon: string
  colorDarkSecon: string
  colorTertLight: string
  colorTertDark: string

  // Text colors
  colorTextRegular: string
  colorTextLight: string

  // Grayscale
  colorGrayscale0: string
  colorGrayscale1: string
  colorGrayscale2: string
  colorGrayscale3: string
  colorGrayscale4: string
  colorGrayscale5: string
  colorGrayscale6: string
  colorGrayscale7: string
  colorGrayscale8: string
  colorGrayscale9: string
  colorGrayscaleA: string
  colorGrayscaleB: string
  colorGrayscaleC: string
  colorGrayscaleD: string
  colorGrayscaleE: string
  colorGrayscaleF: string

  // Status colors
  colorStatusSuccess: string
  colorStatusInfo: string
  colorStatusWarning: string
  colorStatusError: string

  // Rainbow
  colorRainbowRed: string
  colorRainbowOrange: string
  colorRainbowYellow: string
  colorRainbowLime: string
  colorRainbowGreen: string
  colorRainbowMint: string
  colorRainbowTeal: string
  colorRainbowSky: string
  colorRainbowBlue: string
  colorRainbowPurple: string
  colorRainbowMagenta: string
  colorRainbowHotpink: string
}

declare const theme: Theme
export default theme
