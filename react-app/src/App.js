import logo from './logo.svg';
import './App.css';
import DisplayComponents from './components/DisplayComponents';

function App() {
  const data = [{
    "person": {
      "name": "John Doe",
      "age": 30,
      "gender": "male",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
      },
      "contacts": [
        {
          "type": "email",
          "value": "john.doe@example.com"
        },
        {
          "type": "phone",
          "value": "+1 (555) 123-4567"
        }
      ],
      "isStudent": false,
      "grades": null
    }
  }]
    
  return (
    <div className="App">
    <h1>My React App</h1>
    <DisplayComponents neww={data}/>
    </div>
  );
}

export default App;
