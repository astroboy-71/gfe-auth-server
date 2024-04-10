import {
  Goldman as FontGoldman,
  Montserrat as FontMontserrat,
  Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMont = FontMontserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export const fontGoldman = FontGoldman({
  subsets: ["latin"],
  variable: "--font-goldman",
  weight: ["400", "700"],
})
