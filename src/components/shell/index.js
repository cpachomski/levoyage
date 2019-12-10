import React from "react"
import { Helmet } from "react-helmet"

import { graphql as q, useStaticQuery } from "gatsby"

function useSiteMetadata() {
  const { site } = useStaticQuery(
    q`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteTitle 
            siteDescription
          }
        }
      }
    `
  )

  return site.siteMetadata
}

const Shell = ({ children }) => {
  const { siteTitle, siteDescription } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <span>{siteTitle}</span>
      <p>{siteDescription}</p>
      {children}
    </div>
  )
}

export default Shell
