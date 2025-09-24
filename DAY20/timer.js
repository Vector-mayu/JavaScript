// 2026 count down
function timers()
{
  const timer = document.getElementById('root');
  const olymp = new Date("2025-12-31T00:00:00"); // 2026 Countdown
  const now = new Date(); // Ajjki Date
  
  const IndianTime = (olymp - now);
  const days = Math.floor(IndianTime/(1000*60*60*24));
  const hours = Math.floor((IndianTime/(1000*60*60))%24);
  const minutes = Math.floor((IndianTime/(1000*60))%60);
  const seconds = Math.floor((IndianTime/(1000))%60);

  timer.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(timers, 1000);

const timer = document.getElementById('root');
timer.style.fontSize ="30px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center"

