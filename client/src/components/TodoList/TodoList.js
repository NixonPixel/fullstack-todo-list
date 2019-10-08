import React, { Component } from 'react'
import withHoc from './TodoListHoc'
import TodoItem from '../TodoItem'
import {Typography, MobileStepper, IconButton, Radio} from '@material-ui/core'
import {KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons'

class TodoList extends Component {

    state = {
        sortField: 'userName',
        sortedTodoList: [],
        activeStep: 0,
        maxSteps: 0,
        todoList: []
    }

    componentDidMount() {
        this.props.getAllTodo(this.state.activeStep + 1, this.state.sortField)
        this.setState({maxSteps: Math.ceil(this.props.todoCount / 3)})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.todoCount !== this.props.todoCount) {
            this.setState({maxSteps: Math.ceil(this.props.todoCount /3)})
        }
        if(prevState.activeStep !== this.state.activeStep){
            const activeStep = this.state.activeStep + 1
            this.props.getAllTodo(activeStep, this.state.sortField)
        }
        if(prevProps.todoList !== this.props.todoList) {
            this.setState({todoList: this.props.todoList})
        }
        if(prevState.sortField !== this.state.sortField) {
            this.props.getAllTodo(this.state.activeStep + 1, this.state.sortField)
        } 
    }

    handleNext = () => {
        this.setState({activeStep: this.state.activeStep + 1})
    }

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1})
    }

    changeTodo = (id, text) => {
        const newTodoList = [...this.state.todoList]
        newTodoList.map(item => {
            if(item._id === id) {
                item.text = text
            }
            return item
        })
        this.props.changeTodoText(newTodoList, id, text)
    }

    handleChangeRadio = (e) => {
        this.setState({sortField: e.target.value})
    }

    render() {
        const { todoList = [], classes, errorMessage, isLoading } = this.props
        const {activeStep, maxSteps, sortField} = this.state
        
        return (
            <React.Fragment>
                <div className={classes.sortContainer}>
                    <Typography variant="h6">Сортировать по:</Typography>
                    <div style={{ marginLeft: '26px' }} className={classes.sortContainer}>
                        <Typography >имени пользователя</Typography>
                        <Radio 
                            checked={sortField === 'userName'}
                            onChange={this.handleChangeRadio}
                            value="userName"
                            name="radio-button"/>
                    </div>
                    <div style={{ marginLeft: '26px' }} className={classes.sortContainer}>
                        <Typography>количетству символов</Typography>
                        <Radio 
                            checked={sortField === 'text'}
                            onChange={this.handleChangeRadio}
                            value="text"
                            name="radio-button"/>
                    </div>
                    <div style={{ marginLeft: '26px' }} className={classes.sortContainer}>
                        <Typography>дате создания</Typography>
                        <Radio 
                            checked={sortField === 'createdAt'}
                            onChange={this.handleChangeRadio}
                            value="createdAt"
                            name="radio-button"/>
                    </div>

                </div>
                {errorMessage && <p>{errorMessage}</p>}
                {isLoading && <p>Загрузка...</p>}
                <div className={classes.container}>
                    {!isLoading || !todoList.legth < 0 ? this.state.todoList.map((todo) => {
                        return <TodoItem changeTodo={this.changeTodo} id={todo._id} createdAt={todo.createdAt} userName={todo.userName} text={todo.text} key={todo._id} />
                    }) : <Typography>Заданий пока нет</Typography> }
                </div>
                {todoList && maxSteps > 1 ? <MobileStepper
                    style={{ maxWidth: '450px', margin: '0 auto' }}
                    activeStep={activeStep}
                    position="static"
                    steps={maxSteps}
                    nextButton={<IconButton onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>Вперёд<KeyboardArrowRight /></IconButton>}
                    backButton={<IconButton onClick={this.handleBack} disabled={activeStep === 0}><KeyboardArrowLeft />Назад</IconButton>}
                /> : ''}
            </React.Fragment>
        )
    }
}

export default withHoc(TodoList)