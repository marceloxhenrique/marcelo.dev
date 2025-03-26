interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="relative mb-12 text-center font-sans">
      <span className="relative inline-block text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
        <span className="absolute -bottom-3 left-0 h-1.5 w-full bg-[#007ACC]"></span>
      </span>
    </h1>
  );
};

export default SectionTitle;
