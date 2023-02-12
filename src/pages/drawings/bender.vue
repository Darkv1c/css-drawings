<script setup lang="ts">
import { bender } from 'assets/base_drawings';
</script>

<template>
	<div class="container">
		<div class="own">
			<span class="antenna-circle" />
			<div class="antenna-cone">
				<span class="antenna-cone-border" />
				<span class="antenna-cone-fill" />
				<span class="antenna-cone-base" />
			</div>
		</div>
		<img :src="bender" alt="bender original" class="base">
	</div>
</template>

<style scoped lang="scss">
$light-gray: #d9e0ea;
$blue-gray: #aec4db;
$black: black;
$border-size: 4px;

.container {
	position: relative;
	// display: grid;
	// grid-template-columns: 1fr 1fr;

	.own {
		margin-left: 50%;
		position: absolute;
		min-height: 100%;
		min-width: 100%;

		.antenna-circle {
			position: relative;
			display: block;
			width: 2.3em;
			aspect-ratio: 1;
			background-color: $light-gray;
			margin-top: 6.5em;
			margin-left: -7.35em;
			border-radius: 100%;
			border: $border-size solid $black;
			z-index: 5;
		}

		.antenna-cone {
			.antenna-cone-fill, .antenna-cone-border {
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
	}

	.base {
		width: 100%;
	}
}
</style>