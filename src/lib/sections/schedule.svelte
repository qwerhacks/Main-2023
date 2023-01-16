<script lang="ts">

    type Event = {
		title: string;
		description: string;
		hour_start: number;
        minute_start: number;
		length_minutes: number;
        display_width: number;
        display_column: number;
        color: string;
	};

    const events = [
        {
            title: 'Check-In',
            hour_start: 0,
            minute_start: 0,
            length_minutes: 60,
            display_width: 3,
            display_column: 0,
            color: 'green',
        },
        {
            title: 'Breakfast/Snacks',
            hour_start: 0,
            minute_start: 30,
            length_minutes: 30,
            display_width: 1,
            display_column: 1,
            color: 'blue',
        },
        {
            title: 'Opening Presentation',
            hour_start: 1,
            minute_start: 0,
            length_minutes: 60,
            display_width: 3,
            display_column: 0,
            color: 'coral',
        },
        {
            title: 'Track Speaker -- Food Security',
            hour_start: 2,
            minute_start: 0,
            length_minutes: 20,
            display_width: 2,
            display_column: 0,
            color: 'blue',
        },
        {
            title: 'Track Speaker -- Housing Access',
            hour_start: 2,
            minute_start: 20,
            length_minutes: 20,
            display_width: 2,
            display_column: 1,
            color: 'green',
        },
        {
            title: 'Track Speaker -- Healthcare Equity',
            hour_start: 2,
            minute_start: 40,
            length_minutes: 20,
            display_width: 2,
            display_column: 0,
            color: 'coral',
        },
        {
            title: 'Hacking Begins',
            hour_start: 3,
            minute_start: 0,
            length_minutes: 10,
            display_width: 3,
            display_column: 0,
            color: 'yellow',
        },
        {
            title: 'Hackathon Survival Guide & Team Formation',
            hour_start: 3,
            minute_start: 0,
            length_minutes: 45,
            display_width: 2,
            display_column: 1,
            color: 'coral',
        },
        {
            title: 'Git / Version Control',
            hour_start: 3,
            minute_start: 45,
            length_minutes: 45,
            display_width: 1,
            display_column: 0,
            color: 'blue',
        },
        {
            title: 'MLH Mini Event 1',
            hour_start: 3,
            minute_start: 45,
            length_minutes: 45,
            display_width: 1,
            display_column: 2,
            color: 'yellow',
        },
        {
            title: 'Intro to React',
            hour_start: 4,
            minute_start: 30,
            length_minutes: 60,
            display_width: 2,
            display_column: 1,
            color: 'coral',
        },
        {
            title: 'Lunch',
            hour_start: 5,
            minute_start: 0,
            length_minutes: 75,
            display_width: 3,
            display_column: 0,
            color: 'green',
        },
        {
            title: 'MLH Mini Event 2',
            hour_start: 6,
            minute_start: 15,
            length_minutes: 30,
            display_width: 1,
            display_column: 2,
            color: 'yellow',
        },
        {
            title: 'Python',
            hour_start: 6,
            minute_start: 45,
            length_minutes: 45,
            display_width: 2,
            display_column: 0,
            color: 'coral',
        },
        // {
        //     title: 'TBD',
        //     hour_start: 6,
        //     minute_start: 45,
        //     length_minutes: 45,
        //     display_width: 2,
        //     display_column: 0,
        //     color: 'coral',
        // },
        {
            title: 'Snacks',
            hour_start: 8,
            minute_start: 0,
            length_minutes: 60,
            display_width: 2,
            display_column: 0,
            color: 'green',
        },
        {
            title: 'Careers in Game Dev',
            hour_start: 8,
            minute_start: 0,
            length_minutes: 60,
            display_width: 2,
            display_column: 1,
            color: 'coral',
        },
        {
            title: 'Impostor Syndrome',
            hour_start: 9,
            minute_start: 0,
            length_minutes: 30,
            display_width: 2,
            display_column: 0,
            color: 'blue',
        },
        {
            title: 'Thinking Traps and Beyond',
            hour_start: 9,
            minute_start: 30,
            length_minutes: 30,
            display_width: 2,
            display_column: 0,
            color: 'yellow',
        },
        {
            title: 'CTF',
            hour_start: 10,
            minute_start: 0,
            length_minutes: 60,
            display_width: 3,
            display_column: 0,
            color: 'coral',
        },
        {
            title: 'Dinner',
            hour_start: 11,
            minute_start: 0,
            length_minutes: 60,
            display_width: 3,
            display_column: 0,
            color: 'green',
        },
        {
            title: 'Intro to Deep Learning',
            hour_start: 12,
            minute_start: 0,
            length_minutes: 60,
            display_width: 2,
            display_column: 1,
            color: 'yellow',
        },
        {
            title: 'Identity Specific Workshop 1',
            hour_start: 13,
            minute_start: 0,
            length_minutes: 60,
            display_width: 2,
            display_column: 0,
            color: 'coral',
        },
        // {
        //     title: '??',
        //     hour_start: 14,
        //     minute_start: 0,
        //     length_minutes: 60,
        //     display_width: 2,
        //     display_column: 0,
        //     color: 'coral',
        // },
        {
            title: 'Snacks',
            hour_start: 15,
            minute_start: 0,
            length_minutes: 60,
            display_width: 3,
            display_column: 0,
            color: 'green',
        },
        {
            title: 'Tie Dye',
            hour_start: 15,
            minute_start: 0,
            length_minutes: 120,
            display_width: 1,
            display_column: 2,
            color: 'yellow',
        },
        {
            title: 'Movie',
            hour_start: 15,
            minute_start: 0,
            length_minutes: 180,
            display_width: 1,
            display_column: 1,
            color: 'coral',
        },
    ]

    const hours = [ {index: 0, string: '8am'}, {index: 1, string: '9am'}, {index: 2, string: '10am'}, {index: 3, string: '11am'}, 
                    {index: 4, string: '12pm'}, {index: 5, string: '1pm'}, {index: 6, string: '2pm'}, {index: 7, string: '3pm'},
                    {index: 8, string: '4pm'}, {index: 9, string: '5pm'}, {index: 10, string: '6pm'}, {index: 11, string: '7pm'},
                    {index: 12, string: '8pm'}, {index: 13, string: '9pm'}, {index: 14, string: '10pm'}, {index: 15, string: '11pm'},
                    {index: 16, string: '12am'}, {index: 17, string: '1am'}, {index: 18, string: '2am'}, {index: 19, string: '3am'},];

    let eventIsHovered = false;

    function updateTrackerTime() {
        //let startDate = new Date('January 27, 2023 08:00 GMT-08');        // Use this time in prod build
        let startDate = new Date('January 15, 2023 08:00 GMT-08');
        let currentDateTime = Date.now()
        let timeSinceStartHours = currentDateTime - (startDate.getTime());
        timeSinceStartHours /= (1000 * 60 * 60)
        return timeSinceStartHours;
    }
    

</script>

<div class='schedule-container'>
    <div class='header'>
        <h2>day of events</h2>
    </div>
    <div class='content'>
            {#each hours as hour}
                <div class="spacer h{hour.index * 6}"><span>{hour.string}</span></div>
                <div class="spacer h{hour.index * 6} half"></div>
            {/each}
        <div class='events'>
            {#each events as event}
                <div on:mouseover={() => {eventIsHovered = true;}} on:mouseout={() => {eventIsHovered = false;}} class='event h{((event.hour_start * 6) + (Math.floor(event.minute_start / 10)))} {event.color} w{event.display_width} l{Math.ceil(event.length_minutes / 10)} c{event.display_column} {eventIsHovered ? ' hovered' : ''}'>
                    {event.title}
                    <!-- <span class='inner'> &nbsp;({event.length_minutes})</span> -->
                </div>
            {/each}
        </div>
        <div class='tracker h{Math.floor(updateTrackerTime() * 6)} {updateTrackerTime() < 0 ? ' hidden' : ''}'>
            <div class='circle'></div>
        </div>
    </div>
</div>

<style lang="scss">

    // schedule spacing variables
        $hour-scale: 150px;
        $inset-margin: 2px;         // how much the box should be squished inwards
        $outline-width: 3px;        // width of background-colored border
        $shorten-margin: 5px;       // how much should be taken off the bottom (a la google calendar)

        $bg: #fff9f5;
        $bg-dark: hsl(24, 3%, 69%);

    .schedule-container {
        padding: 3.5rem;
        height: $hour-scale * 8;
        overflow: hidden;
        min-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .header h2 {
            margin-block-start: 0;
        }
        .content {
            width: 65%;
            height: 100%;
            margin-top: 1.5rem;
            padding-top: 1rem;
            overflow-y: scroll;
            display: grid;
            grid-template-columns: 1fr;


            .events {
                position: relative;
                width: 90%;
                left: 10%;
                display: grid;
                grid-template-columns: 1fr;
            }

            div {
                grid-row-start: 1;
                grid-column-start: 1;
            }

            .spacer {
                border-top: solid 1px gray;
                min-height: $hour-scale;
                min-width: 100%;
                position: relative;
                font-size: smaller;
                &.half {
                    border-top: solid 1px rgb(199, 199, 199);
                }
                span {
                    outline: solid $bg 8px;
                    outline-offset: 0px;
                    border-radius: 10px;
                    background: $bg;
                    position: relative;
                    top: -1rem;
                    left: 1rem;
                }
            }

            .tracker {
                background: #F15F7255;
                border-bottom: solid 4px #F15F72;
                height: 500vh;
                min-width: 100%;
                position: relative;
                //mix-blend-mode: multiply;
                z-index: 150;
                backdrop-filter: saturate(0);
                &[class*="hidden"] {
                    display: none;
                }
                .circle {
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 1.5rem;
                    background: #F15F72;
                    position: relative;
                    top: calc(500vh - 0.75rem);
                    left: -0.75rem;
                }
            }

            .event {
                position: relative;
                display: flex;
                align-items: flex-start;
                box-sizing: border-box;
                border-radius: 20px;
                padding: 20px;
                padding-top: 0px;
                padding-bottom: 30px;
                font-family: 'Nunito', sans-serif;
                font-size: smaller;
                outline: solid rgb(255 249 245);
                outline-width: $outline-width;
                outline-offset: -1 * ($outline-width - 1px);
                border-top: solid 10px;
                border-bottom: solid 10px #ffffff00;
                user-select: none;
                -moz-user-select: none;
                /*
                    Fill logic
                */
                background: #ABD7A2;
                border-top-color: #00000044;
                &[class*="green"] {
                    background: #72C6A4;
                }
                &[class*="blue"] {
                    background: #59C6D7;
                }
                &[class*="coral"] {
                    background: #F15F72;
                }
                &[class*="yellow"] {
                    background: #FCDF98;
                }
                /*
                    Width logic
                */
                &[class*="w1"] {
                    width: (1/3) * 100%;
                }
                &[class*="w2"] {
                    width: (2/3) * 100%;
                }
                &[class*="w3"] {
                    width: 100%;
                }
                /*
                    Column logic
                */
                &[class*="c0"] {
                    left: 0%;
                }
                &[class*="c1"] {
                    left: (1/3) * 100%;
                }
                &[class*="c2"] {
                    left: (2/3) * 100%;
                }

                // /*
                //     Animations
                // */
                // transition: scale 0.5s ease, transform 0.5s ease;
                // &:hover {
                //     scale: 103%;
                //     transform: translateY(-2%);
                //     //z-index: 100000 !important;
                // }
                transition: opacity 0.5s ease;
                opacity: 0.9;
                &:hover {
                    opacity: 1 !important;
                    .inner {
                        visibility: visible;
                    }
                }
                &.hovered {
                    opacity: 0.5;
                }
                .inner {
                    visibility: hidden;
                }
            }
            @for $tensofminutes from 0 through 144 {
                .event.h#{$tensofminutes} { 
                    top: ($tensofminutes) * $hour-scale * (1/6) + $inset-margin;   // + ($tensofminutes * (1/6))
                    &[class*="c0"] {
                        z-index: $tensofminutes;
                    }
                    &[class*="c1"] {
                        z-index: $tensofminutes;
                    }
                    &[class*="c2"] {
                        z-index: $tensofminutes;
                    }
                }
                .spacer.h#{$tensofminutes} { 
                    top: $tensofminutes * $hour-scale * (1/6);
                    &[class*="half"] {
                        top: $tensofminutes * $hour-scale * (1/6) + ($hour-scale * 0.5);
                    }
                    // &::before {
                    //     content: $hr;
                    // }
                }
                .tracker.h#{$tensofminutes} {
                    top: calc(( $tensofminutes * $hour-scale * (1/6) ) - 500vh + 2px);
                }
            }
            @for $tenminuteslength from 1 through 18 {
                .event[class*="h"].l#{$tenminuteslength} { 
                    height: ($tenminuteslength * $hour-scale * (1/6)) - $shorten-margin - $inset-margin;// - 4px;
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        
        .schedule-container {
            padding: 0;
            width: 100%;
        }
        .content {
            width: 90% !important;
        }
    }

</style>