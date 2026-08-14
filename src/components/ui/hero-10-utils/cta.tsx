import * as React from 'react'

export interface CtaProps {
  ctaEnabled?: boolean
  text?: string
  href?: string
  variant?: 'outline' | 'solid'
}

export function Cta({ cta }: { cta: CtaProps }) {
  const baseClass = "px-4 py-2 rounded-md font-medium text-sm transition-colors inline-block";
  const variants = {
    solid: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-800"
  };
  const variantClass = variants[cta.variant || 'solid'];
  
  return (
    <a href={cta.href || '#'} className={`${baseClass} ${variantClass}`}>
      {cta.text || 'Learn More'}
    </a>
  )
}
