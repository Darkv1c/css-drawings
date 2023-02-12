        
<script setup lang="ts"></script>
        
<template>
	<div class="antenna">
		<span class="antenna-circle" />
		<div class="antenna-cone">
			<span class="antenna-cone-border" />
			<span class="antenna-cone-fill" />
			<span class="antenna-cone-base" />
		</div>
		<span class="antenna-base" />
	</div>
</template>

<style scoped lang="scss">
@import '../bender';

.antenna {
	position: relative;
	.antenna-circle {
		position: relative;
		display: block;
		width: 2.3em;
		aspect-ratio: 1;
		background-color: $light-gray;
		margin-left: -7.35em;
		border-radius: 100%;
		border: $border;
		z-index: 5;
	}

	.antenna-cone {

		.antenna-cone-fill,
		.antenna-cone-border {
			position: absolute;
			display: inline-block;
			background-color: $blue-gray;
			padding-left: 2em;
			padding-top: 7.1em;
			margin-left: -6.75em;
			margin-top: -0.9em;
			clip-path: polygon(20% 0%, 65% 0, 100% 100%, 0 100%);
			z-index: 3;
		}

		.antenna-cone-border {
			padding-left: calc(2em + ($border-size * 2));
			background-color: $black;
			margin-left: calc(-6.75em - $border-size);
		}

		.antenna-cone-base {
			@extend .antenna-circle;
			position: absolute;
			background-color: $blue-gray;
			top: 7.05em;
			margin-left: -7.15em;
			z-index: 2;
			clip-path: polygon(20% 0%, 65% 0, 100% 100%, 0 100%);
		}
	}

	.antenna-base {
		position: relative;
		display: inline-block;
		background-color: $light-gray;
		padding-left: 5em;
		padding-top: 2.5rem;
		margin-top: 5.9em;
		border-radius: 100%;
		margin-left: -8.4em;
		border: $border;
		transform: rotate(-6deg);
	}
}
</style>