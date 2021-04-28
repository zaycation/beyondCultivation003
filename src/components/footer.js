import React from "react"
import { FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <hr />
      <div className="d-flex align-items-stretch justify-content-between">
        <p className="ml-3">© 2021 Beyond Cultivation</p>
        <a
          href="https://discord.com/invite/n6YcyNm9sb"
          rel="noopener noreferrer"
          target="_blank"
          className="mr-3 my-1"
          style={{ color: "#2c7a44" }}
        >
          <FaDiscord className="mr-2" />
          Join the discord server!
        </a>
      </div>
    </>
  )
}

export default Footer
