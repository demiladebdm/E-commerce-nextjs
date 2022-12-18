import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {

  return (
    <DataProvider>
      <NavBar />
      <div style={{marginTop: '90px'}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </DataProvider>
  )
  
}

export default MyApp
