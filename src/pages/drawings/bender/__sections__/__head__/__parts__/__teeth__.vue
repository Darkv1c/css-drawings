<script setup lang="ts"></script>

<template>
    <div class="mouth-container">
        <div class="mouth border">
        </div>
        <div class="mouth">
            <div class="teeth">
                <div v-for="n in Array(12)" class="tooth" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/drawings/bender';

.mouth-container {
    .mouth {
        background-color: $black;
        display: inline-block;
        min-width: 11em;
        min-height: 5.7em;
        max-height: 5.4em;
        margin-top: 2.8em;
        margin-left: -10em;
        border-radius: 5em 0em 0em 5em;
        overflow: hidden;
        border: 4px solid black;
        clip-path: polygon(0 0, 100% 10%, 100% 91%, 0% 100%);

        .teeth {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: $border-size;

            .tooth {
                background: $white;
                min-height: 1.8em;

                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    min-height: 1.6em;
                }
            }
        }

        &.border {
            position: absolute;
            transform: scaleX(101%) scaleY(110.5%);
        }
    }
}
</style>