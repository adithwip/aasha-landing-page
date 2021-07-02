import Image from 'next/image'

import thirdSectionImageA from '../../../public/images/third-section-image-a.png'
import thirdSectionImageB from '../../../public/images/third-section-image-b.png'
import thirdSectionImageC from '../../../public/images/third-section-image-c.png'
import thirdSectionImageD from '../../../public/images/third-section-image-d.png'
import thirdSectionImageE from '../../../public/images/third-section-image-e.png'

export default function ThirdSection() {
  return (
    <section aria-label="Second Section" className="h-[520px] md:h-[720px]">
      <div className="relative flex flex-wrap h-full">
        <figure className="relative flex-1 min-w-[50%] md:min-w-[unset]">
          <Image
            src={thirdSectionImageA}
            alt="third-section-image-a"
            layout="fill"
            objectFit="none"
            objectPosition="50% 40%"
            placeholder="blur"
          />
        </figure>
        <figure className="relative flex-1 min-w-[50%] md:min-w-[unset]">
          <Image
            src={thirdSectionImageB}
            alt="third-section-image-b"
            layout="fill"
            objectFit="none"
            objectPosition="60% 30%"
            placeholder="blur"
          />
        </figure>
        <figure className="relative flex-1 min-w-[33.33%] md:min-w-[unset]">
          <Image
            src={thirdSectionImageC}
            alt="third-section-image-c"
            layout="fill"
            objectFit="none"
            objectPosition="75% top"
            placeholder="blur"
          />
        </figure>
        <figure className="relative flex-1 min-w-[33.33%] md:min-w-[unset]">
          <Image
            src={thirdSectionImageD}
            alt="third-section-image-d"
            layout="fill"
            objectFit="none"
            objectPosition="40% 50%"
            placeholder="blur"
          />
        </figure>
        <figure className="relative flex-1 min-w-[33.33%] md:min-w-[unset]">
          <Image
            src={thirdSectionImageE}
            alt="third-section-image-e"
            layout="fill"
            objectFit="none"
            objectPosition="45% 50%"
            placeholder="blur"
          />
        </figure>

        <div className="absolute bottom-4 inset-x-0 flex justify-center">
          <a
            className="px-4 py-2 rounded-md bg-yellow-600 text-white text-bold text-md uppercase"
            href="https://shopee.co.id/EMMA-DRESS-i.197242392.9872229801"
            target="_blank"
            rel="noopener noreferer">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}