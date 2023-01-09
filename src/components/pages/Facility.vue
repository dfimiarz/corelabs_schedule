<template>
    <v-container class="fill-height" v-resize="onResize">
        <v-row class="fill-height">
            <v-col col="12">
                <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
                    <template v-slot:eventContent='arg'>
                        <b>{{ arg.timeText }}</b>
                        <i>{{ arg.event.title }}</i>
                    </template>
                </FullCalendar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';

import { reactive, computed, onMounted } from 'vue';

import { useDisplay } from "vuetify";

const { name } = useDisplay();

const onResize = () => {
    calendarOptions.duration = dayDuration;
}

const calendarOptions = reactive({
    height: '100%',
    plugins: [timeGridPlugin],
    headerToolbar: false,
    initialView: 'timeGrid',
    duration: { days: 7 },
    events: [
        { title: 'event 1', date: '2021-05-01' },
        { title: 'event 2', date: '2021-05-02' }
    ]
})

const dayDuration = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
        case 'xs': return { days: 1 }
        case 'sm': return { days: 1 }
        case 'md': return { days: 2 }
        case 'lg': return { days: 7 }
        case 'xl': return { days: 7 }
        case 'xxl': return { days: 7 }
    }

    return undefined
});

onMounted(() => {
   onResize();
})


</script >
