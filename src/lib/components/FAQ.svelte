<script lang="ts">
	import CleanButton from "./utils/CleanButton.svelte";
	import Postit from './q&a/Postit.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';

    let faqs = [
        {   
            question: "Who can come to QWER Hacks?", 
            answer: "Anyone who is 18 or older, a member (or ally) of the LGBTQIA+ community, and enrolled in a postsecondary academic institution!"
        },
        {
            question: "How do teams work?",
            answer: "Teams consist of 2-4 hackers! Each member should submit an application. Don’t have a team? No worries! We’ll help you find one at the hackathon!"
        },
        {
            question: "How much does attending QWER Hacks cost?",
            answer: "It's free, babey!"
        },
        {
            question: "QWER Hacks sounds super cool! I totes wanna go. How do I apply?",
            answer: "Click the button below!"
        }
    ]
        let messagebox = "can't wait to go :>"

</script>

<div class="p-4 flex flex-col pb-24">
	<div
		class="md-8 md:mt-[2vh] sm:ml-2 md:ml-[8vw] z-10 pointer-events-none flex flex-row items-center"
	>
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #FFBFB1 0.09%, #FE857D 99.48%);"
            main_bg_val="bg-[#E7E5E5]"
            style_str="gap: 2rem"
		>
            <div>
                <div class="inner">
                    <h2 class="font-fugaz text-3xl md:text-5xl uppercase text-center">Q&A</h2>
                    {#each faqs as faq, i}
                        <div class="item">
                            <p class="question">{faq.question}</p>
                            <p class="answer">{faq.answer}</p>
                        </div>
                    {/each}
                </div>
                <!-- <div class="scrollbar">
                    <div class="arrow up" />
                    <div class="slider" />
                    <div class="arrow down" />
                </div> -->
            </div>
            <div class="buttons">
                <div class="hidden sm:flex flex-col items-center justify-center"><p>{messagebox}</p></div>
                <CleanButton>
                    <a class="text-3xl px-10 py-4 w-fit bg-animated" href="https://forms.gle/Vgign2Y7GMq8wbuRA">apply!</a> 
                </CleanButton>
            </div>
		</WindowBase>
	</div>
</div>

<style lang="scss">
    .inner {
        @apply p-6;
        background: white;
        border: solid 5px #200B3A;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .item {
            text-align: left;
            > * {
                margin-bottom: 1rem;
            }
            .question {
                &:before {
                    font-weight: bold;
                    content: 'TRASHPANDA123 (YOU)\a';
                    white-space: pre;
                    color: #ACE1E9;
                }
            }
            .answer {
                &:before {
                    font-weight: bold;
                    content: 'QWERHACKS_TEAM \a';
                    white-space: pre;
                    color: #EEAEB6;
                }
            }
        }
    }
    .scrollbar {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border: solid 5px #200B3A;
        border-width: 0px 5px;
        * {
            border: solid 5px #200B3A;
            border-width: 5px 0px;
        }
        background: #C9CEE1;
        display: grid;
        grid-template-rows: 1fr 20fr 1fr;
        .arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            &.up:before {
                content: '▲';
            }
            &.down:before {
                content: '▼';
            }
            color: black;
        }
        .slider {
            background: #A7A7A7;
            height: 50%;
            margin-top: 69px;
        }
    }
    .buttons {
        font-family: 'Reactor7', monospace;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 80%;
        gap: 1rem;
        div {
            width: 60%;
            background: white;
            border: solid 5px #200B3A;
            @apply p-2;

        }
        // a {
        //     width: max(20%, 150px);
        //     box-shadow: 5px 5px 0px #200B3A;
        // }
    }
</style>
