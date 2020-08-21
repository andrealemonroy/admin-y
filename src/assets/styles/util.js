import { css } from '@emotion/core'
import { rem } from 'polished'
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}
export const getFontSize = (size) => {
  const measure = `${size}px`
  const fontSize = css`
    font-size: ${measure};
    font-size: ${rem(measure)};
  `

  return fontSize
}
