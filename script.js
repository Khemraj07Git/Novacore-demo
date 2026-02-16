const players = [
    { ign: "NovaRex", role: "IGL", device: "Mobile", kd: "5.2" },
    { ign: "NovaShadow", role: "Assaulter", device: "Mobile", kd: "4.8" },
    { ign: "NovaSniper", role: "Sniper", device: "Mobile", kd: "4.5" }
];

const achievements = [
    { title: "BGMI Open Scrims", place: "2nd Place", date: "Jan 2026" },
    { title: "Community Cup", place: "Winners", date: "Dec 2025" },
    { title: "Pro Night Tournament", place: "3rd Place", date: "Nov 2025" }
];

function loadPlayers() {
    const container = document.getElementById("playerCards");
    players.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.ign}</h3>
                <p>Role: ${p.role}</p>
                <p>Device: ${p.device}</p>
                <p>K/D: ${p.kd}</p>
            </div>
        `;
    });
}

function loadAchievements() {
    const container = document.getElementById("achievementCards");
    achievements.forEach(a => {
        container.innerHTML += `
            <div class="card">
                <h3>${a.title}</h3>
                <p>${a.place}</p>
                <p>${a.date}</p>
            </div>
        `;
    });
}

loadPlayers();
loadAchievements();
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
