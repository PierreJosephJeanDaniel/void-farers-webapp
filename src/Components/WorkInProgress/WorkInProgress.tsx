import React from "react";
import "./WorkInProgress.css";

const WorkInProgress: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603 359">
    <defs>
      <style>
        {
          "@font-face{font-family:Excalifont;src:url(data:font/woff2;base64,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)}"
        }
      </style>
    </defs>
    <path
      fill="#00ff00"
      d="m24.744 21.517 1.45 10.01q1.45 10.03 2.78 20.25 1.33 10.23 2.62 20.51 1.29 10.28 2.22 21.66.93 11.38 1.7 21.63.77 10.26 1.1 20.61.32 10.36.46 21.2.13 10.84.54 22.81.4 11.97.57 23.03.17 11.06-.08 18.23-.26 7.18-.66 12.16-.41 4.99-.98 9.09-.58 4.1-1.42 9.66-.83 5.57-1.43 9.83t-.98 7.99q-.39 3.74-.47 7.13-.08 3.4-.64 7.38-.56 3.99-.69 6.31-.13 2.32-.52 6.14-.4 3.82-.62 4.44-.22.61-.63 1.13-.4.51-.95.87-.55.35-1.18.51-.63.17-1.29.12-.65-.05-1.25-.3-.61-.26-1.1-.69-.49-.43-.81-1-.33-.57-.46-1.21-.12-.64-.04-1.29.08-.65.37-1.23.29-.59.74-1.06.46-.46 1.05-.76.58-.3 1.23-.39.65-.09 1.29.03t1.21.43q.58.32 1.02.8.44.49.7 1.09.26.6.32 1.25t-.1 1.28q-.15.64-.5 1.19-.34.56-.85.97-.51.41-1.12.65-.61.23-1.27.25-.65.02-1.28-.17-.62-.18-1.16-.56-.53-.38-.92-.91-.38-.53-.58-1.15-.2-.62-.18-1.28l.01-.65.82-3.62q.83-3.62 1.38-5.87.55-2.25 1.12-5.96.57-3.71.91-7.3.33-3.58.92-7.31.59-3.72 1.17-8.01.58-4.29 1.39-9.87.81-5.58 1.45-9.49.65-3.9 1.04-8.77.39-4.86.64-11.9.25-7.03.07-18.04-.18-11.02-.61-23.04-.42-12.03-.57-22.82-.15-10.79-.5-21.02-.34-10.23-1.15-20.47-.81-10.23-1.78-21.48-.97-11.24-2.33-21.5t-2.78-20.43q-1.42-10.16-2.99-20.16-1.58-10.01-1.6-10.38-.01-.37.07-.74t.25-.7q.16-.34.4-.63.25-.29.55-.51.3-.23.65-.37.35-.15.72-.2.37-.06.74-.02.37.03.73.15.35.13.67.33.32.21.57.48.26.28.45.6.18.33.28.69l.1.37Z"
    />
    <path
      fill="#00ff00"
      d="m13.17 19.191 1.05 2.55q1.06 2.56 2.01 6.22.95 3.66 1.82 7.08.86 3.43 1.82 10.49.96 7.06 2.86 20.43 1.91 13.37 3.52 29.6 1.61 16.22 3.06 31.04 1.45 14.83 2.06 29.67.6 14.84.84 33.59.25 18.74.74 34.62.49 15.88 1.04 28.06.56 12.17.79 19.28.23 7.11.33 15.03.09 7.92.13 15.71.04 7.79.2 13.48.17 5.69.38 10 .22 4.31.57 6.82.34 2.5.52 5.26t.11 3.3q-.08.54-.32 1.03-.25.48-.64.86-.38.39-.87.63t-1.03.31q-.54.07-1.07-.04-.54-.1-1.01-.37t-.83-.68q-.36-.41-.58-.91-.21-.5-.25-1.04-.04-.55.09-1.07.14-.53.43-.99.3-.46.72-.79.43-.34.94-.53.51-.18 1.06-.19.54-.02 1.06.15.52.16.96.48.44.32.76.76.31.45.47.97.16.52.14 1.06-.02.55-.21 1.06t-.53.93q-.35.42-.81.71-.46.29-.99.42t-1.07.08q-.54-.05-1.04-.26-.5-.22-.9-.59-.4-.36-.67-.84-.26-.47-.36-1.01l-.1-.53.04-2.72q.04-2.71.19-5.2.16-2.49-.07-6.86-.22-4.36-.4-10.12-.17-5.75-.22-13.52-.05-7.77-.16-15.63-.11-7.87-.37-14.94-.25-7.07-.84-19.29-.59-12.21-1.13-28.14-.54-15.93-.84-34.59-.3-18.66-.98-33.33-.68-14.67-2.25-29.47-1.57-14.81-3.32-30.87-1.75-16.06-3.87-29.38t-3.32-20.02q-1.19-6.71-1.99-10.1-.8-3.38-1.66-6.77-.87-3.38-1.61-6.05-.74-2.66-.83-3.06-.08-.4-.07-.79.01-.41.12-.8.11-.39.31-.74t.48-.65q.28-.29.62-.51.34-.22.72-.35.39-.13.79-.17.39-.03.79.03t.78.22q.37.15.7.39.32.24.58.55.26.32.44.68l.17.37v-.01Z"
    />
    <path
      fill="#00ff00"
      d="m13.074 30.439 3.3-.8q3.31-.8 11.38-1.42 8.08-.61 25.45-1.7 17.38-1.1 48.81-2.42 31.43-1.32 60.3-2.31 28.86-.99 58.87-1.87 30-.88 60.3-1.24 30.3-.37 61.62-1.38 31.32-1.01 55.64-1.43 24.33-.43 44.11-1.01 19.78-.57 34.15-.82 14.37-.24 24.86-.69 10.5-.45 19.3-1.21 8.79-.75 13.13-1.08 4.33-.32 6.47-.72 2.14-.39 4.17-.75t2.56-.33q.54.02 1.04.21.51.2.92.54.41.35.69.8.29.46.41.99.12.52.07 1.06-.06.53-.28 1.02-.22.49-.59.89-.36.39-.83.65-.48.25-1.01.35-.53.09-1.06.01t-1.01-.33q-.48-.25-.85-.64-.37-.38-.6-.87-.24-.49-.3-1.02t.05-1.06q.11-.53.38-.99.27-.46.68-.82.41-.35.91-.55.49-.21 1.03-.24.54-.04 1.06.1t.96.44q.45.3.78.72.33.43.51.94.18.5.18 1.04.01.54-.16 1.05t-.49.94q-.32.44-.76.74-.44.31-.96.46l-.52.15-2.22.2q-2.21.2-4.36.08-2.15-.12-6.45.21-4.3.32-13.21 1.09t-19.48 1.23q-10.56.47-24.9.72-14.34.25-34.15.85-19.81.59-44.09 1.04-24.28.45-55.65 1.49-31.38 1.04-61.63 1.45-30.25.41-60.24 1.34-29.98.94-58.82 2.01-28.84 1.07-60.2 2.49-31.35 1.43-48.66 2.67-17.3 1.23-24.95 1.99-7.65.76-11 1.37-3.34.61-3.73.64-.37.03-.75-.03-.38-.05-.73-.2-.36-.15-.67-.38-.31-.23-.55-.52-.25-.3-.42-.65-.16-.34-.24-.72-.08-.37-.07-.75.01-.38.12-.75.1-.37.29-.71.19-.33.46-.61.26-.28.58-.49.33-.21.69-.33l.36-.13Z"
    />
    <path
      fill="#00ff00"
      d="m550.5 11.937.72 3.03q.72 3.05 1.21 12.98.49 9.94 1.06 24.56.58 14.63.8 25.85.22 11.22.29 33.98.08 22.76.09 44.91.02 22.15.42 39.49.39 17.34.55 31.18.17 13.83.23 26.16t.09 23.45q.02 11.13-.12 16.35-.15 5.21-.17 7.85-.02 2.63-.28 4.66-.25 2.03-.45 2.55-.19.52-.55.95-.35.43-.82.73-.47.29-1.01.42t-1.1.08q-.55-.05-1.06-.27-.51-.23-.92-.6-.41-.38-.68-.86-.27-.49-.37-1.04-.1-.55-.02-1.1t.33-1.04q.25-.5.65-.89.39-.39.89-.63.5-.25 1.06-.32.55-.07 1.09.04.55.11 1.03.39t.85.69q.37.42.58.93.22.52.26 1.07.04.56-.1 1.1t-.44 1q-.3.47-.74.81-.44.35-.96.54-.53.18-1.08.19-.56.01-1.09-.15-.53-.17-.98-.5-.45-.33-.77-.78-.32-.46-.48-.99-.16-.53-.14-1.09l.02-.56.49-1.68q.49-1.68.99-4.05.5-2.38.63-7.52.13-5.13.09-16.25-.04-11.12-.13-23.43t-.29-26.11q-.19-13.81-.64-31.21-.44-17.39-.53-39.54-.08-22.14-.24-44.84-.17-22.7-.51-33.86-.34-11.15-1.07-25.73-.75-14.57-1.41-24.05-.67-9.48-1.11-12.58-.44-3.09-.47-3.47-.03-.38.04-.76t.22-.73q.16-.36.4-.66.23-.31.54-.55.3-.24.65-.4.35-.16.73-.23t.76-.05q.38.02.75.13t.71.31q.33.2.6.47.28.27.48.6.2.33.32.7l.12.37h-.01ZM74.428 346.5l3.63-1.56q3.64-1.56 13.76-4.73 10.12-3.18 20.49-5.37 10.38-2.2 27.41-3.54 17.02-1.34 34.72-1.89 17.7-.54 37.2-.77 19.51-.22 51.38 1.03 31.86 1.25 63.47 4.04 31.61 2.8 62.03 5.33 30.42 2.53 58.3 3.6 27.88 1.07 56.16.74 28.27-.34 44.19-1.12 15.93-.79 23.55-1.57 7.62-.78 11.16-1.35 3.53-.56 6.04-1.24 2.52-.68 3.05-.69.53-.01 1.04.14.51.16.94.47.43.31.74.74.31.44.46.95.16.5.14 1.04-.01.53-.2 1.03-.18.5-.51.91-.34.41-.79.7-.44.28-.96.41-.52.13-1.05.09-.53-.05-1.01-.26-.49-.21-.89-.57-.39-.35-.65-.82-.27-.46-.36-.98-.1-.52-.03-1.05t.31-1q.24-.48.61-.85.38-.38.86-.62.47-.23 1-.3.53-.07 1.05.03t.98.36q.47.26.82.66t.56.89q.21.49.26 1.02.04.53-.09 1.04-.13.52-.42.96-.29.45-.7.78-.42.34-.92.52l-.49.18-2.78.33q-2.77.33-6.39.64-3.62.31-11.38 1.1-7.76.8-23.78 1.59-16.02.8-44.43 1.14-28.41.34-56.41-.73-28-1.07-58.43-3.58-30.44-2.52-61.92-5.28-31.48-2.77-63.21-3.99-31.72-1.22-51.17-.96-19.45.27-37.02.86-17.56.6-34.2 1.96-16.64 1.35-26.71 3.58-10.07 2.22-19.86 5.42-9.79 3.2-13.43 4.75-3.64 1.57-4.01 1.68-.36.1-.74.12-.37.02-.74-.06-.37-.07-.72-.24-.34-.16-.64-.4-.29-.24-.52-.54-.23-.3-.38-.65-.15-.35-.21-.72-.06-.38-.03-.75.03-.38.15-.74t.32-.68q.2-.32.47-.58.28-.27.6-.46l.33-.19Z"
    />
    <path
      fill="#00ff00"
      d="m63.006 338.76 4.92-2.45q4.93-2.45 15.11-6.09 10.18-3.64 21.54-6.32 11.35-2.69 24.23-4.19 12.88-1.49 29.37-2.11 16.49-.63 49.06 0 32.58.62 61.38.89 28.81.27 55.55.38 26.75.12 53.13.17 26.37.05 55.56.08 29.19.02 51.56.03 22.38.01 39.34.02 16.96.01 28.1.01h18.89q7.75.01 11.45-.11 3.71-.12 7.19-.68 3.47-.57 4.02-.65.55-.08 1.1.02t1.04.37q.48.27.86.68.38.41.6.92.23.51.28 1.06.05.55-.08 1.1-.13.54-.43 1.01-.29.47-.72.82-.43.36-.95.55-.52.2-1.08.22-.55.02-1.09-.13-.53-.16-.99-.48-.45-.32-.78-.77t-.5-.98q-.17-.53-.16-1.09.01-.55.2-1.08.18-.52.53-.96.34-.44.81-.74.46-.31 1-.45t1.1-.1q.55.04 1.07.26.51.21.93.58.42.37.69.85.28.48.39 1.03.11.54.04 1.09-.07.56-.31 1.06t-.63.9q-.39.39-.89.65l-.49.25-4.52.15q-4.52.15-8.23.04-3.7-.12-11.46-.12H523.756q-16.96 0-39.34-.01-22.38 0-51.57-.02t-55.57-.06q-26.38-.04-53.14-.14t-55.59-.35q-28.83-.25-61.25-.85-32.42-.59-48.69.05-16.28.64-28.82 2.13-12.55 1.49-23.58 4.15-11.03 2.67-20.83 6.25-9.8 3.59-14.66 6.15-4.87 2.57-5.22 2.7-.36.13-.73.17-.37.04-.74-.01t-.72-.19q-.35-.13-.66-.35-.31-.22-.56-.5-.24-.29-.42-.62-.17-.34-.25-.7-.09-.37-.09-.74.01-.37.1-.74.09-.36.27-.69.18-.34.43-.61.26-.28.57-.5l.31-.21ZM551.13 9l1.8 5.5q1.8 5.51 2.87 9.87 1.07 4.36 2.04 8.61.96 4.25 2.19 12.6 1.23 8.36 2.87 19.76 1.63 11.41 2.64 18.21 1.01 6.8 2.2 17.2 1.18 10.39 2.36 19.19 1.17 8.8 2.08 19.05.92 10.25 1.7 20.99.78 10.75 1.12 17.24.33 6.49.71 13.67.38 7.17.78 12.1.39 4.92.57 9.5.17 4.57 0 11.45-.16 6.88-.23 11.17-.07 4.28.09 7.51.15 3.22.09 7.5-.06 4.28.16 6.71.22 2.44.3 4.59.08 2.16-.01 2.72-.1.56-.37 1.07-.26.5-.68.89-.41.39-.93.63t-1.09.3q-.56.06-1.12-.06t-1.05-.42q-.48-.29-.85-.73-.37-.43-.58-.96-.21-.53-.24-1.1-.03-.57.12-1.12.16-.55.48-1.02.32-.48.77-.82.46-.34 1-.53.54-.18 1.11-.18.57 0 1.11.19.54.18.99.53.46.34.78.82.32.47.47 1.02.15.55.12 1.12-.04.57-.25 1.1-.21.53-.58.96-.37.43-.86.73-.49.29-1.05.41-.55.12-1.12.06-.57-.06-1.08-.3-.52-.24-.94-.64-.41-.39-.67-.89-.27-.51-.36-1.07l-.09-.56.08-2.16q.09-2.16.32-4.59.24-2.44.2-6.74-.04-4.3.18-7.54.22-3.23.29-7.54.07-4.3.23-11.02.17-6.72 0-11.18-.17-4.47-.57-9.46-.41-5-.79-12.17l-.72-13.62q-.33-6.44-1.12-17.14t-1.7-20.83q-.91-10.13-2.11-18.98-1.19-8.85-2.38-19.15-1.19-10.29-2.24-17.1-1.04-6.82-2.71-18.2-1.66-11.39-2.91-19.51-1.24-8.12-2.26-12.3-1.02-4.17-2.12-8.29-1.1-4.12-3.01-9.58-1.93-5.47-2.01-5.84-.08-.37-.06-.73.01-.38.11-.74t.29-.69q.19-.33.45-.6.26-.27.57-.48.32-.2.68-.32.35-.12.73-.16.36-.03.74.03.37.06.72.21.34.14.65.37.3.22.54.51.24.29.4.63l.16.34Z"
    />
    <text
      y={31.716}
      fill="#00ff00"
      dominantBaseline="alphabetic"
      fontFamily="Excalifont, Xiaolai, Segoe UI Emoji"
      fontSize={36}
      style={{
        whiteSpace: "pre",
      }}
      transform="translate(89.95 72.898)"
    >
      {"Work in progress . . ."}
    </text>
    <path
      fill="#00ff00"
      d="m109.005 177.065 2.82-1.04q2.84-1.03 8.97-2.82 6.13-1.79 13.33-3.23 7.19-1.44 16.27-2.39 9.09-.95 20.4-1.71 11.3-.76 31.62-1.08 20.32-.31 40.92-.43t38.32-.16q17.72-.05 38.25-.06 20.52-.01 42.13-.85 21.62-.84 37.76-1.61 16.14-.77 27.93-1.48 11.78-.71 21.26-1.01 9.49-.3 17.45-.43 7.96-.13 13.25-.18 5.29-.05 8.2-.3 2.9-.25 5.34-.45 2.43-.19 4.53 1.12t2.77 3.68q.67 2.36 1.11 5.25.45 2.9.56 7.11.11 4.22 1.14 14.37 1.02 10.15 1.77 19.48.76 9.32 1.31 14.9.56 5.57 1.12 8.08.57 2.5 1.33 4.77.77 2.27 1.18 4.53.42 2.26-2.88 5.18t-9.95 3.27q-6.64.36-19.33.37-12.69.01-24.42.3-11.73.3-24.73.36-13 .07-24.97.06-11.96-.01-25.5-.05-13.55-.03-33.25-.07-19.7-.04-36.03-.07-16.32-.03-31.21-.06l-28.67-.04q-13.78-.02-26.08-.03-12.3-.02-23.92-.03-11.61-.01-17.96-.02-6.34 0-9.59.18-3.24.18-5.6.53-2.36.34-4.57.68-2.21.34-5.05 1.19-2.83.85-4.88 1.41-2.05.56-4.38 1.07t-5.21 1.25q-2.88.73-5.23 1.07-2.36.33-5.46.47-3.1.13-5.38.37-2.28.25-4.96.53-2.69.29-5.08.66-2.4.37-6.12-.62-3.73-.99-5.68-3.83-1.94-2.85-2.03-5.97-.09-3.12.97-11.39 1.05-8.26 2.04-16.93.99-8.68 1.55-13.98.56-5.3 1.17-9.17.61-3.86 1.05-6.67.44-2.81.66-5.22.21-2.42-.67-1.79-.87.63-1.56.17-.69-.46-1.19-1.12-.5-.65-.77-1.44-.27-.78-.27-1.61 0-.81.26-1.6.26-.78.76-1.44.49-.66 1.18-1.13.68-.47 1.48-.69.79-.23 1.61-.19.83.05 1.6.35.77.3 1.4.84.63.53 1.06 1.24.43.7.61 1.51t.09 1.62q-.08.82-.43 1.58-.34.75-.91 1.35-.57.6-1.29.99-.73.4-1.55.53-.82.14-1.62.01-.82-.13-1.55-.52-.74-.38-1.31-.98-.57-.6-.92-1.35-.35-.75-.44-1.57-.09-.81.08-1.62.18-.81.6-1.52.43-.71 1.05-1.25.63-.54 1.4-.85.77-.31 1.59-.35.82-.05 1.62.17l.8.22q-.01 0 2.79 1.84t3.43 5.12q.63 3.3.02 5.41-.62 2.12-1.21 4.67-.58 2.55-.96 6.06-.39 3.52-.35 8.95.04 5.44-.17 14.21-.22 8.77-.35 15.95-.14 7.18.09 9.63.22 2.44-1.09.62-1.31-1.83 1.22-2.08 2.53-.25 5.1-.34 2.56-.09 5.01-.18 2.46-.08 5.35.02 2.88.11 5.22-.05 2.33-.16 4.94-.4 2.61-.25 5.38-.54 2.78-.29 5.17-.52 2.4-.23 4.95-.43 2.56-.21 4.77.13 2.21.34 4.57.69 2.36.35 5.6.53 3.25.18 9.59.17 6.35 0 17.96-.02l23.92-.02q12.3-.02 26.07-.04 13.78-.02 28.68-.05 14.89-.03 31.21-.08 16.33-.04 36.02-.11 19.7-.07 33.23-.18 13.52-.1 25.46-.29 11.93-.18 24.84-.52 12.9-.33 24.7-.99 11.8-.66 24.15-1.14 12.35-.48 18.18-.53 5.83-.05 5.56-2.79-.28-2.75-.5-5.41-.22-2.66-1.03-8.28-.81-5.62-1.9-14.82-1.08-9.2-2.57-19.42-1.49-10.21-2.18-14.39-.69-4.17.77-7.45 1.46-3.29-.71-3.75-2.17-.46-5.07-.66-2.9-.2-8.18-.14-5.28.05-13.19.18-7.92.14-17.33.44-9.41.31-21.23 1.03-11.81.72-27.98 1.51-16.16.78-37.88 1.64-21.71.86-42.23.9-20.52.04-38.23.12-17.71.08-38.28.25-20.57.17-40.74.54-20.16.38-31.34 1.22-11.19.85-19.96 1.88-8.77 1.02-15.63 2.56-6.85 1.54-12.93 3.56-6.07 2.02-9 2.76-2.92.73-3.3.8-.38.07-.76.05-.39-.03-.76-.14-.36-.12-.69-.32-.34-.2-.61-.48-.27-.27-.47-.61-.2-.33-.31-.7-.12-.37-.14-.75-.02-.38.05-.76t.23-.73q.16-.36.4-.66.24-.3.55-.54.3-.24.66-.4l.35-.16v.01Z"
    />
    <path
      fill="#00ff00"
      d="m140.459 179.28.33 2.83q.33 2.84-.06 6.07-.38 3.23-1.9 6.94-1.52 3.71-3.44 6.96-1.93 3.25-3.85 6.04-1.91 2.78-3.5 5.4-1.59 2.62-3 6.01-1.42 3.39-1.84 4.06-.42.68-1.03 1.18-.61.5-1.35.79-.74.28-1.53.31-.79.03-1.55-.19t-1.41-.67q-.65-.46-1.12-1.09-.47-.64-.71-1.39-.24-.75-.23-1.55.01-.79.27-1.53.27-.75.75-1.37.49-.63 1.15-1.06.66-.44 1.43-.64.76-.2 1.55-.15.79.06 1.52.36t1.33.82q.6.52 1 1.21.39.68.55 1.46.16.77.07 1.56-.1.78-.44 1.5-.34.71-.89 1.28-.56.56-1.26.92-.71.37-1.49.48-.78.12-1.56-.02-.78-.14-1.47-.52-.7-.38-1.23-.96-.54-.58-.86-1.3-.32-.73-.4-1.51-.07-.79.11-1.56l.18-.77 2.08-3.85q2.09-3.85 3.8-6.69 1.71-2.85 3.41-5.35 1.71-2.5 3.22-5.22 1.51-2.73 2.99-7.44 1.48-4.72 1.19-7.52-.29-2.79-.28-3.36.01-.57.15-1.13.14-.56.42-1.06.27-.51.66-.93.38-.43.86-.75t1.02-.52q.54-.2 1.11-.26.56-.06 1.13.01.57.08 1.1.29.54.21 1.01.54.47.33.84.77.38.43.64.94t.4 1.07l.13.56ZM167.837 184.657l-.97 3.18q-.97 3.19-3.29 7.76-2.33 4.57-5.5 11.24-3.16 6.67-5.95 11.7-2.79 5.04-5.59 10.51-2.81 5.47-4.24 8.54-1.42 3.08-2.95 5.75-1.53 2.68-1.93 3.08-.4.4-.91.65-.5.25-1.06.32-.56.08-1.12-.03-.55-.1-1.04-.38t-.87-.7q-.38-.42-.6-.94-.23-.51-.27-1.08-.05-.56.09-1.11.13-.55.44-1.02.3-.48.74-.83t.97-.55q.53-.19 1.1-.21.56-.02 1.1.15.54.17 1 .5.46.32.79.78t.49 1q.17.54.15 1.1-.01.57-.21 1.1-.19.53-.55.97-.35.44-.82.74-.48.31-1.03.44-.55.14-1.11.09-.56-.04-1.08-.26-.52-.23-.94-.6-.42-.38-.7-.87-.27-.49-.38-1.05-.11-.55-.03-1.11.07-.56.33-1.07l.25-.5 1.43-2.13q1.43-2.13 3.06-5.07 1.63-2.95 4.34-8.56t5.21-10.55q2.5-4.94 5.42-11.77 2.92-6.83 4.7-11.06 1.77-4.22 2.77-7.39 1-3.16 1.2-3.61.2-.44.5-.83.3-.39.69-.69.39-.3.83-.51.45-.2.93-.29.48-.08.96-.06.49.03.96.18.47.14.89.4.42.25.77.6.34.34.6.76.25.42.4.89.15.47.18.96.03.48-.06.96l-.09.48ZM196.761 187.55l-1.51 3.82q-1.51 3.83-4.02 9.9-2.52 6.08-6.3 14.24-3.78 8.17-9.33 15.95-5.56 7.78-10.33 12.86-4.77 5.08-7.06 7.62-2.3 2.54-3.81 4.79-1.51 2.25-2.53 3.67-1.03 1.41-1.51 1.86-.47.45-1.06.72-.6.27-1.25.34t-1.28-.07q-.64-.14-1.2-.48-.56-.34-.98-.84-.42-.5-.66-1.1-.24-.61-.28-1.26-.03-.65.15-1.28.17-.63.54-1.17.37-.54.89-.93.52-.4 1.14-.6.62-.21 1.27-.21.66 0 1.27.21.62.21 1.14.61.52.4.89.94.36.54.53 1.17.18.63.14 1.28-.04.65-.28 1.26-.25.6-.67 1.1-.42.5-.98.83-.56.34-1.2.48-.64.13-1.29.06t-1.24-.35q-.59-.27-1.07-.72-.47-.45-.77-1.03-.31-.58-.41-1.22-.1-.65 0-1.29.11-.65.42-1.22l.31-.58 1.1-1.38q1.1-1.38 3.45-3.46 2.34-2.08 4.77-4.37 2.43-2.3 6.86-7.15 4.43-4.84 9.55-12.19 5.11-7.34 8.62-15.42 3.5-8.09 5.7-14.16 2.19-6.08 3.41-10.01 1.23-3.92 1.44-4.35.22-.44.54-.82.31-.37.71-.66.4-.28.85-.47.45-.18.94-.25.48-.07.96-.03.48.05.95.21.46.17.87.44.41.26.74.62t.57.79q.24.43.36.9.13.47.14.96.01.48-.09.96l-.11.48ZM237.243 177.685l-2.21 3.09q-2.19 3.09-3.58 5.38-1.4 2.29-3.87 5.7-2.47 3.4-6.63 9.07-4.15 5.67-7.12 9.67-2.96 3.99-6.54 9.72t-5.84 10.47q-2.26 4.73-4.73 9.74-2.47 5-3.65 7.67-1.17 2.68-4.13 4.97-2.97 2.3-3.43 2.04-.46-.25-.82-.64-.35-.39-.57-.87-.21-.48-.26-1.01-.05-.52.07-1.04.12-.51.4-.96.28-.45.69-.78.41-.34.9-.52.49-.19 1.02-.21.53-.02 1.03.13.51.15.94.45.43.3.75.73.31.42.47.93.16.5.15 1.03-.01.52-.18 1.02-.18.5-.51.91-.32.42-.76.71t-.95.42q-.52.13-1.04.1-.53-.04-1.01-.25-.49-.2-.89-.55-.39-.34-.66-.8-.26-.46-.37-.97-.1-.52-.04-1.04.07-.53.3-1 .22-.48.59-.86.37-.37.84-.61t.99-.32q.53-.08 1.05.02.52.09.51.09l-.98-.73q-.98-.73.53-3.12 1.5-2.4 3.89-7.39 2.4-4.99 4.72-10.06 2.33-5.07 5.93-11.05 3.59-5.98 6.4-10.06 2.81-4.09 6.73-9.83 3.91-5.74 6.15-9.36 2.25-3.61 3.92-5.75 1.67-2.15 3.86-5.26 2.18-3.1 2.47-3.41.28-.32.64-.56.35-.23.75-.38t.82-.19q.42-.05.84.01.42.05.82.21.39.15.74.4t.63.57q.28.32.47.7.19.38.29.8.1.41.09.83 0 .42-.11.83-.11.42-.31.79l-.2.38ZM273.535 181.642l-1.04 2.04q-1.04 2.03-2.21 4.28-1.16 2.26-3.12 4.99-1.95 2.74-4.5 5.83-2.55 3.1-6.02 7.99-3.47 4.88-7.37 10.71-3.91 5.83-6.84 10.6-2.93 4.77-4.2 7.32-1.27 2.56-3.06 5.1-1.8 2.54-2.31 2.84-.51.29-1.1.41-.58.12-1.17.05-.58-.08-1.12-.34-.53-.25-.95-.67-.43-.41-.7-.94-.27-.53-.35-1.12-.09-.58.02-1.17.1-.58.39-1.1.29-.52.72-.92.44-.4.98-.64.55-.24 1.14-.29.59-.06 1.16.08.58.14 1.08.45.51.32.88.77.38.46.59 1.02.21.55.23 1.14.02.6-.15 1.16-.16.57-.5 1.06-.35.48-.82.83-.48.35-1.05.53-.56.18-1.16.17-.59-.01-1.15-.21-.56-.19-1.02-.56-.47-.37-.79-.86-.33-.5-.47-1.07-.15-.58-.11-1.17.04-.59.27-1.14.23-.55.62-.99l.39-.45 1.02-1.48q1.02-1.48 2.6-3.9 1.57-2.42 4.38-7.41 2.8-5 6.48-11.04 3.67-6.05 6.95-11.38 3.27-5.33 5.49-8.55 2.22-3.22 3.91-5.54t3.06-4.55q1.36-2.22 2.64-4.11 1.28-1.89 1.57-2.28.3-.39.69-.7.38-.31.82-.51.45-.21.93-.31.48-.09.96-.06.5.02.97.16t.89.39q.42.25.77.59.35.35.61.76.26.42.41.89.15.47.19.96.03.48-.05.96t-.28.93l-.2.45ZM310.274 182.036l-3.85 3.67q-3.85 3.66-7.97 7.94-4.12 4.28-7.55 8.54-3.42 4.27-8.52 10.05-5.09 5.78-8.52 9.75-3.44 3.98-5.16 6.25-1.71 2.27-3.18 4.54-1.47 2.26-2.96 4.39-1.48 2.13-2.02 2.57-.55.44-1.21.69-.65.25-1.36.27-.7.03-1.37-.17-.67-.2-1.25-.61-.57-.41-.99-.97-.41-.57-.62-1.24-.21-.67-.2-1.37.02-.7.25-1.37.24-.66.68-1.21.43-.55 1.02-.93.59-.38 1.27-.56.68-.17 1.38-.12.7.05 1.35.32.65.28 1.17.74.53.47.88 1.07.35.61.49 1.3.13.69.04 1.39-.08.69-.39 1.33-.31.63-.8 1.13-.5.5-1.12.82-.63.31-1.32.41-.7.1-1.39-.03-.69-.12-1.31-.46-.61-.35-1.08-.86-.48-.52-.76-1.17-.28-.64-.34-1.34-.06-.7.1-1.38.16-.69.54-1.28l.37-.59 1.73-1.93q1.72-1.93 3.69-3.72 1.98-1.78 3.97-3.75 1.98-1.97 5.35-6.04 3.37-4.08 8.23-9.82 4.87-5.75 8.31-10.37 3.44-4.61 7.42-9.17 3.99-4.56 7.57-8.5 3.57-3.93 3.96-4.24.38-.31.83-.52.45-.21.93-.3.49-.1.97-.07.5.02.97.16.48.14.9.39.43.26.78.6.36.35.62.77.26.42.41.89.15.47.19.96.03.49-.05.97-.08.49-.28.94-.2.46-.5.85l-.3.39ZM341.663 181.698l-1.12 3.01q-1.12 3.01-3.08 6.76-1.97 3.74-4.03 7.06-2.06 3.31-5.38 8.16-3.33 4.84-5.45 7.79-2.13 2.95-3.66 4.91-1.53 1.96-3.05 4.1-1.51 2.15-2.74 4.35-1.23 2.21-3.62 5.03-2.39 2.82-3.23 3.08-.85.27-1.74.25-.89-.02-1.72-.32-.84-.31-1.53-.86-.7-.55-1.18-1.3-.48-.74-.7-1.6-.22-.86-.15-1.75.06-.88.41-1.7t.94-1.48q.59-.67 1.36-1.11.77-.44 1.64-.61.87-.17 1.75-.06.88.12 1.68.51.8.39 1.43 1.01.63.63 1.03 1.42.4.79.52 1.67.13.88-.04 1.75-.16.88-.59 1.65-.44.78-1.09 1.37-.66.6-1.48.96-.81.35-1.69.43-.89.08-1.75-.13-.86-.21-1.62-.69-.75-.47-1.31-1.16t-.87-1.52q-.31-.84-.34-1.72-.02-.89.23-1.74.26-.85.77-1.58.52-.72 1.24-1.24l.71-.52 1.03-1.3q1.03-1.29 2.68-3.16 1.66-1.87 3.59-3.66t3.48-3.25q1.55-1.45 3.6-4.17 2.04-2.71 5.01-7.66 2.96-4.95 4.72-7.97 1.76-3.02 3.25-6.55 1.49-3.54 2.6-6.55t1.35-3.49q.25-.48.6-.89.36-.4.8-.71.44-.31.95-.51.5-.2 1.03-.26.54-.07 1.07-.01.53.06 1.04.25.51.18.95.49.45.3.81.7.36.4.62.88.25.47.38 1 .14.52.14 1.06.01.53-.12 1.06l-.13.52Z"
    />
    <path
      fill="none"
      stroke="#00ff00"
      strokeLinecap="round"
      strokeWidth={2}
      d="M63.414 25.203c93.68-.9 186.45-.86 459.23 0m-459.23 0c104.7.33 209.74.56 459.23 0m0 0c21.65.22 32.63 8.98 32 32m-32-32c21.48-1.11 29.79 11.71 32 32m0 0c-2.97 61.91-2.51 123.52 0 254.55m0-254.55c1.25 51.67.32 102.6 0 254.55m0 0c.52 22.07-11.44 31.42-32 32m32-32c-1.76 20.89-8.41 30.02-32 32m0 0c-121.77-1.2-245.44-2.95-459.23 0m459.23 0c-119.26-.19-239.05-.18-459.23 0m0 0c-23.04-1.69-30.17-10.23-32-32m32 32c-20.99-1.3-32.61-10.19-32-32m0 0c3.53-96.43 2.03-195.99 0-254.55m0 254.55c.92-96.62 1.24-192.3 0-254.55m0 0c1.23-19.6 10.44-31.94 32-32m-32 32c-.09-19.98 11.88-32.92 32-32"
    />
    <path
      fill="#00ff00"
      d="m546.818 28.627-1.35-.05q-1.35-.06-4.84-.33-3.49-.27-5.77-.6-2.29-.33-6.96-1.07t-9.54-1.15q-4.87-.42-10.47-1-5.6-.58-11.29-.88-5.7-.29-10.54-.46-4.84-.16-12.78-.26-7.93-.1-13.3-.45-5.36-.36-9.24-.45-3.88-.08-6.39.08-2.5.17-5.96.17-3.45 0-4.07-.11-.61-.11-1.16-.41-.54-.3-.96-.76-.43-.46-.68-1.03-.25-.57-.31-1.19t.09-1.23q.14-.6.47-1.13.33-.53.81-.93.48-.39 1.06-.62.59-.22 1.21-.24.62-.03 1.22.15t1.11.53q.51.36.88.86.37.51.56 1.1.19.59.18 1.22-.01.62-.22 1.21-.21.58-.59 1.08-.39.49-.91.83-.52.34-1.12.5-.61.15-1.23.11-.62-.04-1.2-.28-.57-.24-1.04-.65-.47-.41-.78-.95-.32-.54-.44-1.15-.12-.61-.05-1.23.08-.62.35-1.18.27-.56.71-1.01.43-.45.99-.73.55-.28 1.17-.37l.62-.09q-.01 0 3.47.44 3.47.44 6 .71 2.53.28 6.47.45 3.95.18 9.16.43 5.21.26 13.18.22 7.98-.03 12.87-.05 4.89-.02 10.75.04 5.86.05 11.35.29 5.49.24 10.61.22 5.13-.02 10.26.18 5.13.2 7.45.69 2.32.49 5.55 1.28 3.24.79 4.54 1.15 1.3.36 1.75.49.46.13.87.36.41.23.75.56.35.32.6.72.26.4.41.85.15.44.19.92.05.46-.03.92-.07.47-.25.91-.18.43-.47.81-.28.38-.64.68-.37.31-.79.51-.43.21-.89.31-.46.09-.93.08l-.47-.02ZM41.769 337.166l8.3-.33q8.31-.33 19.24-1.21 10.94-.88 23.1-1.63 12.16-.74 26.72-1.75 14.57-1 26.2-1.79 11.63-.78 18.52-1.1 6.88-.32 11.99-.45t7.75-.33q2.63-.2 4.53-.38 1.91-.19 2.49-.08.58.1 1.09.38.52.29.92.72.4.44.64.97.24.54.29 1.13.06.59-.08 1.16-.13.57-.45 1.07-.31.5-.76.88-.46.37-1.01.58-.55.21-1.14.23-.59.03-1.15-.14-.57-.16-1.05-.5-.48-.34-.83-.82-.35-.47-.53-1.03-.18-.56-.17-1.15.01-.59.2-1.15.2-.55.57-1.02.36-.46.85-.78t1.06-.47q.57-.15 1.16-.11.59.04 1.13.27.55.22.99.61.44.39.74.9t.41 1.09q.12.57.05 1.16-.07.58-.33 1.11-.25.53-.67.96-.41.42-.93.68-.53.27-1.11.36l-.58.09-1.9-.25q-1.9-.24-4.4-.52-2.51-.27-7.56-.1-5.05.16-11.87.54-6.82.38-18.45 1.24-11.62.87-26.19 1.98-14.57 1.12-26.65 2.01-12.08.88-23.11 1.98-11.02 1.09-19.32 1.71-8.3.62-8.73.59-.44-.03-.86-.16-.42-.14-.8-.37-.38-.23-.69-.54-.32-.32-.54-.7-.23-.38-.36-.8-.13-.42-.16-.87-.02-.43.06-.86.08-.44.26-.84.19-.41.46-.76.27-.34.62-.62.35-.27.76-.45.4-.18.84-.26l.44-.08ZM521.005 337.224l3.23-2.56q3.22-2.56 4.87-4.36 1.65-1.79 3.51-3.74 1.86-1.95 3.56-4.39 1.69-2.44 2.68-4.38.98-1.95 1.53-2.63.56-.68 1.3-1.15.74-.46 1.59-.67.85-.21 1.72-.13.87.08 1.68.43.8.35 1.45.94.65.59 1.07 1.35.43.77.59 1.63.16.86.03 1.73-.12.86-.51 1.64-.4.79-1.02 1.4-.62.62-1.41 1-.79.39-1.66.5-.87.11-1.72-.06-.86-.17-1.62-.61-.76-.43-1.34-1.09-.58-.65-.92-1.46-.35-.81-.41-1.68-.07-.87.15-1.72t.69-1.58q.48-.74 1.17-1.28.68-.55 1.51-.84.82-.3 1.7-.32.87-.02 1.71.25.83.26 1.54.77.71.52 1.21 1.23.51.72.76 1.56.25.84.22 1.71-.03.88-.33 1.7l-.31.82q0-.01-1.67 2.44-1.67 2.44-4.04 5-2.37 2.57-4.3 4.42-1.93 1.86-3.89 3.72-1.95 1.86-4.83 4.8-2.89 2.95-3.37 3.29-.49.34-1.05.56-.55.21-1.14.29-.59.08-1.17.01-.6-.07-1.16-.27-.55-.21-1.05-.54-.49-.34-.89-.78t-.68-.97q-.28-.52-.43-1.1-.15-.58-.15-1.17-.01-.59.13-1.17t.41-1.11q.27-.53.66-.98l.4-.45Z"
    />
    <path
      fill="#00ff00"
      d="m559.536 300.817-.46 1.95q-.45 1.95-1.67 5.94t-2.95 8.34q-1.75 4.34-3.16 7.22-1.42 2.87-3.63 5.41-2.2 2.54-5.29 4.55-3.08 2-5.32 3.72-2.24 1.72-4.57 3.52-2.34 1.8-3.1 2.13-.77.32-1.6.39-.83.06-1.63-.14-.81-.21-1.51-.66-.7-.45-1.21-1.1-.52-.65-.81-1.43-.28-.79-.3-1.62-.02-.83.23-1.62.25-.8.74-1.47.48-.67 1.16-1.16.68-.48 1.48-.72.79-.24 1.62-.21.84.02 1.61.31.78.29 1.43.82.65.52 1.09 1.22.45.71.64 1.52.2.8.13 1.63-.07.83-.41 1.59-.33.77-.89 1.38-.55.62-1.28 1.03-.73.4-1.54.55-.82.16-1.64.04-.83-.12-1.57-.49-.75-.37-1.33-.96-.59-.59-.95-1.34-.37-.75-.48-1.57-.1-.83.06-1.64.16-.82.57-1.54.41-.72 1.03-1.27.63-.56.62-.56l2.3-1.35q2.29-1.35 5.08-2.83 2.79-1.47 5.08-2.76 2.29-1.29 4-2.86 1.7-1.56 3.04-3.75 1.33-2.19 2.53-6.23 1.2-4.03 1.92-8.41.72-4.37 1.38-6.26.66-1.89.88-2.4.22-.51.56-.96.33-.45.77-.8.43-.35.94-.59.5-.24 1.05-.35.55-.11 1.09-.09.56.02 1.1.18.53.15 1.02.43.48.28.88.67.41.39.7.86.3.47.48 1t.22 1.09q.05.54-.04 1.1l-.09.55ZM20.192 47.31l2.69-2.94q2.67-2.93 5.95-6.46 3.27-3.52 5.56-6.1 2.28-2.58 4.74-5.41 2.45-2.83 3.02-3.24.57-.41 1.24-.62.68-.2 1.38-.18.7.02 1.36.26.66.25 1.21.69.55.44.92 1.03.38.6.55 1.28.17.68.11 1.38-.06.7-.34 1.35-.28.64-.75 1.17-.47.52-1.08.86-.61.35-1.31.48-.69.13-1.38.03-.7-.09-1.33-.41-.63-.31-1.12-.81-.5-.5-.81-1.13-.31-.63-.4-1.32-.1-.7.04-1.39.13-.69.48-1.3.34-.61.87-1.08.52-.47 1.17-.75.65-.27 1.35-.33.7-.05 1.38.12.68.17 1.27.55t1.03.93q.44.55.68 1.21.24.66.26 1.36.02.7-.19 1.37-.21.67-.62 1.24l-.41.57-2.71 2.31q-2.7 2.31-4.98 4.75-2.28 2.43-5.23 6.19-2.95 3.76-5.39 6.91-2.43 3.13-2.82 3.5-.4.36-.86.62-.47.26-.98.4-.52.14-1.05.16-.53.01-1.05-.11-.52-.11-1-.35-.48-.23-.89-.58-.41-.34-.72-.77-.32-.44-.52-.93-.2-.5-.28-1.03-.08-.52-.03-1.05t.23-1.03q.18-.51.47-.95l.29-.45Z"
    />
  </svg>
);
export default WorkInProgress;
