import React from 'react';
import CodeEditor from './CodeEditor';
import './App.css';

const initialCode = `function greeting(name) {
  console.log(\`Hello, \${name}!\`);
}

greeting('World');`;

const App = () => {
  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <CodeEditor initialCode={initialCode} />
    </div>
  );
};

export default App;