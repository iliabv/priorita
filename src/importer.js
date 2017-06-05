import * as utils from './utils';
import * as metricsUtils from './metrics-utils.js';

export default {
    name: 'importer',

    props: ['metricsStorage', 'defaultMetrics'],

    data() {
        return {
            metrics: this.defaultMetrics,
            errors: [],
            metricsJSON: metricsUtils.toJSON(this.defaultMetrics),
        };
    },

    created() {
        this.metricsStorage.load().then(metrics=>{
            console.log('Storage metrics:', metrics);
            if (metrics && metrics.length !== 0) {
                this.setMetrics(metrics);
                this.metricsJSON = metricsUtils.toJSON(this.metrics);
            }
        });
    },

    watch: {
        metrics: {
            handler(metrics) {
                console.log('Save metrics to storage:', metrics);
                this.metricsStorage.save(metrics);
            }
        }
    },

    methods: {
        showErrors(errors) {
            if (!Array.isArray(errors)) {
                errors = [String(errors)];
            }
            console.log('Errors:', errors);
            this.errors = errors;
        },

        handleFileSelect(e) {
            if (e.target.files.length === 0) {
                return;
            }
            utils.readFile(e.target.files[0])
                .then(this.setMetricsFromFile.bind(this))
                .catch(this.showErrors.bind(this));
        },

        setMetricsFromFile(fileData) {
            this.setMetrics(fileData ? fileData.metrics : null);
        },

        setMetrics(metrics) {
            var check = metricsUtils.checkMetrics(metrics);
            if (check.success) {
                console.log('Set metrics:', metrics);
                this.errors = [];
                this.metrics = metrics;
            } else {
                this.showErrors(check.errors);
            }
        },

        initFileSelectDialog() {
            this.$el.querySelector('#files').click();
        }
    }
};
