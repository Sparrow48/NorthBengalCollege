"use client"

import { useState } from "react"
import Link from "next/link"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { useRouter } from "next/navigation"

export function CustomNavigationMenuItem({ href, label, children }) {
  const [isHovering, setIsHovering] = useState(false)
  const router = useRouter();

  return (
    <NavigationMenuItem onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <Link href={href} passHref>
        <NavigationMenuTrigger
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          onClick={(e) => {
            if (!isHovering) {
              e.preventDefault()
              router.push(href)
            }
          }}
        >
          {label}
        </NavigationMenuTrigger>
      </Link>
      <NavigationMenuContent className="animate-none">{children}</NavigationMenuContent>
    </NavigationMenuItem>
  )
}

