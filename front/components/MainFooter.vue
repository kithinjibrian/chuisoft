<template>
    <footer>
        <nav class="nav bg-gray-900 text-gray-100">
            <span class="text-xl font-bold">Ant Builders</span>
            <div class="flex-grow w-auto items-center hidden md:flex">
                <ul class="list-reset flex flex-1 justify-end items-center">
                    <li class="mr-3"><a class="inline-block py-2 px-4 text-white no-underline" href="#">About</a></li>
                    <li class="mr-3"><a class="inline-block py-2 px-4 text-indigo-800 no-underline" href="tel:+254115722315">+254115722315</a></li>
                </ul>
            </div>
        </nav>
    </footer>
</template>

<style lang="postcss" scoped>
    .nav {
        @apply flex items-center justify-between flex-wrap pt-3 w-full p-5
    }
</style>