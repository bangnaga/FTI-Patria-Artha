'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import { cn } from '../../lib/utils';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

export function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        if (size === 0) return;

        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        const distanceToTravel = Math.abs(to - from);
        const duration = distanceToTravel / currentSpeed;

        if (isTransitioning) {
            const remainingDistance = Math.abs(translation.get() - to);
            const transitionDuration = remainingDistance / currentSpeed;
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: transitionDuration,
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speedOnHover);
              },
              onHoverEnd: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speed);
              },
          }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number;
    containerClassName?: string;
};

export function BlurredInfiniteSlider({
    children,
    fadeWidth = 80,
    containerClassName,
    ...sliderProps
}: BlurredInfiniteSliderProps) {
    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    };

    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}
        >
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    );
}

export interface LogoCloudProps {
    title?: string;
    logos?: { src: string; alt: string; height: number }[];
}

export function LogoCloud({ title = "Your favorite companies are our partners.", logos }: LogoCloudProps) {
    const defaultLogos = [
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/openai.1785940836015.svg", alt: "OpenAI Logo", height: 24 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/nvidia.1785940836015.svg", alt: "Nvidia Logo", height: 20 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/column.1785940836015.svg", alt: "Column Logo", height: 16 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/github.1785940836015.svg", alt: "GitHub Logo", height: 16 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/nike.1785940836015.svg", alt: "Nike Logo", height: 20 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/lemonsqueezy.1785940836015.svg", alt: "Lemon Squeezy Logo", height: 20 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/laravel.1785940836015.svg", alt: "Laravel Logo", height: 16 },
        { src: "https://cdn.21st.dev/larsen66/logo-cloud/assets/lilly.1785940836015.svg", alt: "Lilly Logo", height: 28 },
    ];
    
    const displayLogos = logos && logos.length > 0 ? logos : defaultLogos;

    return (
        <section className="bg-white dark:bg-slate-900 overflow-hidden py-16 w-full">
            <div className="m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {title}
                        </p>
                    </div>
                    <div className="w-full py-6 md:w-auto md:flex-1">
                        <BlurredInfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}
                            fadeWidth={80}
                        >
                            {displayLogos.map((logo) => (
                                <div key={logo.src} className="flex">
                                    <img
                                        className="mx-auto w-fit dark:invert"
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{ height: `${logo.height}px` }}
                                        width="auto"
                                    />
                                </div>
                            ))}
                        </BlurredInfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogoCloud;
