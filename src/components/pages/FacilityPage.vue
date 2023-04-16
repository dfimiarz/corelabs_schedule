<template>
  <v-container class="fill-height" v-resize="onResize">
    <v-row class="fill-height" no-gutters>
      <v-col cols="12">
        <div class="d-flex flex-column fill-height">
          <v-container class="pa-1">
            <v-row no-gutters justify="center" align="center">
              <v-col cols="6">
                <div class="text-h4">LSM 880</div>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-btn
                  size="x-small"
                  :icon="mdiInformation"
                  color="red"
                ></v-btn>
                <v-btn
                  size="x-small"
                  class="ml-2"
                  :icon="mdiCog"
                  color="purple"
                ></v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-responsive>
            <FullCalendar :options="calendarOptions">
              <template v-slot:eventContent="arg">
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
              </template>
            </FullCalendar>
          </v-responsive>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import FullCalendar from "@fullcalendar/vue3";
import timeGridPlugin from "@fullcalendar/timegrid";
import { mdiCog, mdiInformation } from "@mdi/js";

import { reactive, computed, onMounted } from "vue";

import { useDisplay } from "vuetify";

const { name } = useDisplay();

const onResize = () => {
  calendarOptions.duration = { days: dayDuration.value };
};

const calendarOptions = reactive({
  height: "100%",
  plugins: [timeGridPlugin],
  initialView: "timeGrid",
  duration: { days: 7 },
  views: {
    timeGrid: {
      allDaySlot: false,
    },
  },
  headerToolbar: false,
});

const dayDuration = computed<number>(() => {
  switch (name.value) {
    case "xs":
      return 1;
    case "sm":
      return 3;
    case "md":
      return 3;
    case "lg":
      return 7;
    case "xl":
      return 7;
    case "xxl":
      return 7;
    default:
      return 7;
  }
});

onMounted(() => {
  onResize();
});
</script>
