<template>
    <div class="importer">
        <input class="hidden" type="file" id="files" v-on:change="handleFileSelect"/>
        <button class="import-btn" v-on:click="initFileSelectDialog">
            Import Metrics
        </button>

        <div v-if="errors.length > 0" class="errors-container">
            <span v-for="error in errors" class="error">
                {{ error }}
            </span>
        </div>

        <div v-if="metricsJSON" class="metrics-container">
            <pre class="metrics">{{ metricsJSON }}</pre>
        </div>
    </div>
</template>

<script src="./importer.js"></script>
