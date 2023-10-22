import type { SVGProps } from "react";
import { memo } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={38}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeWidth={2}
      d="m3.406 27.196 23-17M26.429 26.821l-23-16"
    />
  </svg>
);
const Memo = memo(SvgClose);
export default Memo;
