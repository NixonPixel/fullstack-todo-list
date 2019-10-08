import React, {useState} from 'react'
import { Paper, TextareaAutosize, Typography, TextField, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import withHoc from './CreateTodoHoc'

const CreateTodo = ({ classes, createTodo, errorMessage, isCreated}) => {
    const [text, setText] = useState('')
    const [userName, setUserName] = useState('')
    const [todoName, setTodoName] = useState('')

    const onChange = ({target}) => {
        if(target.name === 'text'){
            setText(target.value)
        }
        if(target.name === 'userName'){
            setUserName(target.value)
        }
        if(target.name === 'todoName') {
            setTodoName(target.value)
        }
    }

    return (
        <React.Fragment>
            <Link style={{color: 'inherit', fontSize: '1.35rem', textAlign: 'center', display: 'block', marginBottom: '20px'}} to="/">Вернуться к списку</Link>
            <Paper className={classes.container}>
                {errorMessage && <p style={{color: 'tomato'}}>{errorMessage}</p>}
                {isCreated && <p>Задача создана!</p>}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Typography style={{ marginBottom: '20px' }} variant="h6">
                        Текст задачи:
                    </Typography>
                    <TextareaAutosize value={text} name="text"
                        onChange={onChange} className={classes.textArea} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        id="userName"
                        name="userName"
                        label="Имя пользователя"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        value={userName}
                        onChange={onChange}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        id="todoName"
                        name="todoName"
                        label="Название задачи"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        value={todoName}
                        onChange={onChange}
                    />
                </div>
                <Button disabled={text.length < 1 || userName.length < 1 || todoName.length < 1} onClick={() => createTodo(userName, text, todoName)} style={{marginTop: '10px'}} variant="outlined">Создать</Button>
            </Paper>
        </React.Fragment>
    )
}

export default withHoc(CreateTodo)