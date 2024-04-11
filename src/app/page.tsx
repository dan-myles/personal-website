import Image from "next/image"
import { Comic_Neue } from "next/font/google"

const ComicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className={ComicNeue.className}>
      <div
        className="m-auto mt-[10vh] flex max-w-[70rem] flex-col items-stretch
         border-4 border-black bg-neutral-400 text-center shadow-2xl shadow-black"
      >
        <div className="mr-20 flex items-center justify-center bg-neutral-400 p-2">
          <Image
            src="/dan-anim4.gif"
            alt="Profile picture of dan"
            height={550}
            width={450}
            quality={100}
            objectFit="cover"
            priority={true}
            unoptimized={true}
            className="ml-[-60px]"
          />
          <span className="ml-[-140px] p-4 text-4xl font-extrabold">
            dans software
          </span>
        </div>
        <ul
          className="mt-[-80px] flex items-center justify-center
            border-b-black bg-neutral-400 p-4 text-xl text-blue-700 underline"
        >
          <li className="rounded-l-2xl bg-amber-100 p-4">
            <a href="https://linkedin.com/in/dan-myles/">LinkedIn</a>
          </li>
          <li className="bg-amber-100 p-4">
            <a href="https://github.com/dan-myles/">GitHub</a>
          </li>
          <li className="rounded-r-2xl bg-amber-100 p-4">
            <a href="mailto:contact@dans.software">Email</a>
          </li>
        </ul>
        <p className="text-bold mt-4 text-center text-xl">
          4th year CS student at Arizona State University, with
        </p>
        <p className="text-bold mb-4 text-center text-xl">
          a passion for full stack web development and motorcycles.
        </p>
        <p className="text-bold text-center text-xl">
          Experienced with React, Node and Next, and currently enjoying
        </p>
        <p className="text-bold text-center text-xl">
          learning about GO and backend development. There used to be a resume
        </p>
        <p className="text-bold text-center text-xl">
          here, but I got too much spam. If you want to see my work or chat,
        </p>
        <p className="text-bold mb-4 text-center text-xl">
          stop by my LinkedIn or GitHub. Thanks for stopping by!
        </p>

        <p className="mb-8 mt-4 text-xl text-blue-800 underline">
          <a href="mailto:contact@dans.software">SEND ME AN EMAIL</a>
        </p>

        <div className="mt-2 grid grid-cols-2">
          <Image
            src="/badge1.gif"
            alt="Web browser badge"
            height={115}
            width={115}
            quality={100}
            className="m-auto mb-4 mr-4"
          />
          <Image
            src="/badge2.gif"
            alt="Web browser badge"
            height={115}
            width={115}
            quality={100}
            className="m-auto mb-4 ml-4"
          />
        </div>
      </div>
    </main>
  )
}
