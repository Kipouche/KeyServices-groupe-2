import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>KeyServices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <main className="container">
          {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout