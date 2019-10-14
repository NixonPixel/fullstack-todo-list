import React, { Component } from 'react'
import withHoc from './TodoListHoc'
import TodoItem from '../TodoItem'
import { Typography, MobileStepper, IconButton, Radio } from '@material-ui/core'
import { KeyboardArrowRight, KeyboardArrowLeft, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

class TodoList extends Component {

    state = {
        sortField: 'userName',
        sortDirection: '-1',
        sortedTodoList: [],
        activeStep: 0,
        maxSteps: 0,
        todoList: []
    }

    componentDidMount() {
        this.props.getAllTodo(this.state.activeStep + 1, this.state.sortField, this.state.sortDirection)
        this.setState({ maxSteps: Math.ceil(this.props.todoCount / 3) })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.todoCount !== this.props.todoCount) {
            this.setState({ maxSteps: Math.ceil(this.props.todoCount / 3) })
        }
        if (prevState.activeStep !== this.state.activeStep) {
            const activeStep = this.state.activeStep + 1
            this.props.getAllTodo(activeStep, this.state.sortField, this.state.sortDirection)
        }
        if (prevProps.todoList !== this.props.todoList) {
            this.setState({ todoList: this.props.todoList })
        }
        if (prevState.sortField !== this.state.sortField) {
            this.props.getAllTodo(this.state.activeStep + 1, this.state.sortField, this.state.sortDirection)
        }
        if (prevState.sortDirection !== this.state.sortDirection) {
            this.props.getAllTodo(this.state.activeStep + 1, this.state.sortField, this.state.sortDirection)
        }
    }

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 })
    }

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    }

    changeTodo = (id, text) => {
        const newTodoList = [...this.state.todoList]
        newTodoList.map(item => {
            if (item._id === id) {
                item.text = text
            }
            return item
        })
        this.props.changeTodoText(newTodoList, id, text)
    }

    handleChangeRadio = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { todoList = [], classes, errorMessage, isLoading } = this.props
        const { activeStep, maxSteps, sortField, sortDirection } = this.state

        return (
            <React.Fragment>
                <div className={classes.sortContainer}>
                    <Typography variant="body1">Сортировать по:</Typography>
                    <div className={classes.sortItem} style={{ marginLeft: '26px' }} >
                        <Typography >имени пользователя</Typography>
                        <Radio
                            checked={sortField === 'userName'}
                            onChange={this.handleChangeRadio}
                            value="userName"
                            name="sortField" />
                    </div>
                    <div className={classes.sortItem} style={{ marginLeft: '26px' }} >
                        <Typography variant="body2">по названию задачи</Typography>
                        <Radio
                            checked={sortField === 'todoName'}
                            onChange={this.handleChangeRadio}
                            value="todoName"
                            name="sortField" />
                    </div>
                    <div className={classes.sortItem} style={{ marginLeft: '26px' }} >
                        <Typography variant="body2">дате создания</Typography>
                        <Radio
                            checked={sortField === 'createdAt'}
                            onChange={this.handleChangeRadio}
                            value="createdAt"
                            name="sortField" />
                    </div>

                </div>
                <div className={classes.sortContainer}>
                    <div className={classes.sortItem}>
                        <Typography style={{ marginRight: '26px' }}  variant="body2">направление сортировки</Typography>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <KeyboardArrowUp />
                            <Radio
                                checked={sortDirection === '1'}
                                onChange={this.handleChangeRadio}
                                value="1"
                                name="sortDirection" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <KeyboardArrowDown />
                            <Radio
                                checked={sortDirection === '-1'}
                                onChange={this.handleChangeRadio}
                                value="-1"
                                name="sortDirection" />
                        </div>
                    </div>
                </div>
                {errorMessage && <p>{errorMessage}</p>}
                {isLoading && <p>Загрузка...</p>}
                <div className={classes.container}>
                    {this.state.todoList.map((todo) => {
                        return <TodoItem todoName={todo.todoName} changeTodo={this.changeTodo} id={todo._id} createdAt={todo.createdAt} userName={todo.userName} text={todo.text} key={todo._id} />
                    })} 
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