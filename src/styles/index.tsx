import styled, { css } from 'styled-components'

type MainProps = {
  headerHeight: number
}

export const Main = styled.main<MainProps>`${({ headerHeight }) => css`
  min-height: calc(100vh - ${headerHeight + 'px'});
  display: flex;
  align-items: center;
`}`
