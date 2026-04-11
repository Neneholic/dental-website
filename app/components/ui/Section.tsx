import { cn } from '@/app/[locale]/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'primary' | 'gradient';
}

export function Section({
  children,
  className,
  id,
  background = 'default',
}: SectionProps) {
  const backgrounds = {
    default: 'bg-transparent',
    primary: 'bg-[#0891B2]',
    gradient: 'bg-gradient-to-br from-[#0891B2] to-[#0E7490]',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        backgrounds[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
