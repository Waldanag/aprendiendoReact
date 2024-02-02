import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard userName="midudev">
            Miguel Ángel Duran
        </TwitterFollowCard>
        <TwitterFollowCard userName="elonmusk">
            Elon Musk    
        </TwitterFollowCard>
        <TwitterFollowCard userName="waldanag">
            Walter Aldana Gálvez
        </TwitterFollowCard>
        </section>
        )
}