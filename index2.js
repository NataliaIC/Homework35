function showRemainingTime() {
    const time = document.querySelector('#time');
    const dataAleasa = time.value;
    const today = new Date().toISOString().split('T')[0];

    if (dataAleasa < today) {
        alert('Alege o dată din viitor!');
        return;
    }

    setInterval(() => {
        const date = new Date();
        const timp = new Date().getTime();
        const dataInViitor = new Date(dataAleasa).getTime();
        
        let diferentaTimp = dataInViitor - timp;
        
        const secondsLeft = Math.floor(diferentaTimp / 1000);
        const days = Math.floor(secondsLeft / (24 * 60 * 60));
        const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
        const seconds = secondsLeft % 60;

        const display = `${days} zile, ${hours} ore, ${minutes} minute, ${seconds} secunde`;

        const countdown = document.querySelector('#countdown');
        countdown.textContent = display;
    }, 1000);
}