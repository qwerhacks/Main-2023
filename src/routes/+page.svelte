<script lang="ts">
	import Donate from '$lib/components/Donate.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<Hero />
<div class="w-full dots one" style="">
    <div class="w-full h-full mask-overlay one" />
    <Info />
</div>
<div class="w-full dots two" style="">
    <div class="w-full h-full mask-overlay two" />
	<FAQ />
</div>
<div class="w-full dots three">
    <div class="w-full h-full mask-overlay three" />
	<Donate />
</div>

<style lang="scss">
    $mask: radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 50%);
    .dots {
        background-size: cover, 180px, 180px;
        background-repeat: no-repeat, repeat, repeat; 
        background-attachment: scroll, fixed, scroll;
        background-blend-mode: soft-light;
        &.one {
            margin-top: -20vh;
            padding-top: 20vh;
            background-image: $mask, url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.heroicgirls.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fcomic-book-dots-transparent-png-clipart-free-download-ywd-benday-dots-png-3600_3600.png%3Fssl%3D1&f=1&nofb=1&ipt=8cf13501f1403f762fa2ffcc75dbeebdf3c124018f73412e9e0ae7aa0a5a0b3c&ipo=images"), linear-gradient(180deg, #A84FB3 0%, #E689C6 99.48%);
        }
        &.two {
            background-image: $mask, url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.heroicgirls.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fcomic-book-dots-transparent-png-clipart-free-download-ywd-benday-dots-png-3600_3600.png%3Fssl%3D1&f=1&nofb=1&ipt=8cf13501f1403f762fa2ffcc75dbeebdf3c124018f73412e9e0ae7aa0a5a0b3c&ipo=images"), linear-gradient(180deg, #E688C6 0%, #F4C1CA 100%);
            background-position-x: 40vw, 0px, center;
        }
        &.three {
            background-image: $mask, url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.heroicgirls.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fcomic-book-dots-transparent-png-clipart-free-download-ywd-benday-dots-png-3600_3600.png%3Fssl%3D1&f=1&nofb=1&ipt=8cf13501f1403f762fa2ffcc75dbeebdf3c124018f73412e9e0ae7aa0a5a0b3c&ipo=images"), linear-gradient(180deg, #F4C0CA 0%, #C993FF 100%);
            background-position-x: -50vw, 0px, center;
        }
    }
    .mask-overlay {
        position: absolute;
        &.one {
            margin-top: -15vh;
            background: linear-gradient(180deg, #A84FB3 0%, #E689C6 99.48%);
            mask-image: radial-gradient(black 30%, transparent 90%);
            height: 100vh;
        }
        &.two {
            background: linear-gradient(180deg, #E688C6 0%, #F4C1CA 100%);
            mask-image: radial-gradient(black 30%, transparent 90%);
            height: 100vh;
            right: 50vw;
        }
        &.three {
            background: linear-gradient(180deg, #F4C0CA 0%, #C993FF 100%);
            mask-image: radial-gradient(black 30%, transparent 90%);
            height: 100vh;
            left: 25vw;
        }
        isolation: isolate;
    }
</style>
