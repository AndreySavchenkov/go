import type { SVGProps } from "react";
import { memo } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={38}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      filter="url(#menu_svg__a)"
    >
      <path d="M4.75 11.021h22.5M4.75 18.893h22.5M4.75 26.766h22.5" />
    </g>
    <defs>
      <filter
        id="menu_svg__a"
        width={32}
        height={25.245}
        x={0}
        y={10.271}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_84_190" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_84_190"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(SvgMenu);
export default Memo;
