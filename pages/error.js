import Hero from "./Hero"
import Link from "next/link"

const error = () => {
  return (
    <div>
        <Hero />
        <h1>There was an error with checking stock on this lens. Click <Link href={'/'}>here</Link> to go home and try again.</h1>
    </div>
  )
}

export default error