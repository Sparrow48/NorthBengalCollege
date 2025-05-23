import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PageHeader = ({ className, children, badge, title, titleClass, description, descriptionClass, paths = [], breadcumbClass, ...rest }) => {
  return (
    <section
      className={cn(
        "w-full bg-theme-secondary/20 px-4 py-8 md:py-12",
        className
      )}
      {...rest}
    >
      <div className="container space-y-4">
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

        <div className="space-y-2">
          {badge && (
            <Badge variant="secondary" className="text-[#4f98cd]">
              {badge}
            </Badge>
          )}
          <div className="space-y-1">
            <h1 className={cn("text-2xl font-semibold tracking-tight md:text-3xl", titleClass)}>
              {title}
            </h1>
            {description && (
              <p className={cn("text-muted-foreground", descriptionClass)}>{description}</p>
            )}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};

export default PageHeader;
