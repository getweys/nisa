"use client";

import { useLanguage } from "contexts/language-context";
import type { JSX } from "react";

interface TextProps {
  path: string;
  params?: Record<string, string>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Text({
  path,
  params,
  className,
  as: Component = "span",
}: TextProps) {
  const { t } = useLanguage();

  return <Component className={className}>{t(path, params)}</Component>;
}
