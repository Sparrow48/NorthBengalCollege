import Link from "next/link"
import { ChevronRight } from "lucide-react"

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import { cn } from "@/lib/utils"

export default function PageHeaderBigSub({ title = "", subtitle = "", titleClass = "", subtitleClass = "", paths = [], breadcumbClass, ...restProps }) {
  return (
    <section className="relative bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white py-20" {...restProps}>
        <div className="absolute inset-0 overflow-hidden opacity-20">
            <div 
                className={`absolute inset-0 bg-cover bg-center`}
                style={{
                    backgroundImage: `url('${PageHeaderBanner?.src}')`,
                }}
            ></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
                {
                    title && (
                        <h1 className={cn("text-4xl md:text-5xl font-bold mb-4", titleClass)}>
                            {title}
                        </h1>
                    )
                }
                {
                    subtitle && (
                        <p className={cn("text-lg md:text-xl text-white/80 mb-6", subtitleClass)}>
                            {subtitle}
                        </p>
                    )
                }
                {paths.length > 0 && (
                    <div className={cn("mb-4 flex items-center gap-2 text-sm text-muted-foreground", breadcumbClass)}>
                        {paths.map((path, index) => (
                            <div key={`${path?.name}-${index}`} className="flex items-center flex-grow-0 gap-2">
                                {
                                    path?.url
                                    ? <Link href={path?.url} className="breadcumb-link max-w-24 md:max-w-none hover:text-blue-400 line-clamp-1">{path?.name}</Link>
                                    : <span className="breadcumb-link hover:text-theme-secondary line-clamp-1">{path?.name}</span>
                                }
                                {index < paths.length - 1 && <ChevronRight className="size-4" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}
