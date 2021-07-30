import React from 'react'
// import ReactDom from 'react-dom'

// 1
// interface AppProps {
//     color?: string
// }

// class App extends React.Component<AppProps> {
//     state = { counter: 0 }

//     plus = (): void => {
//         this.setState({counter: this.state.counter + 1})
//     }

//     minus = (): void => {
//         this.setState({counter: this.state.counter - 1})
//     }

//     render() {
//         return <div>
//             <div onClick={this.plus}>+</div>{this.state.counter}<div onClick={this.minus}>-</div>
//             {this.props.color}
//             </div>
//     }
// }


// 2
// interface AppProps {
//     color?: string
// }
// interface AppState {
//     counter: number
// }

// class App extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props)
//         this.state = {counter:0}
//     }

//     plus = (): void => {
//         this.setState({counter: this.state.counter + 1})
//     }

//     minus = (): void => {
//         this.setState({counter: this.state.counter - 1})
//     }

//     render() {
//         return <div>
//             <div onClick={this.plus}>+</div>{this.state.counter}<div onClick={this.minus}>-</div>
//             {this.props.color}
//             </div>
//     }
// }

// 3
// interface AppProps {
//     color?: string
// }

// const App = (props: AppProps): JSX.Element => {
//     return <div>{props.color}</div>
// }
