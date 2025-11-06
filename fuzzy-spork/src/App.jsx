import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';
function App() {
  return (
    <div className='App'>
      <Greeting />

      <UserCard
        name='Egor Belov'
        role='Music Producer'
        avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1XjtImkMdmCjnllITaFCAF5EAEDS9Vuz0Q&s'
        isOnline={true}
      />
      <TaskList />
    </div>
  );
}
export default App;
