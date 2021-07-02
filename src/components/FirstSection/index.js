import Image from 'next/image'

import firstSectionImage from '../../../public/images/first-section-image.png'

export default function FirstSection() {
  return (
    <section aria-label="First Section" className="relative overflow-hidden h-[520px] md:h-[720px]">
      <Image
        alt="first-section-image"
        src={firstSectionImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center 30%"
        placeholder="blur"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <figure className="relative h-[52px] w-[267px] md:h-[120px] md:w-[616px]">
          <Image
            alt="first-section-image"
            src="/emma-logo-white.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end items-center mb-5 md:mb-10">
        <a
          className="px-4 py-2 mb-4 rounded-md bg-yellow-600 text-white text-bold text-md uppercase md:text-xl md:w-[240px] md:text-center md:mb-10"
          href="https://shopee.co.id/EMMA-DRESS-i.197242392.9872229801"
          target="_blank"
          rel="noopener noreferer">
          Shop Now
        </a>
        <figure className="relative h-[32px] w-[115px]">
          <Image
            alt="first-section-image"
            src="/aasha-logo-white.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      </div>
    </section>
  )
}