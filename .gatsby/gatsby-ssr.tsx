/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { GatsbySSR } from 'gatsby';
import React from 'react';
import Layout from '../src/layouts/main';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = async ({ element }) => (
    <Layout>{element}</Layout>
)