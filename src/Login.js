import React, { useState } from 'react'
import { Box, TextInput, Button, Spacer } from '@telus-uds/ds-allium'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;

    // const [validationUser, feedbackUser] = React.useMemo(() => {
    //     if (username && username.length > 6) {
    //         return ['error', 'The value must be shorter than 6 characters']
    //     } else if (username && username.length > 0) {
    //         return ['success', 'Yay! The value has less than 6 characters']
    //     }
    //     return [
    //         undefined,
    //     ]
    // }, [username])

    // const [validationPass, feedbackPass] = React.useMemo(() => {
    //     if (password && !password.match(regularExpression)) {
    //         return ['error', 'Password should be greater than 6 digit']
    //     } else if (password && password.length > 0) {
    //         return ['success']
    //     }
    //     return [
    //         undefined,
    //     ]
    // })

    const handleSubmit = () => {
        if (!username && !password) {
            console.log("fill the details first")
            setUserErr(true)
            setPassErr(true)
        }
        
        else if (username.length > 6 ) {
            setUserErr(true)
        }
        else if (!password.match(regularExpression)) {
            setPassErr(true)
        }
        else if (username.length > 0 && password.match(regularExpression))
        {console.log("successful")
          
            navigate('dashboard', { state: { username } })
        }
    }

    return (
        <Box space={9}>

            <h1>Login to My Universe</h1>
            <TextInput
                accessibilityLabel="Text input field"
                label="Username :"
                name='username'
                value={username}
                // validation={validationUser}
                // feedback={feedbackUser}
                onChange={setUsername}
            />

            {userErr && <p style={{ color: "red", fontSize: 13 }}>Your username is invalid !</p>}


            <Spacer space={2} />


            <TextInput
                label="Password :"
                name='password'
                value={password}
                // validation={validationPass}
                // feedback={feedbackPass}
                onChange={setPassword}
                tokens={{
                    paddingRight: '100px',
                }}
            />

            {passErr && <p style={{ color: "red", fontSize: 13 }}>Your password is invalid !</p>}

            <Spacer space={3} />
            <Button onClick={handleSubmit} variant={{ priority: 'high' }}
                tokens={{
                    borderRadius: 4,
                    backgroundColor: '#4b286d',
                    paddingTop: '10px'

                }}
            >Log in</Button>
        </Box>
    )
}

export default Login