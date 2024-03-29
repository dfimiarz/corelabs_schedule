<template>
  <v-container class="fill-height" v-resize="onResize">
    <v-row class="fill-height" no-gutters>
      <v-col cols="12">
        <div class="d-flex flex-column fill-height">
          <v-container class="pa-0">
            <v-row no-gutters justify="center" align="center">
              <v-col cols="10">
                <v-row no-gutters>
                  <v-col>
                    <span class="text-h4 text-md-h3">LSM 880</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2" class="text-right">
                <v-btn
                  size="x-small"
                  class="ml-2"
                  :icon="mdiCog"
                  color="purple"
                ></v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="pa-1">
            <v-row no-gutters>
              <v-col cols="12">
                <v-alert type="warning" density="compact" closable
                  >Please note that the facility will be closed on Dec 25th.
                  Please contact facility manager if you have additional
                  questions</v-alert
                >
              </v-col>
            </v-row>
          </v-container>
          <v-container class="pa-1">
            <v-row no-gutters>
              <v-col cols="10" align-self="center">
                <v-btn size="small" class="ml-2" color="purple">Today</v-btn>
                <v-btn size="small" class="ml-2" color="purple">Prev</v-btn>
                <v-btn size="small" class="ml-2" color="purple">Next</v-btn>
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
import { mdiCog } from "@mdi/js";

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
  headerToolbar: { start: "", center: "", end: "" },
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
