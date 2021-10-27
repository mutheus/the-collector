import styled from 'styled-components/macro'

export const ComicContainer = styled.div`
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  position: relative;
  padding: 2em;
  max-width: 280px;
  margin: 0 auto;
`

export const PriceWrapper = styled.div`
  position: absolute;
  top: 14%;
  left: .5em;
  padding: 10px;
  aspect-ratio: 1/1;
  display: flex;
  place-items: center;
  border-radius: 50%;
  background-color: #d91415;
  color: #fff;
  font-size: .6rem;

  h2 {
    margin: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  min-height: auto;
  border: 4px solid #070201;
`

export const Title = styled.h1`
  color: #070201;
  font-size: 1.78rem;
  text-align: center;
  font-weight: 800;
`

export const Description = styled.p`
  font-weight: 500;
`

export const BuyButton = styled.button`
  background-color: #d91415;
  color: #fff;
  border: none;
  border-radius: 100px;
  text-transform: uppercase;
  width: 80%;
  max-width: 220px;
  margin: 4em auto;
  padding-left: 1.3em;
  padding-right: .8em;
  height: 43px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: .87rem;
  font-weight: 500;

  svg {
    margin-left: auto;
  }
`
