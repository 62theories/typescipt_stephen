import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
    todos: Todo[],
    fetchTodos: Function,
    deleteTodo: typeof deleteTodo,
}

interface AppState {
    fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos()
        this.setState({
            fetching: true
        })
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>{todo.title}</div>
        })
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id)
    }
    
    render() {
        if(this.state.fetching) {
            return <div>loading</div>
        }
        return <div>
            <button onClick={this.onButtonClick}>
                Fetch
            </button>
            {this.renderList( )}
        </div>
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return {
        todos: state.todos
    }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)