import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexHogeQuery } from "../../types/graphql-types";
import Layout from "../layouts/layout";
import Helmet from "react-helmet";
// ______________________________________________________
//
type Props = {
    data: IndexHogeQuery;
};
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
    <Layout>
        <Helmet title="TOP" />
        <h1>Hi people</h1>
        <strong>{data.site?.siteMetadata?.title}</strong> site.
        <p>Welcome to your new </p>
        <p>Now go build something great.</p>
        <ul>
            <li>
                <Link to="/page-2/">Go to page 2</Link>
            </li>
            <li>
                <Link to="/authors/">Go to authors</Link>
            </li>
        </ul>
    </Layout>
);
// ______________________________________________________
//
export const pageQuery = graphql`
    query IndexHoge {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
// ______________________________________________________
//
export default Component;
