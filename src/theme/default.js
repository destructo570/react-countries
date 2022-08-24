const common = {
  padding: {
    small: "",
    medium: "",
    large: "",
  },
  margin: {
    small: "",
    medium: "",
    large: "",
  },
  media: {
    small: "365px",
    medium: "765px",
    large: "1600px",
  },
  borderRadius: "8px",
};

export const lighTheme = {
  colors: {
    primary: "hsl(0, 0%, 100%)",
    secondary: "#dbdbd9",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7e7ecf",
    secondaryAccent: "",
    textPrimary: "hsl(200, 15%, 8%)",
    textSecondary: "#2C2C38",
    background: "hsl(0, 0%, 98%)",
    shadow: "rgba(100, 100, 111, 0.2)",
  },
  ...common,
};

export const darkTheme = {
  colors: {
    primary: "hsl(209, 23%, 22%)",
    secondary: "hsl(209, 23%, 22%)",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7e7ecf",
    secondaryAccent: "",
    textPrimary: "hsl(0, 0%, 100%)",
    textSecondary: "#2C2C38",
    background: "hsl(207, 26%, 17%)",
    shadow: "rgba(0, 0, 0, 0)",
  },
  ...common,
};
