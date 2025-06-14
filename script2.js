// Experience Popup Functionality
const jobs = document.querySelectorAll('.job');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');
const popupContent = document.querySelector('.popup-content');
const popupClose = document.querySelector('.popup-close');

const contents = {
    ads: `<ul class="experience-list">
            <li>Responsible for making ad on Facebook, Instagram, TikTok, Google and Line. Professional in Message campaign, Conversion, Traffic, Awareness, Search engine and Gain friends.</li>
            <li>Responsible for making for 4 counties; Thailand, France, Ireland, and New Zealand.</li>
            <li>Supporting sales and drive lead generation by Digital Advertising.</li>
            <li>Identifying potential customers by collecting data analytics from Ads.</li>
            <li>Create content to develop advertising both copy and vision.</li>
            <li>Collaborate with design team to create artwork and video.</li>
            <li>Stay up to date to emerging trends by researching competitor brand.</li>
            <li>Plan and analyze advertising campaign to meet goal and CPI.</li>
            <li>Manage cost and optimize advertising campaign to reach the target CPR.</li>
            <li>Conduct systematic analysis of key performance indicators.</li>
            <li>Report performance advertising in each campaign with CPL and AC.</li>
        </ul>`,
    content: `<ul class="experience-list">
            <li>Maintain company to trustworthy appearance in online media.</li>
            <li>Manage all digital marketing channels with the overall digital marketing strategy.</li>
            <li>Rebranding luxury project with branding strategic marketing.</li>
            <li>Research competitor to develop website.</li>
            <li>Plan grid Instagram profile and drive social media content calendar.</li>
            <li>Plan and manage costs for influencer advertising and marketing event.</li>
            <li>Create content on Digital platform Facebook, TikTok, Instagram, YouTube, Blockdit, LinkedIn and Line OA.</li>
            <li>Writing copy on social media and update blog news on website.</li>
            <li>Meeting quarterly to report marketing plan to Broad Of Directors.</li>
            <li>Responsible for making EDM and SMS.</li>
            <li>Deal and brief production to create produce video and picture for Advertising.</li>
            <li>Cooperate with outsource to PR company on Newspaper, Boucher, Billboard and television media.</li>
            <li>Negotiating and confirming an agreement with agency event including brief mood and theme.</li>
        </ul>`,
    junior: `<ul class="experience-list">
            <li>Responsible for Influencers advertising both Thai and Laos.</li>
            <li>Create content guideline and brief YouTuber.</li>
            <li>Making spot announcement with radio station in Laos.</li>
            <li>Work closely with Account Executive to capture the essence of clients’ brands, their products or services, features, benefits and core values.</li>
            <li>Analysis target to create persona brand and persona customer with strategic marketing.</li>
            <li>Work closely with manager to create branding for vide variety of companies, including Logo and CI.</li>
        </ul>`
};

window.addEventListener('scroll', () => {
    jobs.forEach(job => {
        const rect = job.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            job.classList.add('active');
        }
    });
});

jobs.forEach(job => {
    job.addEventListener('click', () => {
        const contentKey = job.getAttribute('data-content');
        popupContent.innerHTML = contents[contentKey];
        popup.classList.add('active');
        overlay.classList.add('active');
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});
