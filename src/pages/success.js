import React from "react"
import items from "../components/itemsList"
import HomeNavbar from "../components/HomeNavbar"
import { ProGallery } from "pro-gallery"
import "pro-gallery/dist/statics/main.css"

const windowGlobal = typeof window !== "undefined" && window

const success = () => {
  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: -1,
  }

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: windowGlobal.innerWidth,
    height: windowGlobal.innerHeight,
  }

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData })

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = windowGlobal

  return (
    <>
      <HomeNavbar />
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    </>
  )
}

export default success
