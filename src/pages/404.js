import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Whoops, we're lost. Let's try again.
      <Link to="/"Go home </Link>
      </p>
  </Layout>
)

export default NotFoundPage
