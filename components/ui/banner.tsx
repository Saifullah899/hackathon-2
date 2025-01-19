
import Image from "next/image";
function Banner() {
  return (
  <div>
    <Image 
    src={'/images/banner.svg'}
    alt="banner"
    width={1920}
    height={558}
    />
  </div>
  )
}

export default Banner;