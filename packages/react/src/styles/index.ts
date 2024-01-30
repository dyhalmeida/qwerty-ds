import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@qwerty-ui/tokens'

const stitches = createStitches({
  /** themeMap: Mapeia propriedades css para algum tipo de token */
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  /** theme: define as variáveis que serão utilizadas dentro do tema da aplicação */
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches
