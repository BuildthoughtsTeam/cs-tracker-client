import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onButtonClick = (event) => {
    event.preventDefault()
    const user = {
      email,
      password,
    }

    console.log('User details:', user)

    // signin(user).then((data) => {
    //   if (data.error) {
    //     setError(data.error)
    //     console.log('Error state: ', error)
    //     toast.error(error)
    //   } else {
    //     toast.success('Welcome !')
    //     setEmail('')
    //     setPassword('')
    //     setError('')
    //   }
    // })
  }

  return (
    <div>
      <h2>Login Page</h2>
    </div>
  )
}

export default Login
