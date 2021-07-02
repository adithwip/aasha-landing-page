import Image from 'next/image'

import fourthSectionImage from '../../../public/images/fourth-section-image.png'

export default function FourthSection() {
  return (
    <section aria-label="Second Section" className="relative overflow-hidden h-[520px] md:h-[720px]">
      <Image
        alt="fourth-section-image"
        src={fourthSectionImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center 10%"
        placeholder="blur"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4">
        <p className="text-6xl text-white">EMMA</p>

        <a
          className="px-4 py-2 rounded-md bg-yellow-600 text-white text-bold text-md uppercase"
          href="https://shopee.co.id/EMMA-DRESS-i.197242392.9872229801"
          target="_blank"
          rel="noopener noreferer">
          Shop Now
        </a>
      </div>
    </section>
  )
}