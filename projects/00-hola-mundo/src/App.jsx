import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
    userName: "midudev",
    name: "Miguel Ángel Duran",
    isFollowing: true,
    },
    {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
    },
    {
    userName: "waldanag",
    name: "Walter Aldana Gálvez",
    isFollowing: false,
    },
];

export function App() {
    return (
    <section className="App">
        {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
        key={userName} 
        userName={userName} 
        initialIsFollowing={isFollowing}
        >
        {name}
        </TwitterFollowCard>
        ))}
    </section>
    );
}
