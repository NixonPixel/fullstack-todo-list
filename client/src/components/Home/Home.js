import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import withHoc from './HomeHoc'
import TodoList from '../TodoList'

const Home = ({ classes, history }) => {
    const goToTheAddTodoPage = () => {
        history.push('/add-todo')
    }
    return (<Paper className={classes.container}>
        <Button onClick={goToTheAddTodoPage} variant="contained" className={classes.addTodoBtn} color="secondary">Добавить задание</Button>
        <Typography style={{ textAlign: 'center' , marginBottom: '30px'}} variant="h2">Список дел</Typography>
        <TodoList />
    </Paper>)
}


export default withHoc(Home)