// import Image from 'next/image'
import useFormats from "@/hooks/formats"
import Link from "next/link"

export default function Home() {
  const formats = useFormats()
  return (
    <div>
      <div className="col">
        <div className="row">
          <div className="container">
            <h1 className="title">
              Welcome to random files multimedia!
            </h1>
              {formats.map((format) => (
                <div className="row">
                <Link href={`files/${format.type}`} className="btn btn-primary btn-large">{format.type}</Link>
              </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
