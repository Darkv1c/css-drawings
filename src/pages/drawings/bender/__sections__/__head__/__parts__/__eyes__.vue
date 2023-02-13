<script setup lang="ts"></script>
        
<template>
	<div class="eyes">
		<span class="view-finder-outside border">
			<span class="base" />
			<span class="part-1" />
			<span class="part-2" />
		</span>
		<span class="view-finder-outside">
			<span class="base" />
			<span class="part-1" />
			<span class="part-2" />
		</span>
		<span class="view-finder">
			<span class="eye">
				<span class="pupil" />
			</span>
			<span class="eye">
				<span class="pupil" />
			</span>
			<span class="eyelids" />
		</span>
	</div>
</template>


<style scoped lang="scss">
@import 'styles/drawings/bender';

.eyes {
	position: relative;

	.view-finder-outside {
		position: absolute;
		margin-top: 15.5em;
		margin-left: -10em;

		.base {
			background-color: $light-gray;
			padding-left: 18em;
			padding-top: 6em;
			margin-left: 0.8em;
			border-radius: 4em;
		}

		.part-1 {
			position: absolute;
			background-color: $light-gray;
			padding-left: 14em;
			padding-top: 7.8em;
			margin-left: 0.8em;
			border-radius: 3em;
			left: -0.3em;
			bottom: 0.4em;
		}

		.part-2 {
			position: absolute;
			background-color: $light-gray;
			padding-left: 5em;
			padding-top: 7.9em;
			margin-left: 8.8em;
			right: 4.2em;
			bottom: 2.7em;
			transform: rotate(-59deg);
			clip-path: polygon(0 0, 100% 43%, 100% 100%, 0% 100%);
		}

		&.border {
			margin-top: 15.7em;
			transform: scale(105%);

			> * {
				background-color: $black;
			}
		}
	}

	.view-finder {
		position: relative;
		display: inline-block;
		background-color: $black;
		min-width: 14.6em;
		max-height: 5.6em;
		margin-top: 10em;
		margin-left: -7em;
		border-radius: 5em;
		transform: rotate(-1.6deg);
		overflow: hidden;
		border: $border;

		.eyelids {
			position: absolute;
			display: inline-block;
			background-color: $black;
			padding: 7em;
			top: -12.5em;
			left: 0.5em;
			transform: rotate(59deg);
			clip-path: polygon(0 75%, 260% 6%, 0 133%, 0 769%);
		}

		.eye {
			display: inline-block;
			background-color: $white;
			min-width: 7.4em;
			min-height: 6.4em;
			border-radius: 5em;

			.pupil {
				position: absolute;
				display: inline-block;
				background-color: $black;
				padding: 0.7em;
				left: 3.22em;
				top: 2.8em;
			}
		}

		.eye:first-child {
			position: absolute;
			left: 5.2em;
		}

		.eye:nth-child(2) {
			.pupil {
				left: 1.7em;
			}
		}
	}
}
</style>