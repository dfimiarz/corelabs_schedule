<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";

import { mdiAccount } from "@mdi/js";

const state = reactive({ count: 0 });

const drawer: Ref<boolean> = ref(false);

const icons = { account: mdiAccount };
</script>

<template>
  <v-app theme="dark">
    <v-navigation-drawer v-model="drawer" app floating> </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :icon="icons.account"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>CCNY Corelabs</v-toolbar-title>
    </v-app-bar>
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
          <v-btn> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
    <v-footer app> Test</v-footer>
  </v-app>
</template>

<style scoped></style>
