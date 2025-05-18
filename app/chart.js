const chart1 = document.getElementById('chart1');
const chart2 = document.getElementById('chart2');
const chart3 = document.getElementById('chart3');
const chart4 = document.getElementById('chart4');

//bar chart
new Chart(chart1, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Monthly Expensess($)',
        data: [500, 600, 700, 800, 900, 1000],
        borderWidth: 1,
        backgroundColor: [
            '#ff6f61'
        ]
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
      title: {
        display: true,
        text: 'Monthly Expensess($)',
        font: {
          size: 20
        },
      },
      subtitle: {
                display: true,
                text: 'Months',
                position: 'bottom',
                font:{
                    size: 16
                },
                
            }
    }
    }
  });

// polar area chart
new Chart(chart2, {
 
    type: 'polarArea',
    data: {
      labels: ['Stocks', 'Bonds', 'EFTs','Crypto'],
      datasets: [{
        label: 'Kolicina',
        data: [5000,1500,3000,1000],
        borderWidth: 1,
        backgroundColor: [
        '#4a90e2',
        '#7b8d93',
        '#c4c4c4',
        '#8b6f47'
  ],
      }]
    },
   options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
      title: {
        display: true,
        text: 'Investment Distribution',
        font: {
          size: 20
        }
      }
    }
    }
  });

// line chart
new Chart(chart3, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Portfolio Growth($)',
        data: [10000, 12000, 14000, 13000, 15000, 17000],
        borderWidth: 1,
        fill:true,
        backgroundColor: [
            '#d4d5da'
        ],
        borderColor: '#535670'
    
      }],

    },
    options:{
      responsive: false,
      maintainAspectRatio: false,
        plugins: {
        title:{
            display: true,
            text: 'Portfolio Growth($)',
            font:{
                size:20
            }
        }
        }
    }
  });

// pie chart
new Chart(chart4, {
    type: 'pie',
    data: {
      labels: ['Tech', 'Healthcare', 'Energy', 'Finance'],
      datasets: [{
        label: '# of Votes',
        data: [40, 25, 15, 20],
        borderWidth: 1
      }]
      
    },
    options:{
      responsive: false,
      maintainAspectRatio: false,
        plugins: {
        title:{
            display: true,
            text: 'Sector Allocation',
            font:{
                size:20
            }
        }
        }
    }
  });