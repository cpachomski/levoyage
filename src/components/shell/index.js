import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"
import "./reset.css"

import { graphql as q, useStaticQuery } from "gatsby"

function useSiteMetadata() {
  const { site } = useStaticQuery(
    q`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteTitle 
          }
        }
      }
    `
  )

  return site.siteMetadata
}

const Shell = ({ children }) => {
  const { siteTitle } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Cinzel|Marck+Script|Petit+Formal+Script&display=swap"
          rel="stylesheet"
        />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      {children}
    </ThemeProvider>
  )
}

export default Shell
