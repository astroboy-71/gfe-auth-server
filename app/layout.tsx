import "@/styles/globals.css"

import { Metadata } from "next"
import ContextProviders from "@/providers/context-provider"
import { NextUIProviders } from "@/providers/nextui-provider"
import SessionProviders from "@/providers/session-provider"
import clsx from "clsx"
import { getServerSession } from "next-auth"
import { Toaster } from "react-hot-toast"

import { fontGoldman, fontMont, fontSans } from "@/config/fonts"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en" suppressHydrationWarning className="!light">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-mont antialiased",
          fontSans.variable,
          fontMont.variable,
          fontGoldman.variable
        )}
      >
        <SessionProviders session={session}>
          <NextUIProviders
            themeProps={{
              attribute: "class",
              defaultTheme: "light",
              enableSystem: false,
            }}
          >
              <ContextProviders>
                <Toaster />
                {children}
              </ContextProviders>
          </NextUIProviders>
        </SessionProviders>
      </body>
    </html>
  )
}
