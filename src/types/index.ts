declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.mp4' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}
