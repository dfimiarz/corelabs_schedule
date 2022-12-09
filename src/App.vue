<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";

const state = reactive({ count: 0 });

const drawer: Ref<boolean> = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar app clipped-right density="prominent">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CCNY Core Facilities</v-toolbar-title>

      <template v-slot:image>
        <v-img
          src="https://www.ccny.cuny.edu/themes/custom/ccny_theme/dist/assets/175th-logo-desktop.svg"
          alt="Vuetify Logo"
          class="bg-grey-lighten-2"
        ></v-img>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary
    ></v-navigation-drawer>
    <v-main>
      <v-card class="mx-auto" max-width="344">
        <v-card-item>
          <div>
            <div class="text-overline mb-1">OVERLINE</div>
            <div class="text-h6 mb-1">Headline</div>
            <div class="text-caption">
              Greyhound divisely hello coldly fonwderfully {{ state.count }}
            </div>
          </div>
        </v-card-item>
        <v-card-actions>
          <v-btn color="primary"> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
    <v-footer app> Test</v-footer>
  </v-app>
</template>

<style scoped></style>
