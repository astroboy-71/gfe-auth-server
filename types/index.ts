import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type UserProfile = {
  id: string
  name: string
  email: string
  image: string
}
