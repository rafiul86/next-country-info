import Layout from '../components'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
