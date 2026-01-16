# Village Committee Election & Management Website

A comprehensive web platform for village committee elections, member management, and community engagement.

## Features

### 🏘️ Home Page
- Welcome message from elected president
- How the committee helps villagers
- Current leadership information
- Quick access links to all sections

### 📋 Elections Page
- Vote for President, Vice President, and Secretary
- Real-time election results
- Democratic voting system
- Election information and guidelines

### 👥 Members Page
- Committee member profiles
- Contact information
- Committee structure overview
- Office hours and meeting schedule

### 📖 Guides Page
- How to help the village
- President's guidance for committee members
- Village programs and benefits
- Call to action for community participation

### 📧 Contact Page
- Contact form for messages
- Contact information
- FAQ section
- Quick navigation links

## Project Structure

```
VillageCommitteeWebsite/
├── index.html                 # Home page
├── css/
│   ├── styles.css            # Main stylesheet
│   ├── election.css          # Election page styles
│   ├── members.css           # Members page styles
│   ├── guides.css            # Guides page styles
│   └── contact.css           # Contact page styles
├── js/
│   ├── script.js             # Main JavaScript
│   └── contact.js            # Contact form handling
└── pages/
    ├── election.html         # Elections page
    ├── members.html          # Members page
    ├── guides.html           # Guides page
    └── contact.html          # Contact page
```

## How to Run

### Using Python Live Server
```bash
cd c:\Users\User\Documents\VillageCommitteeWebsite
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Using Node.js
```bash
cd c:\Users\User\Documents\VillageCommitteeWebsite
npx http-server
```

## Features Explained

### 🗳️ Voting System
- Cast votes for different committee positions
- Real-time vote counting and display
- Data stored securely in browser localStorage

### 📊 Committee Management
- Display of elected officials
- Member contact information
- Committee roles and responsibilities

### 💬 Community Engagement
- Contact form for community messages
- FAQ section with common questions
- Guides on how to help the village
- President's guidance for transparent governance

### 📱 Responsive Design
- Mobile-friendly interface
- Works on all screen sizes
- Clean and modern UI

## Data Storage

All data is stored in browser localStorage:
- `committeData`: Committee member information
- `electionVotes`: Vote counts for elections
- `contactMessages`: Messages from contact form

## Customization

To customize the website:
1. Edit committee member details in `js/script.js`
2. Modify colors in CSS files
3. Update contact information in `pages/contact.html`
4. Add new guides or programs in `pages/guides.html`

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage API

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Contact & Support

For issues or suggestions, use the contact form on the website.

---
**Village Committee Portal - Empowering Communities Through Technology**
