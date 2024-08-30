import React from 'react';
import type { CodeProps } from './code';
import { cn } from '../../lib/cn';
const DEFAULT_LANGUAGE_CLASS = 'language-bash';

export function parseTitleFromMeta(meta?: string): string {
  if (!meta) {
    return '';
  }
  let result = meta;
  const highlightReg = /{[\d,-]*}/i;
  const highlightMeta = highlightReg.exec(meta)?.[0];
  if (highlightMeta) {
    result = meta.replace(highlightReg, '').trim();
  }
  result = result.split('=')[1] ?? '';
  return result?.replace(/["'`]/g, '');
}

export function PreCode({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement[] | React.ReactElement;
}) {
  const renderChildren = (children: React.ReactElement) => {
    const { className: title, meta } = children.props as CodeProps;
    const codeTitle = parseTitleFromMeta(meta);
    return (
      <div
        className={cn(
          title || DEFAULT_LANGUAGE_CLASS,
          className,
          'bg-[var(--rp-c-dark-light-2)] py-2 pb-6 px-4 overflow-x-scroll'
        )}
      >
        {codeTitle && <div>{codeTitle}</div>}
        <div>{children}</div>
      </div>
    );
  };

  if (Array.isArray(children)) {
    return (
      <div className="inline-flex overflow-scroll">
        {children.map((child) => renderChildren(child))}
      </div>
    );
  }
  return renderChildren(children);
}
