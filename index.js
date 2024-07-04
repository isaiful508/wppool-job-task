// navbar menu bar function
document.getElementById('menuButton').addEventListener('click', function () {
    var menu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    menu.classList.remove('hidden');
    closeButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
});

document.getElementById('closeButton').addEventListener('click', function () {
    var menu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    menu.classList.add('hidden');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
});


// chart
const ctx = document.getElementById('wpPoolChart').getContext('2d');
        const wpPoolChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'WPPOOL',
                        data: [0, 20, 40, 60, 80, 100, 120],
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'Google',
                        data: [0, 10, 30, 50, 70, 90, 110],
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'Microsoft',
                        data: [0, 15, 35, 55, 75, 95, 115],
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'Twitter',
                        data: [0, 5, 25, 45, 65, 85, 105],
                        borderColor: 'rgb(153, 102, 255)',
                        borderWidth: 2,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value'
                        }
                    }
                }
            }
        });