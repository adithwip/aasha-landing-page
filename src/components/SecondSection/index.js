import Image from 'next/image'

import secondSectionImage from '../../../public/images/second-section-image.png'

export default function SecondSection() {
  return (
    <section aria-label="Second Section" className="h-[520px] md:h-[720px]">
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

        <div className="flex flex-col flex-1 justify-center items-center p-4 h-full">
          <figure className="relative h-[52px] w-[267px] md:h-[120px] md:w-[616px]">
            <Image
              alt="first-section-image"
              src="/emma-logo-black.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </figure>

          <p className="text-xl text-black font-bold mb-10 mt-2 md:text-4xl md:mt-4">IDR 245.000</p>

          <ul className="text-center mb-10 md:mb-20">
            <li>✅ Material: Katun Poplin & Katun Crinkle</li>
            <li>✅ Kerah leher</li>
            <li>✅ Resleting depan</li>
            <li>✅ Kancing bungkus pada bagian pergelangan</li>
            <li>✅ Saku dress</li>
            <li>✅ Busui dan Bumil friendly</li>
            <li>✅ Wudhu friendly</li>
          </ul>

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