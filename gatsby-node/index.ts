import { GatsbyNode } from "gatsby";
import { createAutorPages } from "./createAutorPages";
import { createProductPages } from "./createProductPages";
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions: { createPage }
}) =>
    Promise.all([
        await createAutorPages({ graphql, createPage }),
        await createProductPages({ graphql, createPage })
    ]);
