<script lang="ts">
	import ImageWrapper from './card_templates/image_wrapper.svelte';
	import RowCard from './card_templates/row_card.svelte';
</script>

<RowCard title="Good Sleep Pack">
	<svelte:fragment slot="row-1">
		<ImageWrapper
			src={'media/component_assets/prizes/sleep/Rectangle 5.png'}
			alt="Weighted blanket"
      bg_color="rgba(255, 144, 119, 0.13)"
		/>
		<ImageWrapper
			src={'media/component_assets/prizes/sleep/Rectangle 2.png'}
			alt="Weighted blanket"
      bg_color="rgb(45, 64, 97)"
		/>
		<ImageWrapper
			src={'media/component_assets/prizes/sleep/Rectangle 1.png'}
			alt="Weighted blanket"
      bg_color="rgba(167, 221, 254, 0.42)"
		/>
	</svelte:fragment>
	<svelte:fragment slot="row-2">
		<ImageWrapper
			src={'media/component_assets/prizes/sleep/Rectangle 6.png'}
			alt="Weighted blanket"
      bg_color="rgba(235, 204, 142, 0.24)"
		/>
		<ImageWrapper
			src={'media/component_assets/prizes/sleep/Rectangle 3.png'}
			alt="Weighted blanket"
      bg_color="rgba(255, 144, 119, 0.13)"
		/>
		<div class="w-[35ch] max-w-[40%] min-w-[30%]">
			<ul class="text-sm flex flex-col gap-2 list-outside pl-3 leading-[1.1]">
				<li>Luna Cotton Weighted 15lbs 60x80 Blanket in Tie Dye</li>
				<li>ThisWorks Deep Sleep Pillow Spray</li>
				<li>Pillowfort Character Weighted Plush Throw Pillow</li>
				<li>Kitsch Weighted Satin Eye Mask</li>
				<li>Kitsch Satin Pillowcase Aura 2-Pack</li>
			</ul>
		</div>
	</svelte:fragment>
</RowCard>
