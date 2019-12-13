import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box, Flex, Heading, Link, Text, Button } from "rebass"
import { IoIosArrowRoundDown } from "react-icons/io"

import Shell from "../components/shell"

export const IndexPageTemplate = ({ title, crewMembers }) => {
  return (
    <>
      <Flex>
        <Box
          sx={{
            "> video": {
              position: "fixed",
              left: "50%",
              top: "50%",
              zIndex: "-1",
              transform: "translate(-50%, -50%)",
              minWidth: "100vw",
              minHeight: "100vh",
            },
          }}
        >
          <video
            role="presentation"
            preload="auto"
            playsInline=""
            crossOrigin="anonymous"
            loop
            autoPlay
            muted
            src="https://video.wixstatic.com/video/9b171c_55a55b4183b846b5a51279d260502565/1080p/mp4/file.mp4"
          ></video>
        </Box>
      </Flex>
      <Flex
        height="100vh"
        px={[15, 25, 35]}
        py={[15, 25, 35]}
        minWidth={[340, 768, 768, 1020]}
        margin="0 auto"
        justifyContent="space-between"
      >
        <Heading
          fontSize={[75, 100, 100, 160]}
          maxWidth={[100, 200, 500]}
          sx={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
          }}
          color="#a60202"
          fontFamily="Petit Formal Script"
        >
          {title}
        </Heading>
        <Link href="#bottom" alignSelf="flex-end">
          <Button
            backgroundColor="#a60202"
            sx={{
              borderRadius: "100%",
              height: "50px",
              width: "50px",
              padding: 0,
            }}
          >
            <IoIosArrowRoundDown size={40} />
          </Button>
        </Link>
      </Flex>
      <Flex
        id="bottom"
        backgroundColor="white"
        flexDirection="column"
        alignItems="center"
      >
        <CrewList items={crewMembers} />
        <Link
          my={50}
          href="https://docs.google.com/forms/d/e/1FAIpQLSchzcsfwOfoeumL1EVjaq2k0Nugtr5BE7WHrn2f8dnPFsIptQ/viewform?usp=sf_link"
        >
          <Button
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            backgroundColor="#a60202"
            fontSize={[16, 30]}
            fontFamily="sans-serif"
            py={3}
            px={4}
          >
            Sign up to be an extra
          </Button>
        </Link>
      </Flex>
    </>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}

const CrewList = ({ items }) => {
  if (!items || !items.length) return null

  return (
    <Flex
      px={[15, 25, 35]}
      mt={[15, 25, 35]}
      minWidth={[340, 768, 992, 1120]}
      margin="0 auto"
      flexDirection="column"
    >
      {items.map(({ role, name, website }) => (
        <Box
          key={name}
          sx={{ textAlign: "center" }}
          flex={1}
          sx={{ width: "100%" }}
          textAlign="center"
        >
          {role && (
            <Text
              color="#a60202"
              fontFamily="Petit Formal Script"
              fontSize={40}
              fontWeight="bold"
              my={[10, 15]}
            >
              {role}
            </Text>
          )}
          {name && (
            <Text fontFamily="sans-serif" fontSize={30} mb={35}>
              {name}
            </Text>
          )}
          {website && <Text>{website}</Text>}
        </Box>
      ))}
    </Flex>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Shell>
      <IndexPageTemplate
        title={frontmatter.title}
        crewMembers={frontmatter.crewMembers}
      />
    </Shell>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        crewMembers {
          name
          role
        }
      }
    }
  }
`
