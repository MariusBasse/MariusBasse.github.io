import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ich from "../images/ich.jpeg"
import ich2 from "../images/ich2.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Marius Basse Webpage</h1>
    <>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "0 4px" }}>
        <div style={{ flex: "33%", maxWidth: "33%", padding: "0 4px" }}>
          <img
            style={{
              verticalAlign: "middle",
              width: "100%",
            }}
            src={ich}
          />
        </div>
        <div style={{ flex: "33%", maxWidth: "33%", padding: "0 4px" }}>
          <img
            style={{
              verticalAlign: "middle",
              width: "100%",
            }}
            src={ich2}
          />
        </div>
      </div>
    </>
  </Layout>
)

export default IndexPage
