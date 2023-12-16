import { useState } from "react"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex nav-head items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6" >
            <Link to='/' className="font-semibold text-xl tracking-tight " >Digit</Link>
        </div>
    </nav>
  )
}

export default Navbar
