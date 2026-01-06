// Subject Performance Chart
const subjectCtx = document.getElementById('subjectPerformanceChart').getContext('2d');
new Chart(subjectCtx, {
    type: 'bar',
    data: {
        labels: ['Science', 'Maths', 'sst', 'English', 'Hindi'],
        datasets: [{
            label: 'correct',
            data: [20, 21, 25, 10, 15],
            backgroundColor: '#4caf50'
        }, {
            label: 'wrong',
            data: [5, 3, 8, 1, 2],
            backgroundColor: '#f44336'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Students Enrollment by Year Chart
const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
new Chart(enrollmentCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
        datasets: [{
            label: 'Hours',
            data: [2, 2.4, 4, 7, 9,6,5.88],
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Circular Chart - Syllabus Coverage
const syllabusCtx = document.getElementById('syllabusCoverageChart').getContext('2d');
new Chart(syllabusCtx, {
    type: 'doughnut',
    data: {
        labels: ['Lectures Completed'], 
        datasets: [{
            data: [19, 11],
            backgroundColor: ['#ffcc00', '#e0e0e0']
        }]
    }
});

// Circular Chart - Admission Rate
const admissionCtx = document.getElementById('admissionRateChart').getContext('2d');
new Chart(admissionCtx, {
    type: 'doughnut',
    data: {
        labels: ['Lectures Completed'],
        datasets: [{
            data: [2,7],
            backgroundColor: ['#ff6600', '#e0e0e0']
        }]
    }
});

// Circular Chart - Graduation Rate
const graduationCtx = document.getElementById('graduationRateChart').getContext('2d');
new Chart(graduationCtx, {
    type: 'doughnut',
    data: {
        labels: ['Lectures Completed'],
        datasets: [{
            data: [23,40],
            backgroundColor: ['#ff3366', '#e0e0e0']
        }]
    }
});

// Circular Chart - Fees Collection
const feesCtx = document.getElementById('feesCollectionChart').getContext('2d');
new Chart(feesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Lectures Completed'],
        datasets: [{
            data: [10,30],
            backgroundColor: ['#4caf50', '#e0e0e0']
        }]
    }
});
const feeCtx = document.getElementById('feeCollectionChart').getContext('2d');
new Chart(feeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Lectures Completed'],
        datasets: [{
            data: [5, 9],
            backgroundColor: ['#0000FF', '#e0e0e0']
        }]
    }
});
