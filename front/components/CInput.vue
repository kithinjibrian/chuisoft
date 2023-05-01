<template>
    <div class="m-auto border border-[2px] border-gray-900 justify-center flex items-center rounded-md shadow-md text-gray-100">
        <div>
            <button 
            type="submit"
            class="flex items-center justify-center w-12 h-12 rounded-l-md bg-gray-800 border border-gray-800">
                <c-icon>
                    <slot name="prepend-icon"></slot>
                </c-icon>
            </button>
        </div>
        <div class="w-full">
            <input
            v-bind:value="value"
            v-on:input="$emit('input',$event.target.value)"
            :placeholder="placeholder"
            class="bg-gray-700 w-full h-12 px-4 py-1 border border-gray-800 rounded-r-md focus:outline-none">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            required:true
        },
        value:{
            type:String,
            required:false
        }
    }
}
</script>