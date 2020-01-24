import { Actions, CreatePagesArgs } from "gatsby";
import { ProductsJson, ProductsJsonConnection } from "../types/graphql-types";

type Result = {
    allProductsJson: ProductsJsonConnection;
};
export type ProductPageContext = Partial<ProductsJson>;

const query = `
{
    allProductsJson {
        edges {
            node {
                slug
            }
        }
    }
} 
`;

export const createProductPages = async ({
    graphql,
    createPage
}: {
    graphql: CreatePagesArgs["graphql"];
    createPage: Actions["createPage"];
}) => {
    const result = await graphql<Result>(query);
    if (result.errors || !result.data) {
        throw result.errors;
    }
    result.data.allProductsJson.edges.forEach(edge => {
        const product = edge.node;
        createPage<ProductPageContext>({
            path: `/product/${product.slug}/`,
            component: require.resolve("./../src/templates/product.tsx"),
            context: {
                slug: product.slug
            }
        });
    });
};
