<template>
    <div class="mcell">
        <div class="mcell-title" :title="metric.description">
            {{ metric.title }}
        </div>
        <div class="mcell-variants">
            <div v-for="(variant, index) in metric.variants"
                 v-on:click="setValue(variant.value)"
                 :class="{'mcell-variant': true, 'mcell-variant--active': variant.value === metric.value}" >
                <span class="mcell-variant-text">{{ variant.name }}</span>
                <span class="mcell-variant-value">{{ variant.value }}</span>
            </div>
        </div>
        <input type="text" class="mcell-input"
               :tabindex="index"
               v-on:focus="selectContent"
               v-model.lazy.number="metric.value"/>
    </div>
</template>

<script src="./mcell.js"></script>
