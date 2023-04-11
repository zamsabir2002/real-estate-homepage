
import { Inter } from 'next/font/google'
import ACarousel from './components/carousel/acarousel'
import items from './data.json'
import Header from './components/header'
import "keen-slider/keen-slider.min.css"




const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  // const posts = props;
  // console.log("posts", props)
  // console.log("items", items)
  return (
    <div className='w-full p-2'>
      <Header />
      <ACarousel data={items} />
    </div>
  )
}
