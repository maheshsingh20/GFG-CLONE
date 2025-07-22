import React, { useState } from 'react';
import { Play, Save, Download, Settings, Terminal, Code, FileText, Folder, Plus, RotateCcw } from 'lucide-react';

const IDE: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(`# Welcome to GeeksforGeeks Online IDE
# Write your Python code here

def hello_world():
    print("Hello, World!")
    print("Welcome to GeeksforGeeks IDE!")

# Call the function
hello_world()

# Try solving a simple problem:
# Write a function to find the factorial of a number
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Test the factorial function
number = 5
result = factorial(number)
print(f"Factorial of {number} is: {result}")
`);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('main.py');

  const languages = [
    { id: 'python', name: 'Python', version: '3.9' },
    { id: 'java', name: 'Java', version: '11' },
    { id: 'cpp', name: 'C++', version: '17' },
    { id: 'javascript', name: 'JavaScript', version: 'ES6' },
    { id: 'c', name: 'C', version: 'GCC 9' },
    { id: 'csharp', name: 'C#', version: '.NET 5' },
    { id: 'go', name: 'Go', version: '1.17' },
    { id: 'rust', name: 'Rust', version: '1.56' }
  ];

  const codeTemplates: { [key: string]: string } = {
    python: `# Python Template
def main():
    print("Hello, Python!")

if __name__ == "__main__":
    main()`,
    java: `// Java Template
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
    cpp: `// C++ Template
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
    javascript: `// JavaScript Template
function main() {
    console.log("Hello, JavaScript!");
}

main();`,
    c: `// C Template
#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    return 0;
}`,
    csharp: `// C# Template
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`,
    go: `// Go Template
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
    rust: `// Rust Template
fn main() {
    println!("Hello, Rust!");
}`
  };

  const tabs = [
    { id: 'main.py', name: 'main.py', type: 'file' },
    { id: 'utils.py', name: 'utils.py', type: 'file' },
    { id: 'README.md', name: 'README.md', type: 'file' }
  ];

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');
    
    // Simulate code execution
    setTimeout(() => {
      const sampleOutput = `Hello, World!
Welcome to GeeksforGeeks IDE!
Factorial of 5 is: 120

Execution completed successfully!
Time: 0.234s
Memory: 2.1 MB`;
      
      setOutput(sampleOutput);
      setIsRunning(false);
    }, 2000);
  };

  const saveCode = () => {
    // Simulate saving
    setOutput(prev => prev + '\nCode saved successfully!');
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code.${selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'python' ? 'py' : 'txt'}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const changeLanguage = (langId: string) => {
    setSelectedLanguage(langId);
    setCode(codeTemplates[langId] || '');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Terminal className="text-green-400" size={24} />
              <h1 className="text-xl font-bold">GeeksforGeeks IDE</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <select
                value={selectedLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name} ({lang.version})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={saveCode}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Save size={16} />
              <span className="hidden sm:inline">Save</span>
            </button>
            
            <button
              onClick={downloadCode}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </button>
            
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-semibold transition-colors ${
                isRunning
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isRunning ? (
                <RotateCcw size={16} className="animate-spin" />
              ) : (
                <Play size={16} />
              )}
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>

            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Language Selector */}
        <div className="md:hidden mt-4">
          <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name} ({lang.version})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* File Explorer */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 hidden lg:block">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2 mb-4">
              <Folder className="text-blue-400" size={20} />
              <span className="font-semibold">Project Files</span>
            </div>
            <button className="w-full flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
              <Plus size={16} />
              <span>New File</span>
            </button>
          </div>
          
          <div className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.name.endsWith('.py') ? (
                    <Code size={16} className="text-green-400" />
                  ) : (
                    <FileText size={16} className="text-gray-400" />
                  )}
                  <span className="text-sm">{tab.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col">
            {/* Tab Bar */}
            <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center space-x-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-t-lg text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-900 text-white border-t-2 border-green-500'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {tab.name.endsWith('.py') ? (
                    <Code size={14} />
                  ) : (
                    <FileText size={14} />
                  )}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Editor */}
            <div className="flex-1 p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-gray-900 text-gray-100 font-mono text-sm resize-none border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Write your code here..."
                spellCheck={false}
                style={{
                  tabSize: 4,
                  fontFamily: 'Consolas, "Courier New", monospace',
                  lineHeight: 1.5
                }}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="lg:w-1/3 bg-gray-800 border-l border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold flex items-center space-x-2">
                <Terminal className="text-green-400" size={18} />
                <span>Output</span>
              </h3>
            </div>
            
            <div className="flex-1 p-4">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                {output || 'Click "Run" to execute your code...'}
              </pre>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-xs text-gray-500 mb-3">Quick Actions:</div>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded transition-colors">
                  Clear Output
                </button>
                <button className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded transition-colors">
                  Share Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 text-xs text-gray-400 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>Language: {languages.find(l => l.id === selectedLanguage)?.name}</span>
          <span>Lines: {code.split('\n').length}</span>
          <span>Characters: {code.length}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IDE;