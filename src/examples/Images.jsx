import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
    return (
        <Wrapper>
            <article>
                <h2>Gatsby image</h2>
                <StaticImage
                    src="../assets/images/example-img-big.jpg"
                    alt="big"
                    placeholder="blurred"
                    layout="constrained"
                    as="section"
                />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;

  article {
    border: 2px solid green;
  }
`

export default Images