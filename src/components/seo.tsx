/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SeoQuery } from '@/graphql-types';

interface ISEOProps {
    description?: string;
    lang?: string;
    meta?: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[];
    title: string;
}

const SEO: React.FC<ISEOProps> = ({ description = '', lang = 'en', meta = [], title }) => {
    const { site }: SeoQuery = useStaticQuery(graphql`
        query SEO {
            site {
                siteMetadata {
                title
                description
                author
                }
            }
        }
    `);

    const metaDescription: string = description || site?.siteMetadata?.description || '';
    const siteAuthor = site?.siteMetadata?.author || '';

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteAuthor}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: siteAuthor,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                ...meta,
            ]}
        />
    );
};

export default SEO;
