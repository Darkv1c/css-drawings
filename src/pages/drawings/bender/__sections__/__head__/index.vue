<script setup lang="ts">
import { Antenna, Eyes, Teeth } from './__parts__' 
</script>

<template>
    <div class="head">
        <antenna class="antenna" />
        <eyes />
        <teeth />
    </div>
</template>

<style scoped lang="scss">
.head {
    .antenna {
        margin-top: 6.5em;
    }
}
</style>