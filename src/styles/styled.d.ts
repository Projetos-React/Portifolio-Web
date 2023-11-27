import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      headingColor: string;
      bgShade: string;
      bgShadeLight: string;
      github: string;
      darkblue: string;
      black: string;
      white: string;
      copyright: string;
    };
  }
}
