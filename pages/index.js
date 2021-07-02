import Head from 'next/head'

import FirstSection from '../src/components/FirstSection'
import SecondSection from '../src/components/SecondSection'
import ThirdSection from '../src/components/ThirdSection'
import FourthSection from '../src/components/FourthSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aasha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="min-h-screen">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </>
  )
}
