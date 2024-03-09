const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('es-US', options);

