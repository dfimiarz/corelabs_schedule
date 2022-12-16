<script setup lang="ts">
import { computed } from "vue";

import desktop_cover from "@/assets/bg_1_desktop.jpg";
import mobile_cover from "@/assets/bg_1_mobile.jpg";

import { useDisplay, useLayout } from "vuetify";

const { smAndDown } = useDisplay();

const { mainRect } = useLayout();

const main_height = computed(() => {
  console.log(mainRect.value);
  return mainRect.value.top + mainRect.value.bottom;
});

// const bg_img = computed(() => {
//   return mobile.value ? mobile_cover : desktop_cover;
// });
</script>

<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img
        :src="desktop_cover"
        :height="'calc(100vh - ' + main_height + 'px)'"
        cover
      >
        <template #sources>
          <source :srcset="mobile_cover" media="(max-width: 600px)" />
        </template>
        <v-container class="fill-height">
          <v-row class="fill-height" justify="center" align="center">
            <v-col class="text-white text-center" cols="12">
              <div
                :class="[smAndDown ? 'text-h3' : 'text-h1']"
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
            <v-col cols="12" class="text-center">
              <v-row dense align="center" justify="space-around">
                <v-col cols="12" class="text-center">
                  <div class="text-caption text-white">
                    <v-btn
                      :size="smAndDown ? 'large' : 'x-large'"
                      color="white"
                      class="mx-2"
                    >
                      Explore
                    </v-btn>
                    <v-btn
                      :size="smAndDown ? 'large' : 'x-large'"
                      color="primary"
                      class="mx-2"
                    >
                      Log In
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" class="text-center">
                  <div class="text-body-1 text-white">
                    Don't have an account?
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
  </v-row>
</template>
