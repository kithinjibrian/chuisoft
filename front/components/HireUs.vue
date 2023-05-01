<template>
    <div class="container mx-auto">
        <h3 class="text-4xl font-bold"><span class="italic text-gray-700 mr-3">03.</span> <span class="underline tracking-widest antialiased">Hire Us.</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 p-3">
            <div></div>
            <div class="ml-3 md:ml-16 shadow-2xl p-3">
                <p class="p-3 text-lg">Choose Service:</p>
                <div>
                    <button
                    v-for="(i,n) of services"
                    :key="n"
                    type="button" 
                    @click="chip1=n" class="btn" :class="[chip1==n ? 'bg-indigo-800 text-gray-100' : 'bg-gray-700']">
                     {{i}}
                    </button>
                </div>
                <p class="p-3 text-lg">Choose Budget:</p>
                <div>
                    <button
                    v-for="(i,n) of budgets"
                    :key="n"
                    type="button" 
                    @click="chip2=n" class="btn" :class="[chip2==n ? 'bg-indigo-800 text-gray-100' : 'bg-gray-700']">
                        {{i}}
                    </button>
                </div>
                <div>
                    <form class="w-full max-w-lg mt-5" @submit.prevent="send()">
                        <div class="flex flex-wrap mx-1 mb-6">
                            <c-input
                            v-model="name"
                            class="w-11/12 md:w-6/12 mb-2 md:mb-0"
                            placeholder="Name">
                                <template v-slot:prepend-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" viewBox="0 0 20 20"
                                    fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </template>
                            </c-input>
                            <c-input
                            v-model="phone"
                            class="w-11/12 md:w-6/12"
                            placeholder="Phone">
                                <template v-slot:prepend-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </template>
                            </c-input>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                                    Project Details
                                </label>
                                <textarea v-model="desc" rows='8' class="appearance-none block w-full bg-gray-800 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none"></textarea>
                                <p class="text-gray-400 text-xs italic">This field is optional.</p>
                            </div>
                        </div>
                        <ol
                        v-if="errors.length>0"
                        class="text-red-800 mb-2">
                            <p class="text-gray-100"><span class="text-red-800">*</span>The following errors happened!</p>
                            <li
                            class="p-1 ml-2"
                            v-for="(e,n) of errors"
                            :key="n">{{e}}</li>
                        </ol>
                        <div class="flex flex-wrap">
                            <button type="submit" class="btn bg-indigo-800 text-gray-200">Submit</button>
                        </div>
                    </form>

                </div>
                <div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import CDialog from './CDialog.vue'
export default {
    components: { CDialog },
    props:{
        errors:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data:()=>({
        chip1:0,
        chip2:0,
        services:[
          'Web design & Development',
          'Ecommerce website',
          'Web Hosting',
          'Mobile & Desktop applications',
          'IT Services & Support',
          'Data analysis' 
        ],
        budgets:[
            '10k - 50k',
            '50k - 100k',
            'More than 100k'
        ],
        name:null,
        phone:null,
        desc:null,
        service:null,
        budget:null,
        dialog:true
    }),
    methods:{
        send() {
            this.$emit('post',{
                name:this.name,
                phone:this.phone,
                desc:this.desc,
                service:this.services[this.chip1],
                budget:this.budgets[this.chip2]
            })
        }
    }
}
</script>

<style lang="postcss" scoped>
    .btn {
        @apply rounded-full px-3 py-2 mr-3 mb-1
    }
</style>