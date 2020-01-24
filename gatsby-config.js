module.exports = {
    siteMetadata: {
        title: `Gatsby Typescript Starter`,
        authors: [
            { name: "Tori", slug: "tori" },
            { name: "Neko", slug: "neko" },
            { name: "Inu", slug: "inu" }
        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-plugin-graphql-codegen",
            options: {
                fileName: `types/graphql-types.d.ts`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./data/"
            }
        },
        "gatsby-transformer-json",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp"
    ]
};
