var vg_1 = "idioms/esports_earnings.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "idioms/top_games.vg.json";
vegaEmbed("#bar", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);


let playersView, gamesView;

// Function to update team charts
function updateTeamCharts(selectedTeam) {
    if (playersView) {
        playersView.signal('teams', selectedTeam).run();
    }
    if (gamesView) {
        gamesView.signal('teams', selectedTeam).run();
    }
}

// Function to handle team button clicks
function initTeamButtons() {
    const teamButtons = document.querySelectorAll('.team-btn');
    
    teamButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            teamButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update charts
            const selectedTeam = this.getAttribute('data-team');
            updateTeamCharts(selectedTeam);
        });
    });
}

// Embed team visualizations
var vg_3 = "idioms/team_players.vg.json";
vegaEmbed("#players", vg_3).then(function(result) {
    playersView = result.view;
    initTeamButtons();
}).catch(console.error);

var vg_4 = "idioms/team_games.vg.json";
vegaEmbed("#games", vg_4).then(function(result) {
    gamesView = result.view;
    initTeamButtons();
}).catch(console.error);

var vg_5 = "idioms/viewership.vg.json";
vegaEmbed("#treemap", vg_5).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);