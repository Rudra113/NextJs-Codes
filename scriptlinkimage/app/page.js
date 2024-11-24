import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWFxh-LZTDGjm4AwNkEbzI9G0oPW6StacZg&s" fill={true} alt=""  />
    </div>
  )
}
