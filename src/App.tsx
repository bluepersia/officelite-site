import './App.css';
import Select from './components/Select/Select';
import Option from './components/Select/Option';

function App() {
  return (
    <>
      <Select placeholder='Options' options={['Basic', 'Pro', 'Ultimate']}>
        <Option>
          Basic Pack <span>Free</span>
        </Option>
        <Option>
          Pro Pack <span>$9.99</span>
        </Option>
        <Option>
          Ultimate Pack <span>$19.99</span>
        </Option>
      </Select>
    </>
  );
}

export default App;
