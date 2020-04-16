import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

export default function Post({ data: { mdx } }) {
  return <MDXRenderer>{mdx.body}</MDXRenderer>;
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      body
    }
  }
`;
