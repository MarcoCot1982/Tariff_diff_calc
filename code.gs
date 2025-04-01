function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index').setTitle('Diferencia de Tarifas');
}

function calculateDifference(oldTariff, newTariff, totalHours) {
  if (!oldTariff || !newTariff || !totalHours) {
    return 'Por favor, ingrese todos los valores';
  }
  
  oldTariff = parseFloat(oldTariff);
  newTariff = parseFloat(newTariff);
  totalHours = parseFloat(totalHours);
  
  let euroDifference = (totalHours * newTariff) - (totalHours * oldTariff);
  let hoursDifference = euroDifference / oldTariff;
  
  return `Diferencia: €${euroDifference.toFixed(2)} <br> Equivalente en horas: ${hoursDifference.toFixed(2)} horas.`;
}
