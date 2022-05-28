import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
`

export const Title = styled.h1`
  background: #21262d;
  text-align: center;
  font-size: 2.5rem;
  font-family: sans-serif;
  color: #f0f6fc;
`
export const List = styled.ul`
  list-styled: none;
  padding: 0;
  margim: 0;
  font-family: sans-serif;
  border-radius: 5px;
`
export const ListItem = styled.li`
  margin: 0.6rem 0;

  background: #000;
  color: #f0f6fc;
  padding: 0.7rem;
  border-radius: 10px;
  background-color: #161b22;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #161b22;
  border-radius: 10px;
  padding: 0.5rem 0;
`
