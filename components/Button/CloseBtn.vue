<template>
    <button
        class="close-btn"
        :aria-label="alt"
        @click="$emit('click')"
    ></button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        alt: {
            type: String,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.close-btn {
    display: block;
    min-width: 30px;
    min-height: 30px;
    background-color: $c-white;
    border: 1px solid $c-gray;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    &:focus {
        outline: 0;
        border: 1px solid $c-secondary;
    }
    &::before,
    &::after {
        content: '';
        display: block;
        width: 40%;
        height: 2px;
        background: $c-black-dark;
        border-radius: 1px;
        position: absolute;
        top: calc(50% - 1px);
        left: calc(50% - 20%);
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
}
</style>
