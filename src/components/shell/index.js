import React from "react"

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
      <span>{siteTitle}</span>
      <p>{siteDescription}</p>
      {children}
    </div>
  )
}

export default Shell
