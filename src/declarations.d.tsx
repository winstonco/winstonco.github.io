// https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
// @Foo

// https://stackoverflow.com/questions/43638454/webpack-typescript-image-import?rq=1
// @Carlos
// @Brandon Miller

declare module '*.jpg' {
  const value: any;
  export = value;
}
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}
