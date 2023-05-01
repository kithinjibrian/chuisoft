<template>
    <button :class="`bg-${color}-${brightness} inline-flex items-center rounded-full px-4 py-2 mr-5 hover:bg-${color}-${brightness-100} active:bg-gray-800`">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        color:{
            type:String,
            required:true
        },
        brightness:{
            type:Number,
            default:900
        }
    }
}
</script>