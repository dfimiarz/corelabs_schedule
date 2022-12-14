import "vuetify/styles";

import { createVuetify } from "vuetify";
// import type { ThemeDefinition } from "vuetify";
//import * as components from "vuetify/components";
//import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: "#FFFFFF",
//     surface: "#FFFFFF",
//     primary: "#6200EE",
//     "primary-darken-1": "#3700B3",
//     secondary: "#03DAC6",
//     "secondary-darken-1": "#018786",
//     error: "#B00020",
//     info: "#2196F3",
//     success: "#4CAF50",
//     warning: "#FB8C00",
//   },
// };

export default createVuetify({
  theme: {
    defaultTheme: "light",
    // themes: {
    //   myCustomLightTheme,
    // },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  //components,
  //directives,
});
