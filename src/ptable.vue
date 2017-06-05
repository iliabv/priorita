<template>
    <div class="ptable">
        <mcell v-for="(metric, index) in metrics"
               :metric="metric"
               :index="index + 1"
               :key="metric.title"/>
        <div class="ptable-result">
            <span class="ptable-result-title">Total</span>
            <input class="mcell-input ptable-result-input" type="text"
                   :value="total"/>
        </div>
        <div class="secondary-actions">
            <button class="secondary-btn" v-on:click="openOptions" tabindex="-1">Options</button>
            <button class="secondary-btn" v-on:click="clearValues" tabindex="-1">Clear</button>
        </div>
    </div>
</template>

<script src="./ptable.js"></script>
