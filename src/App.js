import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'CPSC Exam',
        day: 'Feb 12th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Groceries',
        day: 'Feb 14th at 1:30pm',
        reminder: false,
    },
  ])


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />

      
    </div>
  )
}

export default App;
