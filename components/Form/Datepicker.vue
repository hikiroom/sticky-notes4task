<template>
    <input
        class="datepicker"
        type="datetime-local"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    props: {
        value: {
            type: [Date, String],
            required: true,
        } as PropOptions<string>,
    },
});
</script>

<style lang="scss" scoped>
.datepicker {
    width: 100%;
    display: block;
    position: relative;
    padding: $p-xs;
    border: 1px solid $c-gray;
    border-radius: 4px;
    height: 35px;
    font-size: 1.6rem;
    background-color: $c-white;

    &:focus {
        outline: 0;
        border: 1px solid $c-secondary;
    }
}
</style>
