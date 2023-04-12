
import { Inter } from 'next/font/google'
import ACarousel from './components/carousel/acarousel'
import items from './data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  // const posts = props;
  // console.log("posts", props)
  // console.log("items", items)
  return (
    <div className='w-full p-3'>
      <ACarousel data={items} />
    </div>
  )
}
