<script setup lang="ts">
//import { reactive } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";

//const state = reactive({ count: 0 });

const drawer: Ref<boolean> = ref(false);

const facilities = [
  {
    category: "Electron Microscopy",
    equipment: [
      {
        id: 1,
        name_pri: "Zeiss Supra 55",
        name_sec: "SEM",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
      {
        id: 2,
        name_pri: "JOEL JEM2100",
        name_sec: "TEM",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
    ],
  },
  {
    category: "Light Microscopy",
    equipment: [
      {
        id: 1,
        name_pri: "Zeiss LSM 800",
        name_sec: "Confocal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
      {
        id: 2,
        name_pri: "Zeiss LSM 880",
        name_sec: "Confocal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
      {
        id: 3,
        name_pri: "Nikon TiE",
        name_sec: "Fluorescence",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
      {
        id: 4,
        name_pri: "Bruker Ultima 4",
        name_sec: "Multi-Photon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb",
        website: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
        schedule: "https://www.ccny.cuny.edu/facilities/electron-microscopy",
      },
    ],
  },
];
</script>

<template>
  <v-app>
    <v-app-bar app clipped-right density="prominent">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CCNY Core Facilities</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped></v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row v-for="(f, index) in facilities" :key="index">
          <v-col cols="12">
            <div class="text-h5 text-md-h4">{{ f.category }}</div>
          </v-col>
          <v-col
            v-for="e in f.equipment"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
            :key="e.id"
          >
            <v-card>
              <v-img
                src="https://www.ccny.cuny.edu/sites/default/files/styles/gallery_image_thumbnail/public/2022-11/supra_55_overview.jpg?itok=oyUsUPkb"
                aspect-ratio="2"
              >
              </v-img>
              <v-card-title>{{ e.name_pri }}</v-card-title>
              <v-card-subtitle>{{ e.name_sec }}</v-card-subtitle>
              <v-card-text>
                {{ e.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn text>Homepage</v-btn>
                <v-spacer></v-spacer>
                <v-btn text>Online Calendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app> Test</v-footer>
  </v-app>
</template>

<style scoped></style>
