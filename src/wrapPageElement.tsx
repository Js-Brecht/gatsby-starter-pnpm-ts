import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import Layout from './layouts/main';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <Layout>{element}</Layout>
);