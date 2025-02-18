import { DefaultTheme, css } from "styled-components";

const colors = {
  white_100: "#FFFFFF",
  black_500: "#000000",

  transparent_10: "#23232310",
  transparent_30: "#23232330",
  transparent_50: "#23232350",
  transparent_90: "#23232390",

  example_gray_100: "#F5F5F5",
  example_gray_300: "#E6E6E6",
  example_gray_500: "#D3D3D3",
  example_gray_700: "#D9D9D9",
  example_gray_800: "#7f7f7f",
  example_gray_900: "#B6B6B6",
  example_gray_1000: "#a8a8a8",
  example_gray_1100: "#9c9c9c",
  example_gray_1200: "#8e8e8e",

  background: "#FFFFFF",

  placeholder_100: "#DDDDE3",

  text_primary: "",
  text_secondary: "",

  // 임시 컬러
  example_green_100: "#00C73C",
  example_yellow_500: "#FFD400",
  example_red_500: "#ED4044",
  example_orange_500: "#FFA500",
};

const borderRadius = {
  radius5: "0.5rem",
  radius10: "1rem",
  radius15: "1.5rem",
  circle: "9999rem",
};

const fontSize = {
  size10: "1rem",
  size11: "1.1rem",
  size12: "1.2rem",
  size13: "1.3rem",
  size14: "1.4rem",
  size15: "1.5rem",
  size16: "1.6rem",
  size17: "1.7rem",
  size18: "1.8rem",
};

const fontWeight = {
  thin: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

const boxShadow = {
  /* TODO
    추후 디자인 고려하여 값 추가
  */
  shadow_100: "0 0.8rem 2.4rem rgba(149, 157, 165, 0.2)",
  shadow_300: "",
  shadow_500: "0.3rem 0.3rem 2rem 0 rgba(0, 0, 0, 0.06)",
  shadow_700: "0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25)",
  shadow_900: "",
  example_shadow: "0 0 1rem 0.1rem rgba(0,0,0,0.15)",
};

const screens = {
  example_min: { min: "900px" },
  example_max: { max: "900px" },

  color_sheet_450: { max: "450px" },
  color_sheet_350: { max: "350px" },
};

const zIndex = {
  // 각 컴포넌트별 z index => 0 ~ 100
  timeline_dashed: "22",
  timeline_line: "23",
  timeline_icon: "24",

  header: "300",

  modal: "500",

  toast: "600",

  spinner: "800",

  monthly_goal_overlay: "40",
  monthly_goal_textarea: "50",
};

const scrollBarNone = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export type ColorsType = typeof colors;
export type FontWeightType = typeof fontWeight;
export type SizeType = typeof fontSize;
export type BorderRadius = typeof borderRadius;
export type ZIndex = typeof zIndex;
export type ScrollBarNone = typeof scrollBarNone;
export type BoxShadow = typeof boxShadow;
export type Screens = typeof screens;

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
  borderRadius,
  zIndex,
  scrollBarNone,
  boxShadow,
  screens,
};

export default theme;
