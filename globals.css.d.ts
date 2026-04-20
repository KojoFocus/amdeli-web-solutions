// Type declarations for CSS modules
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Type declarations for Tailwind CSS
declare module '*.css' {
  const content: any;
  export default content;
}