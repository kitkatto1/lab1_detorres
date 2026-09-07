// Interactive Superman Button Feature
const heroBtn = document.getElementById('hero-btn');
const powerOutput = document.getElementById('power-output');

const powers = [
    "🔥 Heat Vision activated! Fortress of Solitude systems online.",
    "❄️ Super-Breath engaged! Cooling down server temperatures.",
    "💨 Flight velocity reached Mach 5 across Cavite skies!",
    "💪 Super-strength deployed: Compiling code in record time!"
];

heroBtn.addEventListener('click', () => {
    const randomPower = powers[Math.floor(Math.random() * powers.length)];
    powerOutput.textContent = randomPower;
});

// Dynamic Age Calculator / Verifier based on September 13, 2006
function calculateAge() {
    const birthDate = new Date('2006-09-13');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('dynamic-age').textContent = age + " years old (Super-Powered!)";
}

calculateAge();