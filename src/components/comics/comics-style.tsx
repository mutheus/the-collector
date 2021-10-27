import styled from 'styled-components/macro'
import Slider from 'react-slick'

export const SliderWrapper = styled(Slider)`
  overflow: hidden;
  margin-top: 4em;
  margin-bottom: 2em;

  div {
    outline: none;
  }

  .slick-prev {
    z-index: 10;
    position: absolute;
    width: 14vw;
    min-height: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  .slick-active.slick-current {
    transform: rotate(-10deg);
    transition: all 1s ease-in;

    > div {
      transform: translateY(15%);
    }

    img {
      width: 70%;
      max-width: 400px;
      border: 3px solid #070201;
    }
  }

  .slick-active.slick-current + div + div {
    transform: rotate(10deg);
    transition: all 1s ease-in;

    > div {
      transform: translateY(15%);
    }

    img {
      width: 70%;
      max-width: 400px;
      border: 3px solid #070201;
    }
  }

  .slick-active.slick-current + div {
    cursor: pointer;

    h1 {
      display: initial;
    }

    div:last-child {
      display: flex;
    }
  }
`

export const Image = styled.img`
  border: 4px solid #070201;
`

export const Comic = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  img {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }

  h1 {
    display: none;
  }

  > div:last-child {
    display: none;
  }
`

export const NextBtnWrapper = styled.button`
  position: absolute;
  width: 14vw;
  min-height: 100%;
  right: 0;
  top: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`

export const Title = styled.h1`
  color: #070201;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`

export const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 14%;
  margin-top: 2em;

  hr {
    height: 3px;
    border: none;
    background-color: #070201;
    width: 100%;
  }
`
