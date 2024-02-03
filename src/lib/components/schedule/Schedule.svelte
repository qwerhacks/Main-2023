<script lang="ts">

import Postit from '../q&a/Postit.svelte';
import ShortcutIcon from '../utils/ShortcutIcon.svelte';
import WindowBase from '../utils/WindowBase.svelte';
import Event from './event.svelte';
import { getEvents } from './events.js';
	import ScheduleOld from './schedule-old.svelte';

let events = getEvents();
let currentTime = Date.now()
let i = 0;
while(i < events.length && events[i]?.time > currentTime) {
    events.pop()
    i++;
}

</script>

<div class="p-4 flex flex-col mt-50">
    <div class="schedule mt-5 mr-4 md:mt-[-40px] md:mr-[8vw] z-10 self-end pointer-events-none flex flex-row items-center gap-16">
        <WindowBase
			title=""
            textCenter={true}
            max_width={'w-[75vw] mobilebreakdown'}
			background_val="linear-gradient(90deg, #EF5986 0.09%, #FFBFB1 16.22%, #FFE9B1 38.59%, #9FF4CB 58.37%, #92DEFF 78.14%, #C993FF 99.48%);"
        >
			<h1>SCHEDULE</h1>
			<ScheduleOld />
		</WindowBase>
    </div>
</div>

<style>
    .eventcontainer {
        max-width: 20vw;
        padding-top: 2rem;
        box-sizing: border-box;
        padding-bottom: 5rem;
    }
    .upnext {
    }
    .schedule {
        margin-top: -20%;
        min-width: 40%;
    }
    .schedule-container {
    }
</style>
