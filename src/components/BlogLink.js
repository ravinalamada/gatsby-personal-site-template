import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

export default props => {
  return (
    <Card className="card-container" >
      {/* <Link to={props.to}> */}
        <Card.Img as={Img} fluid={props.featuredImage} className="h-50" / >
      {/* </Link> */}
      <Card.Body className="pt-3">
        <Card.Title as={Link} to={props.to}>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
        <div className="link--wrapper">
          <a className="demo--link" href={`https:${props.demo}`}>
            <img className="netlify--icon" src="../../icons/netlify-icons.svg" alt="netlify"/>
            <span>Demo</span>
          </a>
          <a className="solution--link" href={`https:${props.solution}`}>
            <img className="github--icon" src="../../icons/github-icons-black.svg" alt="github"/>
            <span>Solution</span>
          </a>
        </div>
      </Card.Body>
    </Card>
  )
}
