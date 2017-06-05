console.info('Initialization started');

import Vue from 'vue';
import importer from './importer.vue';
import * as metricsStorage from './metrics-storage.js';
import metricsJSON from '../metrics.json';

const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(importer, {
            props: {
                metricsStorage,
                defaultMetrics: metricsJSON.metrics
            }
        });
    }
});

console.info('Initialization copmpleted');
