import { useState } from 'react'
import { Child1, Child2 } from './Child'

export const Parent = () => {
    const [input, setInput] = useState("");
    return (
    <>
        <Child1 input = {input} setInput = {setInput} />
        <Child2 input = {input} setInput = {setInput}  />

        <p>Child Component 1: {input}</p>
        <p>Child Component 2: {input}</p>

        <p>Both Child Component gets the same state, i.e., shared state. So same values are shown.</p>
    </>
  )
}
