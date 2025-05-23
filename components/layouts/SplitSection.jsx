import { cn } from "@/lib/utils";

/**
 * A section with a left and right side, with optional sticky behavior for either or both sides.
 *
 * @param {string} [className=""] - The outermost className
 * @param {string} [title=""] - The title for the section
 * @param {"left"|"right"|"both"|"none"} [stickySide="none"] - Which side should be sticky
 * @param {React.ReactNode} [LeftContent=null] - The content to go on the left side
 * @param {string} [leftWrapperClassName=""] - The className for the left side wrapper
 * @param {string} [leftContentClassName=""] - The className for the left side content
 * @param {React.ReactNode} [RightContent=null] - The content to go on the right side
 * @param {string} [rightWrapperClassName=""] - The className for the right side wrapper
 * @param {string} [rightContentClassName=""] - The className for the right side content
 * @param {string} [gridClassName=""] - The className for the grid element
 */
const SplitSection = ({
  className = "",
  stickySide = "none",
  title = "",
  LeftContent = null,
  leftWrapperClassName = "",
  leftContentClassName = "",
  RightContent = null,
  rightWrapperClassName = "",
  rightContentClassName = "",
  gridClassName = "",
}) => {
  return (
    <>
      <section className={cn("relative py-7 sm:py-10 lg:py-14", className)}>
        <div className="container px-4">
          {title && (
            <h2 className="leading-tight text-4xl md:text-[48px] lg:text-[52px] mb-20 xl:mb-[120px]">
              {title}
            </h2>
          )}
          <div className={cn("relative flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 md:gap-30 xl:gap-40", gridClassName)}>
            <div className={leftWrapperClassName}>
              <div
                className={cn(
                  {
                    "md:sticky md:top-28":
                      stickySide === "both" || stickySide === "left",
                  },
                  leftContentClassName
                )}
              >
                {LeftContent}
              </div>
            </div>
            <div className={rightWrapperClassName}>
              <div
                className={cn(
                  {
                    "md:sticky md:top-28":
                      stickySide === "both" || stickySide === "right",
                  },
                  rightContentClassName
                )}
              >
                {RightContent}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SplitSection;
