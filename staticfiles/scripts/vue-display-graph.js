Vue.component('metric-chart', {
    props: ['compid', 'dataurl'],
    template: `
        <canvas ref="chart"
        :data-url="dataurl"
        height="100px"></canvas>
    `,
    mounted: function() {
        let histChart = new Chart(this.$refs.chart, {
            type: 'line',
            data: {
                datasets: [],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                    }
                }
            }
        });

        this.getDatasets(histChart);
    },
    methods: {
        getDatasets: function(histChart) {
            if (!this.loading) {
                this.loading = true;
                this.$http.get(this.dataurl)
                    .then((response) => {
                        console.log(response.body)
                        histChart.data.datasets = [];
                        histChart.data.datasets.push(response.body);
                        
                        histChart.update();
                        this.loading = false;
                    })
                    .catch((err) => {
                        this.loading = false;
                        console.log(err);
                    });
            }
        }
    }
})

new Vue({
    el: "#app",
    delimiters: ["${","}"],
    data: {
        datasets: [],
        loading: false,
        currentArticle: {},
        message: null,
        newArticle: { "article_heading": null, "article_body": null },
    },
    mounted: function() {
        console.log('testing');
    },
    methods: {
        changeGraphMetric: function(event) {
            console.log(event.target.value);
            window.location.href = '/display-graph/' + event.target.value;
        },
        changeGraphTimezone: function(event) {
            console.log(this.$refs.tzSelection, event);
        }
    }
});