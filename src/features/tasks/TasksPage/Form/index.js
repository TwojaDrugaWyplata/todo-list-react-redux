import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FormContainer, Button} from './styled'
import { addTask } from '../../tasksSlice'
import { nanoid } from '@reduxjs/toolkit'
import FormInput from "../../Input"
const Form = () => {
  const [taskContent, setNewTask] = useState('')
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const onFormSubmit = event => {
    event.preventDefault()
    inputRef.current.focus()
    if (taskContent.trim() === '') {
      return
    }

    dispatch(
      addTask({
        content: taskContent.trim(),
        done: false,
        id: nanoid()
      })
    )
    setNewTask('')
  }

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={taskContent}
        onChange={({ target }) => setNewTask(target.value)}
        type='text'
        placeholder='Co jest do zrobienia?'
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  )
}
export default Form
