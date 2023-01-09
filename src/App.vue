<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";


const drawer: Ref<boolean> = ref(false);

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
      <router-view></router-view>
    </v-main>
    <v-footer app> CUNY Core Facilities @2022</v-footer>
  </v-app>
</template>

<style scoped></style>
