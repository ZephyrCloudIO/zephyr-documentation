import { useEffect, useState } from "react"

export const TailwindIndicator = () => {

    const environment = process.env.NODE_ENV

    const win = typeof window !== "undefined" && window

    const [screenSize, setScreenSize] = useState<"xs" | "sm" | "md" | "lg" | "2xl">(null)
    useEffect(() => {

        const width = win.innerWidth
        if (width < 640) {
            setScreenSize("xs")
        }
        if (width >= 640 && width < 768) {
            setScreenSize("sm")
        }
        if (width >= 768 && width < 1024) {
            setScreenSize("md")
        }
        if (width >= 1024 && width < 1280) {
            setScreenSize("lg")
        }
        if (width >= 1280) {
            setScreenSize("2xl")
        }
    }, [  win ])

    if (environment === "production") {
        return null
    }

    return (
        <div className=" fixed bottom-0 h-6 items-center flex justify-center w-6 left-0 bg-teal-600 border-teal-400 rounded-full text-white p-1">
          <p> {screenSize}</p>
        </div>

    )
}