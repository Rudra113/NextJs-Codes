// "use client"

// import { useEffect, useState } from "react";
import fs from 'fs/promises'
import Navbar from '@/components/Navbar'

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am an server component")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())}) 
  return (
    <>
    <Navbar/>
    <div>
      I am a component
      {/* {count} */}
      {/* <button onClick={()=>{setCount(count+1)}}>Click</button> */}
      </div>
      </>
  )
}
