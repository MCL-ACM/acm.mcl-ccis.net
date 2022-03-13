import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

export default function cmspage({ data }) {
  return <div className="flex flex-row">
      {
          data.allJson.edges.map(({ node }) => (
            <div className="p-4">
              <p>{node.id}</p>
              <p>{node.title}</p>
              <p>{node.year}</p>
              <p>{node.tags.join(" ")}</p>
              <p>{node.summary}</p>
              <p>{node.description}</p>
              <div>
                {node.images?.map(({ image, imageAlt }) => (
                  <div>
                    <GatsbyImage image={getImage(image)} alt={imageAlt} />
                  </div>
                ))}
              </div>
            </div>
          ))
      }
  </div>;
}

export const query = graphql`
  query {
    allJson {
      edges {
        node {
          id
          title
          year
          tags
          summary
          description
          images {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;
