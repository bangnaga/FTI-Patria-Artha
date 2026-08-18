'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Cta, type CtaProps } from './hero-10-utils/cta'
import { ParticlesBg } from './particles-bg'

export interface Hero10Props {
  title: string
  titleLine2Prefix?: string
  titleHighlight?: string
  description: string
  socialProof?: string
  images: string[]
  imageAlts?: string[]
  photoNames?: string[]
  photoTitles?: string[]
  photo1Name?: string
  photo1Title?: string
  photo2Name?: string
  photo2Title?: string
  photo3Name?: string
  photo3Title?: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: 'standard' | 'compact'
  showParticles?: boolean | string
  particlesColor?: string
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-lg text-sm sm:text-base',
    header: 'gap-5',
    content: 'gap-8 sm:gap-10',
    fan: 'max-w-3xl',
    fanCard: 'aspect-4/5',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'max-w-md text-sm',
    header: 'gap-4',
    content: 'gap-6 sm:gap-8',
    fan: 'max-w-2xl',
    fanCard: 'aspect-4/5',
  },
} as const

const fanSlots = [
  { width: 'w-[38%]', layout: '-mr-8 z-10', rotate: -6, x: 48, ty: 24 },
  { width: 'w-[42%]', layout: 'z-20', rotate: 0, x: 0, ty: -8 },
  { width: 'w-[38%]', layout: '-ml-8 z-10', rotate: 6, x: -48, ty: 24 },
]

const fanContainer: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const fanCard: Variants = {
  hidden: (slot: (typeof fanSlots)[number]) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty,
  }),
  visible: (slot: (typeof fanSlots)[number]) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

function ImageFan({
  images,
  imageAlts,
  names,
  titles,
  cardAspect,
  animate,
}: Readonly<{
  images: string[]
  imageAlts?: string[]
  names?: string[]
  titles?: string[]
  cardAspect: string
  animate: boolean
}>) {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center"
      variants={fanContainer}
      initial={animate ? 'hidden' : false}
      whileInView={animate ? 'visible' : undefined}
      animate={animate ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1]
        const fallbackUrls = [
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
        ]
        const validSrc = src && src.trim() !== '' ? src : fallbackUrls[i % fallbackUrls.length]

        const defaultNames = [
          'Prof. Dr. Ir. H. Ahmad Fauzi, M.T.',
          'Dr. Eng. Rina Melati, S.T., M.T.',
          'Ir. Muhammad Arham, M.Kom.'
        ]
        const defaultTitles = [
          'Dekan FTI UPA',
          'Wakil Dekan I Akademik',
          'Ketua Prodi Informatika'
        ]

        const photoName = names?.[i] || defaultNames[i % defaultNames.length]
        const photoTitle = titles?.[i] || defaultTitles[i % defaultTitles.length]

        return (
          <motion.div
            key={`fan-img-${i}-${validSrc}`}
            custom={slot}
            variants={fanCard}
            className={cn(
              'relative shrink-0 overflow-hidden rounded-2xl shadow-2xl outline outline-black/10 dark:outline-white/10 group cursor-pointer transition-all duration-300 hover:z-30 hover:scale-105',
              cardAspect,
              slot.width,
              slot.layout,
            )}
          >
            <img
              src={validSrc}
              alt={imageAlts?.[i] ?? photoName}
              decoding="async"
              className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Nama dan Jabatan */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-2.5 sm:p-3.5 text-left backdrop-blur-[2px] z-10 flex flex-col justify-end">
              {photoTitle && (
                <div className="inline-block self-start px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] sm:text-[10px] font-extrabold mb-1 shadow-xs tracking-wider uppercase">
                  {photoTitle}
                </div>
              )}
              {photoName && (
                <h4 className="text-white font-extrabold text-xs sm:text-sm md:text-base leading-snug drop-shadow-md line-clamp-1">
                  {photoName}
                </h4>
              )}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function Hero10({
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  socialProof,
  images,
  imageAlts,
  photoNames,
  photoTitles,
  photo1Name,
  photo1Title,
  photo2Name,
  photo2Title,
  photo3Name,
  photo3Title,
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
  showParticles,
  particlesColor = 'white',
}: Readonly<Hero10Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const resolvedNames = photoNames || [photo1Name || '', photo2Name || '', photo3Name || ''].filter(Boolean)
  const resolvedTitles = photoTitles || [photo1Title || '', photo2Title || '', photo3Title || ''].filter(Boolean)

  const titleElement = title && (
    <h1
      className={cn(
        'text-slate-900 dark:text-white font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <span>{title}</span>
      {(titleLine2Prefix || titleHighlight) && (
        <>
          <br />
          <span>
            {titleLine2Prefix && <span>{titleLine2Prefix} </span>}
            {titleHighlight && (
              <span className="text-[#800020] dark:text-red-400">{titleHighlight}</span>
            )}
          </span>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-slate-600 dark:text-slate-400 text-balance', vs.description)}>
      <span>{description}</span>
    </p>
  )

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'outline' }}
        />
      )}
    </div>
  )

  const socialProofElement = socialProof && (
    <p className="text-slate-500 text-xs font-medium">{socialProof}</p>
  )

  const mediaElement = images?.length ? (
    <ImageFan
      images={images}
      imageAlts={imageAlts}
      names={resolvedNames.length ? resolvedNames : undefined}
      titles={resolvedTitles.length ? resolvedTitles : undefined}
      cardAspect={vs.fanCard}
      animate={animate}
    />
  ) : null

  return (
    <section className="bg-white dark:bg-slate-900 relative isolate w-full overflow-hidden">
      {showParticles && showParticles !== 'false' && (
        <ParticlesBg color={particlesColor} count={45} speed={0.8} />
      )}
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={cn(
            'flex w-full max-w-2xl flex-col items-center',
            vs.header,
          )}
        >
          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal active={animate} className="flex flex-col items-center gap-4">
          {ctasElement}
          {socialProofElement}
        </Reveal>

        <div className={cn('mx-auto w-full', vs.fan)}>{mediaElement}</div>
      </motion.div>
    </section>
  )
}

export default Hero10;
