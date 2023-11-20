function showRemainingTime() {
    let inputData = document.getElementById('data').value;
    let today = new Date().toISOString().split('T')[0];
  
    if (inputData < today) {
      alert('Alege o dată din viitor!');
      return;
    }
  
    let dataInViitor = new Date(inputData).getTime(); 
    let timp = new Date().getTime(); 
  
    let diferentaTimp = dataInViitor - timp;
  

        const zile = Math.floor(diferentaTimp / (1000 * 60 * 60 * 24))
        const ore = Math.floor((diferentaTimp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minute = Math.floor((diferentaTimp % (1000 * 60 * 60)) / (1000 * 60))
        const secunde = Math.floor((diferentaTimp % (1000 * 60)) / 1000)

        var rezultat = "Timp rămas până la data aleasă: " + zile + " zile, " + ore + " ore, " + minute + " minute, " + secunde + " secunde.";

  document.getElementById("rezultat").innerHTML = rezultat;
  }