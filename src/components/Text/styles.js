import styled from '@emotion/styled'
import { device } from '../../assets/styles/util'
export const TextWrapper = styled('span')`
  color: ${(props) =>
    props.success
      ? '#00E3C2'
      : props.blue
        ? '#0047BA'
        : props.darkGrey
          ? '#686868'
          : props.white
            ? 'white'
            : 'black'};
  padding: ${(props) => (props.plittle ? '0 1em' : '0em')};
  /* margin-bottom: ${(props) => props.margin}; */
  @media ${device.tabletM} {
    font-size: ${(props) =>
    props.large ? '1.5rem' : props.little ? '0.6rem' : '0.8rem'};
  }
  @media ${device.mobileL} {
    font-size: ${(props) =>
    props.large ? '1.2rem' : props.little ? '0.6rem' : '0.8rem'};
  }
  text-align: ${(props) =>
    props.center ? 'center' : props.left ? 'left' : 'right'};
  width: 100%;
  /* margin-bottom: 10px; */
  @media ${device.desktop} {
    font-size: ${(props) =>
    props.medium ? '1rem' : props.little ? '0.6rem' : '1rem'};
  }
  font-weight: ${(props) =>
    props.bold ? '900' : props.semibold ? '600' : '400'};
`
