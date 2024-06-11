import React from 'react';
import type { SVGProps } from 'react';
import { PinTopIcon } from '@radix-ui/react-icons';
export function AngularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <linearGradient
        id="deviconAngular0"
        x1={14.704}
        x2={110.985}
        y1={46.27}
        y2={92.024}
        gradientTransform="matrix(1 0 0 -1 0 130)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e40035"></stop>
        <stop offset={0.24} stopColor="#f60a48"></stop>
        <stop offset={0.352} stopColor="#f20755"></stop>
        <stop offset={0.494} stopColor="#dc087d"></stop>
        <stop offset={0.745} stopColor="#9717e7"></stop>
        <stop offset={1} stopColor="#6c00f5"></stop>
      </linearGradient>
      <path
        fill="url(#deviconAngular0)"
        d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
      ></path>
      <linearGradient
        id="deviconAngular1"
        x1={28.733}
        x2={91.742}
        y1={117.071}
        y2={45.195}
        gradientTransform="matrix(1 0 0 -1 0 130)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ff31d9"></stop>
        <stop offset={1} stopColor="#ff5be1" stopOpacity={0}></stop>
      </linearGradient>
      <path
        fill="url(#deviconAngular1)"
        d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
      ></path>
    </svg>
  );
}
