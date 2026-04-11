'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/[locale]/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-[#059669] text-white shadow-[0_4px_6px_-1px_rgba(5,150,105,0.2)] hover:bg-[#047857] hover:shadow-[0_6px_8px_-1px_rgba(5,150,105,0.3)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-[#0891B2] border-2 border-[#0891B2] hover:bg-[#F0F9FF] active:bg-[#E0F7FA]',
    ghost:
      'bg-transparent text-[#0891B2] hover:bg-[#F0F9FF] active:bg-[#E0F7FA]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={variant === 'primary' ? { y: -2 } : undefined}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
