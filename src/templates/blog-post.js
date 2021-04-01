import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template";
import { SEO, Utils } from "../utils"

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Time to read: {ttr} <small>min</small> | {date} | {author}
  </h5>
)

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <PostTemplate
      img={post.frontmatter.img}
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          ttr={post.timeToRead}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
        />
      }
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
        img
      }
      excerpt
      timeToRead
    }
  }
`
