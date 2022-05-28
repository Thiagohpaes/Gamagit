import styled from 'styled-components'

export const Header = styled.div`
  background: #21262d;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`
export const List = styled.div`
  display: flex;
`

export const TituloH1 = styled.h1`
  color: #e2f6ee;
  font-size: 2rem;
  margin-bottom: -20%;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  heigth: 100vh;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20%;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  heigth: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  color:#161b22;
  font-size: 1rem;
  width:25%;
  margin-top: 20px;

  &: focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  heigth: 1.5rem;
  padding:   0.5rem;
  background: #21262d;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  margin-top: 20px;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.8rem;
  color: red;
  font-wigth: 600;
  margin-top: 1rem;
`

// export const = styled.`
// `
