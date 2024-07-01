import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Highlight theme={themes.vsLight} code={code} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              margin: 0,
              padding: '10px',
              overflow: 'auto',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 'monospace',
              position: 'relative',
              pointerEvents: 'none',
              minHeight: '200px',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        value={code}
        onChange={handleChange}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          margin: 0,
          border: 'none',
          padding: '10px',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '20px',
          background: 'rgba(255, 220, 200, 0.2)',
          color: 'transparent',
          caretColor: 'black',
          resize: 'none',
          outline: 'none',
          overflow: 'auto',
        }}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;