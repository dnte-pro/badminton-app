import React from "react";

interface Coach {
    id: number;
    name: string;
    photo: string;
    bio: string;
    experience: number; // years of experience
}

const coaches: Coach[] = [
    {
        id: 1,
        name: "Alex Tan",
        photo: "/images/coaches/alex-tan.jpg",
        bio: "Former national player with a passion for coaching juniors and adults. Specializes in footwork and advanced techniques.",
        experience: 10,
    },
    {
        id: 2,
        name: "Priya Sharma",
        photo: "/images/coaches/priya-sharma.jpg",
        bio: "Certified coach with a focus on beginner and intermediate players. Known for her patient and encouraging teaching style.",
        experience: 7,
    },
    {
        id: 3,
        name: "Marcus Lee",
        photo: "/images/coaches/marcus-lee.jpg",
        bio: "Expert in doubles strategy and team play. Has coached several regional champions.",
        experience: 12,
    },
];

const Coaches: React.FC = () => {
    return (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
            <h1>Our Coaches</h1>
            <p>
                Meet our experienced and passionate badminton coaches. Whether you're a beginner or looking to take your game to the next level, our coaches are here to help!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
                {coaches.map((coach) => (
                    <div
                        key={coach.id}
                        style={{
                            flex: "1 1 250px",
                            border: "1px solid #eee",
                            borderRadius: 8,
                            padding: "1.5rem",
                            background: "#fafbfc",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            minWidth: 250,
                            maxWidth: 300,
                        }}
                    >
                        <img
                            src={coach.photo}
                            alt={coach.name}
                            style={{
                                width: "100%",
                                height: 180,
                                objectFit: "cover",
                                borderRadius: 6,
                                marginBottom: "1rem",
                            }}
                        />
                        <h2 style={{ margin: "0 0 0.5rem 0" }}>{coach.name}</h2>
                        <p style={{ fontStyle: "italic", color: "#666", margin: 0 }}>
                            {coach.experience} years experience
                        </p>
                        <p style={{ marginTop: "1rem" }}>{coach.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coaches;