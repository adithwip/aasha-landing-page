import FacebookPixel from '../src/components/common/FacebookPixel'

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  )
}
