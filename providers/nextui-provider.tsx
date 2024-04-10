"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { NextUIProvider } from "@nextui-org/system"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export interface NextUIProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function NextUIProviders({
  children,
  themeProps,
}: NextUIProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
