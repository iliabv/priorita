<template>
    <div class="importer">
        <input class="hidden" type="file" id="files" v-on:change="handleFileSelect"/>
        <button class="import-btn" type="button" v-on:click="initFileSelectDialog">
            Import Metrics
        </button>

        <div v-if="errors.length > 0" class="errors-container">
            <span v-for="error in errors" class="error">
                {{ error }}
            </span>
        </div>

        <div v-if="metrics.length > 0" class="metrics-container">
            <pre v-for="metric in metrics" class="metric">{{ JSON.stringify(metric, '\n', 2) }}</pre>
        </div>
    </div>
</template>

<script src="./importer.js"></script>
