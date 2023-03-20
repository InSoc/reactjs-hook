import RadioChecked from './useState/TwoWayBinding/RadioChecked';
import CheckboxChecked from './useState/TwoWayBinding/CheckboxChecked';
import TodoList from './useState/TwoWayBinding/Todos/TodoList';

function App () {
  return (
    <div style={{padding: 50}}>
      <h1>Two way binding data</h1>
      <RadioChecked />
      <br />
      <CheckboxChecked />
      <br />
      <TodoList />
    </div>
    )
  }
  
  export default App;