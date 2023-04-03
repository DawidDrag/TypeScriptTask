import React from 'react';
import Form from './components/Form';
import ListOfColors from './components/ListOfColors';

import './css/main.scss'


function App() {

React.useEffect(() => {
    localStorage.setItem('Colors', JSON.stringify(appState.colors))
  })


const colorsFromLocalStorage = JSON.parse(localStorage.getItem('Colors') as any)

const dataApp = {
    colors: colorsFromLocalStorage === null ? [] : colorsFromLocalStorage,
    color: ''
  }

const [appState, setAppState] = React.useState<{colors: string[], color: string}>(dataApp)



const SendColorToState = (e: React.FormEvent<HTMLFormElement>) => {

e.preventDefault()

let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

 const Send = () => {
  setAppState(prev => {
    return {
      colors: [...prev.colors, appState.color],
      color: ''
    }})
    
 }
 
regex.test(appState.color) === true ? Send() : alert('Wrong color. Please change color on HEX type.')
}

const OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  setAppState({
    colors: appState.colors,
    color: e.target.value
  })
 
}

const ClearLocalStorage = (e: React.MouseEvent<HTMLButtonElement>) => {
  localStorage.removeItem('Colors')
  setAppState({
    colors: [],
    color: appState.color
  })

}

  return (
    <div className="App">
      <h1>ADD HEX TYPE COLOR</h1>
      <Form inputTextValue={appState.color} onChange={OnChangeInput} onClick={ClearLocalStorage} onSubmit={SendColorToState}/>
      <ListOfColors arrayOfColors={appState.colors} title='List of colors:'/>
    </div>
  );
}

export default App;
