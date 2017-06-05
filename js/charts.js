const mainTraffic = document.getElementById('mainChart');
let mainTrafficChart = new Chart(mainTraffic, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17', '18-24','25-31'],
        datasets: [{
            data: [150, 250, 500, 250, 200, 250, 500, 100, 250, 500, 250],
            borderWidth: 1,
            tension: 0,
            backgroundColor: 'rgba(84, 104, 134, .5)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: { display: false },
        maintainAspectRatio: true,
        responsive: true
    }

});

const dailyTraffic = document.getElementById('dailyChart');
let dailyTrafficChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 200, 325, 150, 100, 300],
            borderWidth: 1,
            tension: 0,
            backgroundColor: 'rgba(84, 104, 134, .5)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {display: false},
        responsive: true,
        maintainAspectRatio: true
    }

});

const mobileTraffic = document.getElementById('mobileChart');
let mobileTrafficChart = new Chart(mobileTraffic, {
  type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [15, 15, 70],
            borderWidth: 1,
            backgroundColor: [
              'rgb(109, 170, 173)',
              'rgb(52, 91, 93)',
              'rgb(60, 100, 125)'
            ],
        }]
    },
    options: {
        legend: {display: true,
                 position: 'bottom',
                 labels: { boxWidth: 10, }
                },
        cutoutPercentage: 45,
        responsive: true,
        maintainAspectRatio: true
    }
});
