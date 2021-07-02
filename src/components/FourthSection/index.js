import Image from 'next/image'

import CTALink from '../common/CTALink'

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
        <figure className="relative h-[52px] w-[267px] md:h-[120px] md:w-[616px]">
          <Image
            alt="first-section-image"
            src="/emma-logo-black.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>

        <CTALink>Shop Now</CTALink>
      </div>
    </section>
  )
}