<template>
    <div>
        <slot name="activators" :on="on">
        </slot>
        <div
         v-if="dialog"
         @click="dialog=false"
         class="z-100 fixed top-0 left-0 w-screen h-screen overflow-auto pt-28 bg-gray-500 bg-opacity-5">
            <div class="m-auto w-5/6 md:w-1/2" v-on:click.stop>
                <slot></slot>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    model:{
        prop:"value",
        event:"click"
    },
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        dialog : {
            get() {
                return this.value
            },
            set(n) {
                this.$emit('click',n)
            }
        }
    },
    methods:{
        on() {
            this.dialog = !this.dialog
        }
    }
}
</script>