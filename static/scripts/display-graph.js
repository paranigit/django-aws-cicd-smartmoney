$(function() {
    document.getElementById("graphKeySelection").addEventListener("change", changeGraphKey);
    document.getElementById("tzSelection").addEventListener("change", changeGraphKey);

    function changeGraphKey() {
        var metric = document.getElementById("graphKeySelection");
        var tz = document.getElementById("tzSelection");
        window.location.href = window.location.href = '/display-graph/' + metric.value + '?tz=' + tz.value ;
    }

    var ctx_hist = $("#history-chart");

    let histChart = new Chart(ctx_hist, {
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

    var getLiveData = function() {
        $.ajax({
            url: ctx_hist.data('url'),
            success: function(result) {
                console.log(result);
                histChart.data.datasets = [];
                $.each(result, function(key, val) {
                    console.log(val)
                    histChart.data.datasets.push(val);
                });
                histChart.update();
            }
        });
    }

    getLiveData();
    // get new data every 3 seconds
    setInterval(getLiveData, 30000);
});