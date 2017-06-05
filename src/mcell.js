export default {
    name: 'mcell',
    props: ['metric', 'index'],

    methods: {
        setValue(value) {
            this.metric.value = value;
        },

        selectContent(e) {
            e.target.select();
        }
    }
};
