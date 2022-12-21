<script lang="ts">
	let email_buffer = atob("cXdlcmhhY2tzQGdtYWlsLmNvbQ==")
</script>

<div class="max-w-[10rem]">
	<h3>Contact</h3>
	<div class="grid grid-cols-4 gap-2">
		<a href="https://www.instagram.com/qwerhacks"><img src="media/social_logos/logo--instagram.svg" alt="instagram logo, click to contact us" class="aspect-square" /></a>
		<img src="media/social_logos/logo--facebook.svg" alt="facebook logo, click to contact us" class="aspect-square" />
		<img class="cursor-pointer aspect-square" on:click={() => {prompt("Thanks for clicking like a human! You can email us at:", email_buffer)}} src="media/social_logos/email.svg" alt="email logo, click to contact us" />
	</div>
</div>
