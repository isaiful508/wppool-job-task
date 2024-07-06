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


// Toggle dropdown menus
document.getElementById('sectorsButton').addEventListener('click', function () {
    document.getElementById('sectorsMenu').classList.toggle('hidden');
});


document.getElementById('ipoButton').addEventListener('click', function () {
    document.getElementById('ipoMenu').classList.toggle('hidden');
});


// Toggle accordion content and icons
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
        const icon = button.querySelector('.icon');
        icon.querySelector('.plus-icon').classList.toggle('hidden');
        icon.querySelector('.minus-icon').classList.toggle('hidden');
    });
});

// Toggle time range buttons
document.querySelectorAll('[id^="timeButton"]').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('[id^="timeButton"]').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        button.classList.add('bg-blue-600', 'text-white');
        button.classList.remove('bg-gray-200', 'text-gray-700');
    });
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
                data: [20, 80, 30, 20, 60, 80, 120],
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Google',
                data: [10, 15, 45, 20, 60, 70, 95],
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Microsoft',
                data: [10, 25, 10, 110, 40, 50, 90],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Twitter',
                data: [55, 40, 20, 44, 60, 85, 75],
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

// table search function

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#tableBody tr');

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let matchFound = false;

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
                matchFound = true;
            }
        });

        if (matchFound) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// slider code 
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const page1Button = document.getElementById('page1');
const page2Button = document.getElementById('page2');

prevButton.addEventListener('click', () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
    });
});

page1Button.addEventListener('click', () => {
    slider.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
});

page2Button.addEventListener('click', () => {
    slider.scrollTo({
        left: slider.clientWidth,
        behavior: 'smooth'
    });
});

