console.info('Initialization started');

import Vue from 'vue';
import ptable from './ptable.vue';
import * as metricsStorage from './metrics-storage.js';
import metricsJSON from '../metrics.json';

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(ptable, {
            props: {
                metricsStorage: metricsStorage,
                defaultMetrics: metricsJSON.metrics
            }
        });
    }
});

console.info('Initialization copmpleted');
