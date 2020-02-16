import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/layouts/main';
import SEO from '~/components/seo';

const SecondPage: React.FC = () => (
    <>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </>
);

export default SecondPage;
