import './App.css'
import { FriendList } from './FriendList.tsx';
import { AddFriendForm } from './AddFriendForm.tsx';

function App() {
  return (
    <>
      <h1>My simple Dexie app</h1>

      <h2>Add Friend</h2>
      <AddFriendForm defaultAge={21} />

      <h2>Friend List</h2>
      <FriendList minAge={18} maxAge={65} />
    </>
  )
}

export default App
