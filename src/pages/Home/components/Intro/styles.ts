import styled, { DefaultTheme } from 'styled-components'

export interface BackgroundColor {
  $background: keyof Pick<
    DefaultTheme,
    'yellow' | 'yellow-dark' | 'purple' | 'base-text'
  >
}

export const IconContainer = styled.div<BackgroundColor>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme[`${props.$background}`]};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  filter: blur(80px);
  background-image: url('intro-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -1;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const IconWithDescriptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  & > span {
    font-size: 1rem;
  }
`

export const IconWithDescriptionContainter = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.25rem;
  grid-template-columns: max-content 1fr;
  column-gap: 2.5rem;
`

export const HeroImage = styled.section`
  width: 29.75rem;
  height: 22.5rem;

  background-image: url('intro-image.png');
  background-size: contain;
  background-repeat: no-repeat;
`

export const IntroContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;

  & > section {
    margin-inline: auto;
  }
`
