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
    calendarOptions.duration = { days: dayDuration.value }
};

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

const dayDuration = computed<number>(() => {
    switch (name.value) {
        case 'xs': return 1
        case 'sm': return 3
        case 'md': return 3
        case 'lg': return 7
        case 'xl': return 7
        case 'xxl': return 7
        default: return 7
    }
});

onMounted(() => {
    onResize();
})


</script >
