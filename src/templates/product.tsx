import * as React from "react";
import Image from "gatsby-image";

type Props = {
    data: any;
};
export const query = graphql`
    query($slug: String!) {
        productsJson(slug: { eq: $slug }) {
            title
            description
            price
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const Component: React.FC<Props> = ({ data }) => (
    <div>
        <h1>{data?.productsJson?.title}</h1>
        <Image
            fluid={data?.productsJson?.image?.childImageSharp.fluid}
            alt={data?.productsJson?.title}
            style={{ float: "left", marginRight: "1rem", width: 150 }}
        />
        <p>{data?.productsJson?.price}</p>
        <div
            dangerouslySetInnerHTML={{
                __html: data?.productsJson?.description
            }}
        />
    </div>
);

export default Component;
