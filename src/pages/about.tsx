import React from 'react';

const About: React.FC = () => (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
        <h1>About ShuttleHub</h1>
        <p>
            ShuttleHub is your go-to app for managing and organizing badminton games, players, and events.
            Whether you are a casual player or a club organizer, ShuttleHub helps streamline your badminton experience.
        </p>
        <h2>Features</h2>
        <ul>
            <li>Schedule and join games</li>
            <li>Track player stats and rankings</li>
            <li>Manage clubs and memberships</li>
            <li>Stay updated with notifications</li>
        </ul>
        <h2>Contact</h2>
        <p>
            For feedback or support, please email us at <a href="mailto:support@shuttlehub.com">support@shuttlehub.com</a>.
        </p>
    </div>
);

export default About;