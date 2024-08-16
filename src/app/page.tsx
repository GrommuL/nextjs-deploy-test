import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <Link href='/categories'>TO CATEGORIES</Link>
      <div>ASDASDASDASDASDASDASD</div>
      <Image src='/wallpaper2.jpg' alt='asd' width={500} height={500} />
    </div>
  )
}
export default HomePage
