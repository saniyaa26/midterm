function predict(){
  let study = +document.getElementById("study").value;
  let fitness = +document.getElementById("fitness").value;
  let sleep = +document.getElementById("sleep").value;
  let phone = 10 - document.getElementById("phone").value;
  let years = document.getElementById("years").value;

  let score = study + fitness + sleep + phone;
  let percent = (score/40)*100;

  document.getElementById("bar").style.width = percent + "%";

  let career, health, peace, advice;

  if(score >= 30){
    career = "🚀 High growth & leadership roles";
    health = "💪 Strong and energetic body";
    peace = "🧘 Calm & confident mindset";
    advice = "Keep your habits consistent. You're unstoppable!";
  } else if(score >= 20){
    career = "📈 Stable career with progress";
    health = "🙂 Average health";
    peace = "😐 Sometimes stressed";
    advice = "Improve discipline for a better future.";
  } else {
    career = "⚠️ Career confusion & delays";
    health = "🩺 Weak immunity & fatigue";
    peace = "😞 Anxiety & regret";
    advice = "Start changing habits today. Future is not fixed.";
  }

  let result = `
    <h3>🌟 Your Future After ${years} Years</h3>
    <p><b>Career:</b> ${career}</p>
    <p><b>Health:</b> ${health}</p>
    <p><b>Mental State:</b> ${peace}</p>
    <hr>
    <p><b>Advice:</b> ${advice}</p>
  `;

  let box = document.getElementById("result");
  box.style.display = "block";
  box.innerHTML = result;
}
