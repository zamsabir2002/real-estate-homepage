
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

// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }

