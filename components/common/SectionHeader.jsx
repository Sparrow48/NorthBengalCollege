const SectionHeader = ({ title = "", subtitle = "" }) => {
  return (
    <>
      <div className="section-header mb-10">
        {title && (
          <h3 className="text-theme-red-light font-semibold mb-2">{title}</h3>
        )}
        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold">{subtitle}</h2>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
