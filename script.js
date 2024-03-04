function calculateEarnings() {
  const rpm = parseFloat(document.getElementById("rpm").value);
  const traffic = parseInt(document.getElementById("traffic").value);
  const months = parseInt(document.getElementById("months").value);
  const profitMargin = parseFloat(document.getElementById("profitMargin").value) / 100;

  const lifetimeEarnings = (rpm * traffic * months) / 1000;
  const spend = lifetimeEarnings / (1 - profitMargin);

  document.getElementById("lifetimeEarnings").textContent = lifetimeEarnings.toFixed(2);
  document.getElementById("spend").textContent = spend.toFixed(2);
}
