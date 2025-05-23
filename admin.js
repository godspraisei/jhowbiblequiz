if (localStorage.getItem("adminLoggedIn") !== "true") {
  alert("You must be logged in as admin to view this page.");
  window.location.href = "index.html";
}

if (localStorage.getItem("adminLoggedIn") !== "true") {
  alert("Access denied!");
  window.location.href = "index.html";
}

const results = JSON.parse(localStorage.getItem("quizResults")) || [];

const tableBody = document.querySelector("#results-table tbody");
const leaderboard = document.getElementById("leaderboard");

results.forEach((entry, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${entry.username}</td>
    <td>${entry.score}</td>
    <td>${entry.date}</td>
  `;
  tableBody.appendChild(row);
});

const topScores = [...results].sort((a, b) => b.score - a.score).slice(0, 10);
topScores.forEach(entry => {
  const li = document.createElement("li");
  li.textContent = `${entry.username} — ${entry.score} pts`;
  leaderboard.appendChild(li);
});
function exportResults() {
  const results = JSON.parse(localStorage.getItem("quizResults")) || [];

function resetAllData() {
  if (confirm("Are you sure you want to delete ALL quiz results? This cannot be undone!")) {
    localStorage.removeItem("quizResults");

    // Optional: allow everyone to take quiz again
    localStorage.removeItem("quizTaken");

    alert("All quiz data has been cleared.");
    window.location.reload();
  }
}

}

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Username,Score,Date\n"; 

  results.forEach(entry => {
    csvContent += `${entry.username},${entry.score},${entry.date}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "quiz_results.csv");
  document.body.appendChild(link);

  link.click(); 
  document.body.removeChild(link);{
}
function logoutAdmin() {
  localStorage.removeItem("adminLoggedIn"); 
  window.location.href = "index.html";      
}
