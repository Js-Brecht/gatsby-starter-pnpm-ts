/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SiteTitleQuery } from '@/graphql-types';
import Header from "~/components/header";
import "./main.css";

interface ILayoutProps {
    children: React.ReactNodeArray;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const data: SiteTitleQuery = useStaticQuery(graphql`
        query SiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data?.site?.siteMetadata?.title || ''} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

export default Layout;
