import './App.css'
import AppContent from './AppContent';
import { RecordsProvider } from './context/RecordsContext';

const App: React.FC = () => {
  
  return (
    <RecordsProvider>
    <AppContent />
  </RecordsProvider>
  )
}

export default App;