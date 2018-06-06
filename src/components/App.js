import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import styles from './app.less'
import {Button} from 'antd'
import * as actions from '../actions/counter'

// const mapStateToProps = (state, ownProps) => {     return state.count } const
// mapDispatchToProps = (dispatch, ownProps) => ({     actions:
// bindActionCreators({         ...actions     }, dispatch) })

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    linkToA: () => dispatch(push('/a')),
    linkToB: () => dispatch(push('/b')),
    linkToC: () => dispatch(push('/c'))
})

const A = props => {
    return (
        <div
            style={{
            height: 300,
            width: 400,
            background: 'yellow',
            position: 'absolute',
            top: 0,
            left: 0
        }}></div>
    )
}

const B = props => {
    return (
        <div
            style={{
            height: 300,
            width: 400,
            background: 'red',
            position: 'absolute',
            top: 0,
            left: 0
        }}></div>
    )
}

const C = props => {
    return (
        <div
            style={{
            height: 300,
            width: 400,
            background: 'green',
            position: 'absolute',
            top: 0,
            left: 0
        }}></div>
    )
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

    state = {
        type: false
    }

    click = () => {
        //window.location.search = '?name=tom'
        const {pathname} = this.props.router.location
        this
            .props
            .history
            .push(pathname + '?name=tom')
    }

    componentDidMount() {
        console.log(666);
    }

    render() {

        const {pathname} = this.props.router.location

        return (
            <div>
                <div className={styles.container}>
                    <TransitionGroup>
                        <CSSTransition
                            key={pathname}
                            timeout={500}
                            classNames={this.state.type
                            ? 'slide'
                            : 'fade'}
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <Switch location={this.props.router.location}>
                                <Route exact path="/" component={A}/>
                                <Route exact path="/a" component={A}/>
                                <Route exact path="/b" component={B}/>
                                <Route exact path="/c" component={C}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <Button onClick={() => this.props.linkToA()}>AA</Button>
                <Button onClick={() => this.props.linkToB()}>B</Button>
                <Button onClick={() => this.props.linkToC()}>C</Button>
                <br/>
                <Button
                    onClick={() => this.setState({
                    type: !this.state.type
                })}>{this.state.type
                        ? '渐变'
                        : '滑动'}</Button>
            </div>
        )
    }
}

export default App