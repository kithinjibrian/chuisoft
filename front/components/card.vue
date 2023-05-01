<template>
    <div class="rounded max-w-sm p-2 inline-block mb-3 shadow-2xl">
        <div class="font-bold text-6xl text-center">"</div>
        <p class="text-base mb-4">
            <slot name="text"></slot>
        </p>
        <p class="text-center mb-2"><slot name='work'></slot></p>
        <p class="text-center"><slot name='name'></slot></p>
    </div>
</template>