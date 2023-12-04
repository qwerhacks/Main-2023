<script lang="ts">
	import Postit from './q&a/Postit.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';
</script>

<div class="p-4 flex flex-col">
	<div
		class="md-8 md:mt-[2vh] sm:ml-2 md:ml-[8vw] z-10 pointer-events-none flex flex-row items-center"
	>
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #EF5986 0.09%, #FFBFB1 16.22%, #FFE9B1 38.59%, #9FF4CB 58.37%, #92DEFF 78.14%, #C993FF 99.48%);"
		>
			<h2 class="font-fugaz text-3xl md:text-5xl uppercase">i'm not like other hackathons</h2>
			<p class="">
				We really, actually, want to see you <span class="font-semibold">thrive</span>,
				<span class="font-semibold">grow</span>, and <span class="font-semibold">share joy</span> with
				tech, and maybe even
			</p>
			<p class="">
				<span class="font-extrabold italic">✨make something great✨</span>
			</p>
		</WindowBase>
		<div class="flex-row gap-8 pl-24 flex-grow hidden md:flex">
			<ShortcutIcon title="Raccoon<br>Memes" src="assets/intro/folder.svg" alt="Folder Icon" />
			<ShortcutIcon title="Prizes" src="assets/intro/trophy.svg" alt="Folder Icon" />
		</div>
	</div>
	<div class="mt-5 mr-4 md:mt-[-40px] md:mr-[8vw] self-end pointer-events-none">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #75ABE7 0%, #F1A4E5 100%);"
			max_width="max-w-[80ch]"
		>
			<h2 class="norma-case">So what's that mean?</h2>

			<div class="text-left">
				<p>This year, we want you to:</p>
				<ul class="font-jetbrains">
					<li>Learn to find <span class="font-semibold">real, impactful issues</span></li>
					<li>
						Make things to <span class="font-semibold">help your community</span> &
						<span class="font-semibold">spread joy</span>
					</li>
					<li>
						Find new <span class="font-semibold">pals</span> and
						<span class="font-semibold">pride in your identity</span>
					</li>
				</ul>
			</div>
		</WindowBase>
	</div>

	<Postit width="max-w-[35ch]">
		<p class="text-center text-lg">
			“I loved everything about the hackathon: the workshops, activities, energy, environment,
			topics, and purpose!!! I can’t wait to see it all again at QWER Hacks 2024!”
		</p>
	</Postit>
	<Postit width="max-w-[50ch]">
		<p class="text-center text-lg">
			“I really appreciated how inclusive QWER Hacks was. As someone in the LGBTQ+ community, I’ve
			never felt overly comfortable being openly out - especially in STEM communities. I felt very
			accepted and hearing everyone's stories and challenges was super inspiring. I loved the
			presentations at the beginning, specially the one about housing issues, as they gave us real
			accounts from those who experience the challenges of issues we seek to support through our
			projects.”
		</p>
	</Postit>
</div>
