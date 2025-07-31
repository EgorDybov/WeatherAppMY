import type { IIconSize } from "./types";


export default function Overcast({width = 119, height = 119}: IIconSize) {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.32"
      d="M40.8 29.2C44.7768 29.2 48 25.9768 48 22C48 18.0232 44.7768 14.8 40.8 14.8H40.7256C40.7736 14.4064 40.8 14.0056 40.8 13.6C40.8 8.2984 36.5016 4 31.2 4C27 4 23.4288 6.6976 22.128 10.4536C21.204 10.1584 20.2224 10 19.2 10C13.8984 10 9.59998 14.2984 9.59998 19.6C9.59998 24.9016 13.8984 29.2 19.2 29.2C20.028 29.2 20.832 29.0944 21.6 28.8976V29.2H40.8Z"
      fill="#73A5E6"
    />
    <path
      d="M9.6 41.2C4.2984 41.2 0 36.9016 0 31.6C0 26.2984 4.2984 22 9.6 22C10.6008 22 11.5632 22.1536 12.4704 22.4368C13.8216 18.016 17.9352 14.8 22.8 14.8C28.764 14.8 33.6 19.636 33.6 25.6C33.6 26.164 33.5568 26.716 33.4728 27.256C34.26 26.9608 35.1096 26.8 36 26.8C39.9768 26.8 43.2 30.0232 43.2 34C43.2 37.9768 39.9768 41.2 36 41.2H9.6Z"
      fill="url(#paint0_linear_38654_52)"
    />
    <path
      d="M12 25.6C12 31.564 16.836 36.4 22.8 36.4C28.2024 36.4 32.676 32.4352 33.4728 27.256C34.26 26.9608 35.1096 26.8 36 26.8C39.9768 26.8 43.2 30.0232 43.2 34C43.2 37.9768 39.9768 41.2 36 41.2H9.6C4.2984 41.2 0 36.9016 0 31.6C0 26.2984 4.2984 22 9.6 22C10.6008 22 11.5632 22.1536 12.4704 22.4368C12.1632 23.4376 12 24.4984 12 25.6Z"
      fill="url(#paint1_radial_38654_52)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_38654_52"
        x1="21.6"
        y1="14.8"
        x2="21.6"
        y2="41.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9FC7FF" />
        <stop offset="1" stop-color="#9BC1F5" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_38654_52"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.7327 -31.6359) rotate(-90) scale(25.1489 8.03646)"
      >
        <stop stop-color="#486DA8" stop-opacity="0.4" />
        <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
  )
}
