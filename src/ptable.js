import mcell from './mcell.vue';
import * as copyUtils from './copy-utils.js';

function countTotal(metrics) {
    return metrics.reduce((acc, metric) => {
        return acc + (+metric.value || 0);
    }, 0);
}

export default {
    name: 'ptable',

    props: ['metricsStorage', 'defaultMetrics'],

    components: {
        mcell
    },

    data() {
        return {
            metrics: this.defaultMetrics,
            total: countTotal(this.defaultMetrics)
        };
    },

    created() {
        this.metricsStorage.load().then(metrics=>{
            console.log('Storage metrics:', metrics);
            if (metrics && metrics.length !== 0) {
                this.metrics = metrics;
            }
        });
    },

    watch: {
        metrics: {
            handler(metrics) {
                console.log('Save metrics to storage:', metrics);
                this.metricsStorage.save(metrics);
                this.total = countTotal(metrics);
                copyUtils.copyToClipboard(this.total);
            },
            deep: true
        }
    },

    methods: {
        clearValues() {
            this.metrics.forEach(metric => {
                metric.value = 0;
            });
        },

        openOptions() {
            chrome.runtime.openOptionsPage();
        },

        selectContent(e) {
            e.target.select();
        }

    }
}
