<script>
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
</script>

<div class='schedule-container'>
    <div class='header'>
        <h1>day of events</h1>
    </div>
    <div class='content'>
        {#each hours as hour}
            <div class="spacer h{hour}"></div>
        {/each}
        
        <div class='event h0 green l4'>event at hour 0 for 2 hours</div>
        <div class='event h6 l6 w1 blue'>event at hour 5</div>
    </div>
</div>

<style lang="scss">
    $hour-scale: 50px;
    .schedule-container {
        //outline: solid 2px black;
        min-width: 50%;
        aspect-ratio: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        .header h1 {
            font-family: 'Ranille', serif;
            font-weight: 400;
            font-size: xxx-large;   //
            margin-block-start: 0;
        }
        .content {
            width: 80%;
            display: grid;
            grid-template-columns: 1fr;
            div {
                grid-row-start: 1;
                grid-column-start: 1;
            }

            .spacer {
                border-top: solid 1px gray;
                min-height: 50px;
                min-width: 100%;
                position: relative;
            }
            .event {
                position: relative;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 20px;
                border-radius: 20px;
                font-family: 'Nunito', sans-serif;
                //outline: solid 5px white;
                //outline-offset: -2px;
                /*
                    Fill logic
                */
                background: #ABD7A2;
                &[class*="green"] {
                    background: #ABD7A2;
                }
                &[class*="blue"] {
                    background: #59C6D7;
                }
                /*
                    Width logic
                */
                &[class*="w1"] {
                    width: 33%;
                }
                &[class*="w2"] {
                    width: 66%;
                }
                &[class*="w3"] {
                    width: 100%;
                }
            }
            @for $hr from 0 through 24 {
                .event.h#{$hr} { 
                    top: ($hr * $hour-scale) + 2px;
                }
                .spacer.h#{$hr} { 
                    top: $hr * $hour-scale;
                    &::before {
                        content: $hr;
                    }
                }
            }
            @for $halfhourlength from 1 through 10 {
                .event[class*="h"].l#{$halfhourlength} { 
                    height: ($halfhourlength * $hour-scale * 0.5) - 4px;
                }
            }
        }
    }
</style>