function checkPassword() {
    const password = document.getElementById('admin-password').value;
    if (password === 'yourSecretPassword') {
        document.getElementById('login-form').style.display = 'none';
        document.querySelector('.admin-container').style.display = 'block';
        loadLeaderboard();
    } else {
        alert('Wrong password!');
    }
}

function loadLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    const results = JSON.parse(localStorage.getItem("quizResults") || "[]");
    results.sort((a, b) => b.score - a.score);

    leaderboardList.innerHTML = results.map(result =>
        `<li><strong>${result.name}</strong>: ${result.score}%</li>`
    ).join('');
}
function resetAllData() {
  if (confirm("Are you sure you want to delete ALL quiz results? This cannot be undone!")) {
    localStorage.removeItem("quizResults");
    
    alert("All quiz data has been cleared.");
    window.location.reload();
  }
}
