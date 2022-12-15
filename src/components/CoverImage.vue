<script setup lang="ts">
import { computed } from "vue";

import desktop_cover from "@/assets/bg_1_desktop.jpg";
import mobile_cover from "@/assets/bg_1_mobile.jpg";

import { useDisplay, useLayout } from "vuetify";

const { smAndDown } = useDisplay();

const { mainRect } = useLayout();

const top = computed(() => {
  return mainRect.value.top + mainRect.value.bottom;
});

// const bg_img = computed(() => {
//   return mobile.value ? mobile_cover : desktop_cover;
// });
</script>

<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img :src="desktop_cover" :height="'calc(100vh - ' + top + 'px)'" cover>
        <template #sources>
          <source :srcset="mobile_cover" media="(max-width: 600px)" />
        </template>
        <v-container class="fill-height">
          <v-row class="fill-height" justify="center">
            <v-col class="white--text text-center" cols="12">
              <div
                :class="[smAndDown ? 'text-h6' : 'text-h4']"
                class="font-weight-light"
              >
                WELCOME TO
              </div>

              <br />

              <div
                :class="[smAndDown ? 'text-h6' : 'text-h4']"
                class="font-weight-black"
              >
                CUNY CORE FACILITIES
              </div>
            </v-col>
            <v-col cols="12">
              <v-btn outlined> Test </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
  </v-row>
</template>
