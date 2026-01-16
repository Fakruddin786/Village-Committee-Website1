// Sample data - Store in localStorage
const committeData = {
    president: {
        name: "Raj Kumar Singh",
        position: "President",
        email: "raj.singh@village.com",
        phone: "9876543210",
        bio: "Dedicated leader with 20 years of community service experience."
    },
    vice_president: {
        name: "Priya Sharma",
        position: "Vice President",
        email: "priya.sharma@village.com",
        phone: "9876543211"
    },
    secretary: {
        name: "Amit Patel",
        position: "Secretary",
        email: "amit.patel@village.com",
        phone: "9876543212"
    },
    members: [
        { name: "Ram Kumar", role: "Member", email: "ram.kumar@village.com" },
        { name: "Geeta Devi", role: "Member", email: "geeta.devi@village.com" },
        { name: "Suresh Gupta", role: "Member", email: "suresh.gupta@village.com" },
        { name: "Anita Singh", role: "Member", email: "anita.singh@village.com" },
        { name: "Vikram Kumar", role: "Member", email: "vikram.kumar@village.com" }
    ]
};

// Initialize data on first load
function initializeData() {
    if (!localStorage.getItem('committeData')) {
        localStorage.setItem('committeData', JSON.stringify(committeData));
    }
}

// Get committee data from localStorage
function getCommitteData() {
    initializeData();
    return JSON.parse(localStorage.getItem('committeData'));
}

// Display President Info on Homepage
function displayPresidentInfo() {
    const presidentInfo = document.getElementById('presidentInfo');
    if (presidentInfo) {
        const data = getCommitteData();
        const president = data.president;
        presidentInfo.innerHTML = `
            <div class="president-info">
                <h3>${president.name}</h3>
                <p><strong>Position:</strong> ${president.position}</p>
                <p><strong>Email:</strong> <a href="mailto:${president.email}" style="color: #3498db;">${president.email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${president.phone}" style="color: #3498db;">${president.phone}</a></p>
                <p><em>${president.bio}</em></p>
            </div>
        `;
    }
}

// Display Members
function displayMembers() {
    const container = document.getElementById('membersContainer');
    if (container) {
        const data = getCommitteData();
        let html = `
            <div class="member-card">
                <h3>${data.president.name}</h3>
                <p><strong>${data.president.position}</strong></p>
                <p>📧 ${data.president.email}</p>
                <p>📱 ${data.president.phone}</p>
            </div>
            <div class="member-card">
                <h3>${data.vice_president.name}</h3>
                <p><strong>${data.vice_president.position}</strong></p>
                <p>📧 ${data.vice_president.email}</p>
                <p>📱 ${data.vice_president.phone}</p>
            </div>
            <div class="member-card">
                <h3>${data.secretary.name}</h3>
                <p><strong>${data.secretary.position}</strong></p>
                <p>📧 ${data.secretary.email}</p>
                <p>📱 ${data.secretary.phone}</p>
            </div>
        `;
        
        data.members.forEach(member => {
            html += `
                <div class="member-card">
                    <h3>${member.name}</h3>
                    <p><strong>${member.role}</strong></p>
                    <p>📧 ${member.email}</p>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
}

// Election Logic
function castVote(position, candidateName) {
    let votes = JSON.parse(localStorage.getItem('electionVotes') || '{}');
    if (!votes[position]) {
        votes[position] = {};
    }
    votes[position][candidateName] = (votes[position][candidateName] || 0) + 1;
    localStorage.setItem('electionVotes', JSON.stringify(votes));
    alert(`✅ Vote casted successfully for ${candidateName} as ${position}!`);
    displayElectionResults();
}

function displayElectionResults() {
    const resultsContainer = document.getElementById('electionResults');
    if (resultsContainer) {
        const votes = JSON.parse(localStorage.getItem('electionVotes') || '{}');
        let html = '<h3>Current Election Results</h3>';
        
        if (Object.keys(votes).length === 0) {
            html += '<p>No votes casted yet.</p>';
        } else {
            for (const position in votes) {
                html += `<h4>${position}</h4><ul>`;
                for (const candidate in votes[position]) {
                    html += `<li>${candidate}: ${votes[position][candidate]} votes</li>`;
                }
                html += '</ul>';
            }
        }
        
        resultsContainer.innerHTML = html;
    }
}

// Display Guides
function displayGuides() {
    const guidesContainer = document.getElementById('guidesContainer');
    if (guidesContainer) {
        const guides = [
            {
                title: "How to Participate in Community Activities",
                content: "1. Attend monthly committee meetings\n2. Register your interest areas\n3. Volunteer for community projects\n4. Share ideas and feedback"
            },
            {
                title: "How to Report Issues",
                content: "1. Contact committee members directly\n2. Submit complaints through online form\n3. Attend grievance redressal sessions\n4. Follow up on resolution status"
            },
            {
                title: "How to Benefit from Village Programs",
                content: "1. Register for available schemes\n2. Provide required documentation\n3. Attend awareness programs\n4. Track your application status"
            },
            {
                title: "How to Volunteer",
                content: "1. Express your interest to committee\n2. Choose area of expertise\n3. Attend volunteer orientation\n4. Participate in activities"
            }
        ];
        
        let html = '';
        guides.forEach(guide => {
            html += `
                <div class="guide-card">
                    <h3>${guide.title}</h3>
                    <p>${guide.content.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        });
        
        guidesContainer.innerHTML = html;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    displayPresidentInfo();
    displayMembers();
    displayElectionResults();
    displayGuides();
});
