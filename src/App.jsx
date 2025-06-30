import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'

function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    let randomNums = []

    for (let i = 0; i < 10; i++) {
      randomNums.push(Math.ceil(Math.random() * 6))
    }

    return randomNums
  }

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const eachDie = dice.map((val) => <Die value={val} />)

  return (
    <>
      <main>
        <div className="dice-container">
          {eachDie}
        </div>

        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
