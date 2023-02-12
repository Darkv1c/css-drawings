<script setup lang="ts">
import { bender } from 'assets/base_drawings';
import { Antenna, Eyes, Teeth } from './__parts__' 
</script>

<template>
	<div class="bender">
		<div class="own">
			<antenna class="antenna" />
			<eyes />
			<teeth />
		</div>
		<img :src="bender" alt="bender original" class="base">
	</div>
</template>

<style scoped lang="scss">
.bender {
	position: relative;
	// display: grid;
	// grid-template-columns: 1fr 1fr;

	.own {
		margin-left: 50%;
		position: absolute;
		min-height: 100%;
		min-width: 100%;

		.antenna {
			margin-top: 6.5em;
		}
	}

	.base {
		width: 100%;
	}
}
</style>