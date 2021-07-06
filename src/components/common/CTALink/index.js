import Image from 'next/image'

export default function CTALink({ children }) {
  return (
    <a
      className="flex justify-center items-center gap-2 px-4 py-2 rounded-md shadow bg-gradient-to-br from-shopee to-red-600 text-white font-semibold text-lg md:text-2xl md:w-[220px] md:text-center md:py-4 md:rounded-xl"
      href="https://shopee.co.id/EMMA-DRESS-i.197242392.9872229801"
      target="_blank"
      rel="noopener noreferer"
    >
      <Image
        src="/shopee-icon-white.svg"
        height="24"
        width="21"
      />
      {children}
    </a>
  )
}