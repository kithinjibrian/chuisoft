<template>
    <header class="scroll-smooth bg-fixed bg-cover bg-right md:bg-top w-full h-screen mb-5" style="background-image: url('/chui.png')">
        <nav class="nav text-gray-100 transition background-color delay-200 ease-in-out" ref="nav">
            <div class="flex items-center">
                <svg class="w-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M6,256C6,117.92881,117.92881,6,256,6c69.33153,0,132.07131,28.22262,177.35755,73.80606L363.47382,151.3606C336.22544,123.3788,298.14224,106,256,106c-82.84271,0-150,67.15729-150,150h.00001c0,82.84271,67.15729,150,150,150c42.49442,0,80.86168-17.67048,108.15469-46.06436l71.54357,69.87069C390.24583,476.78982,326.53412,506,256,506C117.92881,506,6,394.07119,6,256Z" fill="#fff" stroke-width="0"/><ellipse rx="100" ry="100" transform="translate(256 256)" fill="#3730a3" stroke-width="0"/></svg>
                <span class="text-4xl font-bold">huisoft</span>
            </div>
            <div class="flex-grow w-auto items-center hidden md:flex">
                <ul class="list-reset flex flex-1 justify-end items-center">
                    <li class="mr-3 rounded-full"><a class="inline-block py-2 px-4 text-white no-underline" href="#">About</a></li>
                    <li class="mr-3"><a class="inline-block py-2 px-4 no-underline" href="tel:+254115722315">+254115722315</a></li>
                </ul>
            </div>
        </nav>
        <div class="h-screen container mx-auto p-2 bg-gray-700 bg-opacity-20 md:bg-opacity-0 text-gray-100">
            
            <!--text box-->
            <div class="mt-20 md:mt-32">
                <h1 class="text-6xl font-bold tracking-widest antialiased mb-5">
                    Thank You.
                </h1>
                <h2 class="text-xl tracking-wide leading-10 mb-5">
                    We are grateful you requested as to work on<br class="hidden md:block"> your project. Our team will reach you<br class="hidden md:block"> as soonest as possible, possibly via<br class="hidden md:block"> a call or whatsapp message.
                </h2>
                <p class="mb-5">For faster response reach us through?</p>
                <div class="flex justify-start text-gray-100">
                    <c-btn
                    color='indigo'
                    :brightness="800">
                        <c-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </c-icon>
                        <a @click="$emit('track')" href="tel:+254115722315">Call Us</a>
                    </c-btn>
                    <c-btn
                    color='green'
                    :brightness="500">
                        <c-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        </c-icon>
                        <a @click="$emit('track')" href='https://api.whatsapp.com/send/?phone=254115722315&text=Hi%20Ant%20Builders,%20I%20need%20a%20website'>WhatsApp</a>
                    </c-btn>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    head(){
        return {
            title:"Thank you"
        }
    }
}
</script>

<style lang="postcss" scoped>
    .nav {
        @apply flex items-center justify-between flex-wrap py-3 pl-2 w-full fixed z-50
    }

    .btn {
        @apply rounded-full px-3 py-2 mr-5 shadow-2xl
    }
</style>