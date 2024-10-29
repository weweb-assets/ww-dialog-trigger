<template>
    <div @click="onClick()">
        <wwLayout path="children" />
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    emits: ['trigger-event'],
    setup() {
        const { openDialog, isEditing } = inject('weweb-assets/ww-dialog-root');

        function onClick() {
            if (isEditing.value) {
                return;
            }

            openDialog();
        }

        return {
            openDialog,
            onClick,
        };
    },
};
</script>

<style lang="scss" scoped></style>
