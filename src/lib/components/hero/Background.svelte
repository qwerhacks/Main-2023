<script lang="ts">
	let array = Array(500);
</script>

<div
	class="h-full w-full grid grid-cols-[repeat(auto-fill,_minmax(70px,1fr))] grid-rows-flow-dense gradient isolate"
>
    {#each array as sq,i}
        <div class="aspect-square border-t-4 border-l-4 border-solid border-[#A84FB3] outer opacity-20 square-{i}" />
    {/each}
</div>
 
<style lang="scss">
	.gradient {
		background-image: linear-gradient(180deg, #180230bb 0%, #A84FB3de 100%), radial-gradient(#A84FB3 0%, #180230 80%);
        background-size: cover;
        mask: linear-gradient(180deg, black 0%, black 80%, rgba(0, 0, 0, 0.9) 85%, transparent 100%);
        backdrop-filter: blur(25px);
	}
    @for $i from 0 through 1000 { 
        .square-#{$i} { 
            opacity: 0.1;
            width: 100%;
            animation: opacity-anim 5s, gentle-rotate 1s;
            animation-iteration-count: infinite, 1;
            animation-fill-mode: none, forwards;
            animation-delay: calc(($i / 100)) + s, calc(($i / 500) + 1.2) + s;
            transform: rotateX(90deg) rotateZ(45deg) scale(5%);
            /*mask-image: linear-gradient($i + deg, black 0%, transparent 100%);*/
            mix-blend-mode: lighten;
            box-shadow: -2px -2px 0px magenta;
        }
    }
    @keyframes opacity-anim {
        0% {
            opacity: 0.1;
            box-shadow: 0px 0px 0px black;
        }
        50% {
            opacity: 0.65;
            box-shadow: 0px 0px 20px magenta;
        }
        100% {
            opacity: 0.1;
            box-shadow: 0px 0px 0px black;
        }
    }
    @keyframes gentle-rotate {
        0% {
            transform: rotateX(90deg) rotateZ(45deg) scale(5%);
        }
        100% {
            transform: rotateX(0deg) scale(100%);
        }
    }
</style>
