interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      <div className="mx-auto w-24 h-1 gradient-gold rounded-full mb-4" />
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
