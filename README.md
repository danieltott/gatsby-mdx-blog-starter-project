# Reduced test case for Gatsby issue

Issue: <a href="https://github.com/gatsbyjs/gatsby/issues/23171">[gatsby-plugin-mdx] MDXRenderer creates "Unreachable code after return statement" warning in firefox console</a>

## To reproduce:

* `gatsby new gatsby-mdx-blog-starter-project git@github.com:danieltott/gatsby-mdx-blog-starter-project.git`
* `cd gatsby-mdx-blog-starter-project`
* `gatsby develop`
* In Firefox, visit http://localhost:8000/graphql-book
