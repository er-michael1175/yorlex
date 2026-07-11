"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/components/hooks";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  tags?: string[];
  variant?: "large" | "tall" | "standard" | "featured";
  status?: { label: string; active: boolean };
  illustration?: React.ReactNode;
}

/**
 * Resolves grid span classes based on the card variant.
 */
function getGridClasses(variant: ServiceCardProps["variant"]): string {
  switch (variant) {
    case "large":
      return "md:col-span-8";
    case "tall":
      return "md:col-span-4 md:row-span-2";
    case "featured":
      return "md:col-span-4";
    case "standard":
    default:
      return "md:col-span-4";
  }
}

/**
 * Resolves variant-specific color classes for the card.
 */
function getVariantClasses(variant: ServiceCardProps["variant"]): string {
  if (variant === "featured") {
    return "bg-brand-purple text-brand-text";
  }
  return "bg-white text-brand-text";
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  tags = [],
  variant = "standard",
  status,
  illustration,
}: ServiceCardProps) {
  const { ref, isInView } = useScrollReveal();
  const gridClasses = getGridClasses(variant);
  const variantClasses = getVariantClasses(variant);

  const textContent = (
    <div className="flex flex-col gap-4">
      {/* Icon with animated border-glow container */}
      <motion.div variants={staggerItem}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-brand-border-light transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-brand-purple group-hover:shadow-[0_0_20px_rgba(153,187,43,0.15)]">
          <Icon className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        variants={staggerItem}
        className="font-plus-jakarta text-lg font-semibold tracking-tight"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={staggerItem}
        className={`font-inter text-sm leading-relaxed ${variant === "featured" ? "text-brand-text/70" : "text-text-secondary"}`}
      >
        {description}
      </motion.p>

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-text-tertiary transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-brand-purple"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}

      {/* Status indicator */}
      {status && (
        <motion.div variants={staggerItem} className="flex items-center gap-2 mt-2">
          <span
            className={`w-2 h-2 rounded-full ${status.active ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
          />
          <span className={`text-xs ${variant === "featured" ? "text-brand-text/70" : "text-text-tertiary"}`}>
            {status.label}
          </span>
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className={gridClasses}
      variants={staggerItem}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <a
        href={href}
        className={`group relative block border border-brand-border-light rounded-2xl overflow-hidden p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${variantClasses}`}
      >
        {/* Animated top-border reveal on hover */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-purple origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

        {/* Stagger-reveal children */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`flex ${variant === "large" ? "flex-col md:flex-row md:items-center justify-between gap-8" : "flex-col gap-6"}`}
        >
          <div className={variant === "large" ? "md:w-1/2 flex flex-col gap-4" : "w-full"}>
            {textContent}
          </div>
          {illustration && (
            <div className={variant === "large" ? "md:w-1/2 w-full mt-4 md:mt-0 relative z-10" : "w-full relative z-10"}>
              {illustration}
            </div>
          )}
        </motion.div>
      </a>
    </motion.div>
  );
}
