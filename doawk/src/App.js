import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';



function App() {
  return (
    <div className="App">
      <Header />
      < NotesListPage />
      <NotePage />
    </div>
  );
}

export default App;
