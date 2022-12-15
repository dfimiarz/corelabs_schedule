<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import CoverImage from "@/components/CoverImage.vue";

const drawer: Ref<boolean> = ref(false);

// const facilities = [
//   {
//     category: "Electron Microscopy",
//     equipment: [
//       {
//         id: 1,
//         name_pri: "Zeiss Supra 55",
//         name_sec: "SEM",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//       {
//         id: 2,
//         name_pri: "JOEL JEM2100",
//         name_sec: "TEM",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//     ],
//   },
//   {
//     category: "Light Microscopy",
//     equipment: [
//       {
//         id: 1,
//         name_pri: "Zeiss LSM 800",
//         name_sec: "Confocal",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//       {
//         id: 2,
//         name_pri: "Zeiss LSM 880",
//         name_sec: "Confocal",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//       {
//         id: 3,
//         name_pri: "Nikon TiE",
//         name_sec: "Fluorescence",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//       {
//         id: 4,
//         name_pri: "Bruker Ultima 4",
//         name_sec: "Multi-Photon",
//         campus: "CCNY",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         image:
//           "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
//         website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//         schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
//       },
//     ],
//   },
// ];
</script>

<template>
  <v-app>
    <v-app-bar app clipped-right>
      <v-avatar size="70">
        <v-img
          contain
          src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/communications-marketing/university-identity/cuny-block-logo.jpg"
        ></v-img>
      </v-avatar>
      <v-toolbar-title>CORE FACILITIES</v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      location="right"
    ></v-navigation-drawer>
    <v-main>
      <section>
        <CoverImage></CoverImage>
      </section>
    </v-main>
    <v-footer app> CUNY Core Facilities @2022</v-footer>
  </v-app>
</template>

<style scoped></style>
