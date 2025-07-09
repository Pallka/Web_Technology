function inputData() {
  let name = prompt("Введіть назву товару:");
  let price = parseFloat(prompt("Введіть ціну товару:").replace(",", "."));
  let quantity = parseInt(prompt("Введіть кількість товарів:"));

  if (isNaN(price) || price <= 0 || isNaN(quantity) || quantity <= 0 ) { //перевірка даних
    alert("Некоректні дані. Будь ласка, введіть дані знову.");
    return inputData();
  }

  return { name, price, quantity };
}

function calculatePrice(data) { // розрахунок ціни
  let totalPriceWithoutTax = 0;
  let tax = 0;
  let totalPriceWithTax = 0;

  for (let i = 0; i < data.length; i++) {
    let taxPercent = 0.2;
    let priceWithoutTax = data[i].price / (1 + taxPercent); // ціна без пдв = загальна ціна / (1 + податок)
    let taxAmount = data[i].price - priceWithoutTax;

    
    totalPriceWithoutTax += priceWithoutTax * data[i].quantity;
    tax += taxAmount * data[i].quantity;
  }

  totalPriceWithTax = totalPriceWithoutTax + tax;

  return { totalPriceWithoutTax, tax, totalPriceWithTax };
}

function printCheck(data, totalPriceWithoutTax, tax, totalPriceWithTax) {
  console.log("Фіскальний касовий чек");
  console.log("-----------------------------------------------------------------------------");
  console.log("   Назва товару    | Ціна з ПДВ | Кількість  | Вартість   | Вартість без ПДВ");
  let n = 1;
  for (let i = 0; i < data.length; i++) { 
    console.log(`${n}. ${data[i].name.padEnd(15)} | ${data[i].price.toFixed(2).padStart(10)} | ${data[i].quantity.toString().padStart(10)} | ${(data[i].price * data[i].quantity).toFixed(2).padStart(10)} | ${(data[i].price / 1.2 * data[i].quantity).toFixed(2).padStart(15)}`);
    n++;
  }
  console.log("-----------------------------------------------------------------------------");
  console.log(`Загальна вартість без ПДВ: ${totalPriceWithoutTax.toFixed(2)} грн`);
  console.log(`Сума ПДВ: ${tax.toFixed(2)} грн`);
  console.log(`Загальна вартість з ПДВ: ${totalPriceWithTax.toFixed(2)} грн`);
  console.log("-----------------------------------------------------------------------------");
  console.log(`Кількість артикулів: ${data.length}`);
  console.log("-----------------------------------------------------------------------------");
  console.log("Каса: 0001");
  console.log("Касир: Палка К.О.");
  console.log(`Дата: ${new Date().toLocaleDateString()}`);
  console.log(`Час: ${new Date().toLocaleTimeString()}`);
  console.log("-----------------------------------------------------------------------------");
  console.log("QR-код чеку: [QR-код]");
  console.log("-----------------------------------------------------------------------------");
}

function main() {
  let data = [];
  let addMore = true;

  while (addMore) {
    let inputDataResult = inputData();
    data.push(inputDataResult);
    addMore = confirm("Бажаєте додати ще один товар?");
  }

  if (data.length === 0) {
    console.log("Жодного товару не було додано. Чек не може бути сформований.");
    return;
  }

  let calculatePriceResult = calculatePrice(data);
  printCheck(data, calculatePriceResult.totalPriceWithoutTax, calculatePriceResult.tax, calculatePriceResult.totalPriceWithTax);
}

main();