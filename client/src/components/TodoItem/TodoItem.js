import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import withStyles from './TodoItemHoc'
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = ({ text, userName, createdAt, classes, id, setDoneTodo, accessDenied, changeTodoText, changeTodo }) => {
    const [isChecked, setChecked] = React.useState(false)
    const onChecked = () => {
        setChecked(!isChecked)
        setTimeout(() => setDoneTodo(id), 500)
    }
    const [todoText, setTodoText] = useState(text)
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                {!accessDenied && <Checkbox onClick={onChecked} checked={isChecked} />}
                <Typography variant="h6">Имя пользователя: {userName}</Typography>
                <Typography style={{ marginLeft: '12px' }}>Созданна: {createdAt}</Typography>
            </div>
            <div className={classes.body}>
                
                {accessDenied 
                ? <Typography style={{wordBreak: 'break-word'}}>Задча: {todoText}</Typography> 
                : <React.Fragment>
                    <textarea className={classes.textarea} onChange={(e) => setTodoText(e.target.value)} type={text} value={todoText} />
                    <Button disabled={text === todoText} onClick={() => changeTodo(id, todoText)}>Изменить</Button>
                    </React.Fragment>}
            </div>
        </div>
    )
}

export default withStyles(TodoItem)