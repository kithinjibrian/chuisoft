<template>
    <ul>
        <li>
            <input :id="id" type="checkbox" class="hidden"/>
            <label :for="id" class='ex border-t-2 block text-left p-4'>
                <slot name="title"></slot>
            </label>
            <div class="overflow-hidden p-5 max-h-0 hidden">
                <slot name="text"></slot>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    data:()=>({
        id:(Math.random() + 1).toString(36).substring(5)
    })
}
</script>

<style lang="postcss">
    .ex {
        transition: max-height 0.2s ease-out;
    }

    .ex::after {
        content: "+";
        font-size:20px;
        float: right;
    }

    input:checked + label + div {
        max-height: 1000px;
        display: block;
    }

    input:checked + label::after {
        content: "x";
    }
</style>