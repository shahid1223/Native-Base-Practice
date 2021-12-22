
import Todo from './Component/Todo';
import ContextState from './Context/contextState';

function App() {

  return (
    <ContextState>
      <Todo/>
    </ContextState>
  );
}

export default App;
