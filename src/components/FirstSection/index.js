import Image from 'next/image'

import CTALink from '../common/CTALink'

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
        <CTALink>Shop Now</CTALink>
        <figure className="relative h-[32px] w-[115px] mt-5">
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