import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components'

const Wrapper = styled.div`
  h1 {
    color: lightgreen;
    font-size: 2rem;
  }
`;

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Hello world!</h1>
      </Wrapper>
    </Layout>
  )
}

export default Home