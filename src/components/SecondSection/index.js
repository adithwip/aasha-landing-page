import Image from 'next/image'
import cn from 'classnames'

import CTALink from '../common/CTALink'

import styles from './SecondSection.module.css'
import secondSectionImage from '../../../public/images/second-section-image.png'

export default function SecondSection() {
  return (
    <section aria-label="Second Section" className="h-[620px] md:h-[720px]">
      <div className="flex h-full">
        <div className="hidden md:flex md:flex-1 md:relative md:h-full">
          <Image
            alt="first-section-image"
            src={secondSectionImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center 50%"
            placeholder="blur"
          />
        </div>

        <div className="flex flex-col flex-1 justify-between items-center px-6 py-8 h-full md:px-6 md:py-10">
          <figure className="relative h-[68px] w-[267px] md:h-[157px] md:w-[616px]">
            <Image
              alt="first-section-image"
              src="/emma-logo-tagline-black.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </figure>

          <p className="text-xl text-black font-bold mt-2 md:text-4xl md:mt-4">IDR 245.000</p>

          <ul className={cn('mb-5 md:mb-10', styles.list)}>
            <li>Material Katun Poplin & Katun Crinkle</li>
            <li>Kerah leher</li>
            <li>Resleting depan</li>
            <li>Kancing bungkus pada bagian pergelangan</li>
            <li>Saku dress</li>
            <li>Busui dan Bumil friendly</li>
            <li>Wudhu friendly</li>
          </ul>

          <CTALink>Shop Now</CTALink>
        </div>
      </div>

    </section>
  )
}