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
  
    
  
    document.getElementById("rezultat").innerHTML = rezultat;
  }