import React from  'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = props => {
    return(
        <ListContainer>
            <h1>TODO LIST</h1>
            {props.todos.map(todo => <Todo todo = {todo}/>)}
        </ListContainer>
        
    )
}

const ListContainer = styled.ul `
    width:200px;
    margin:auto;
`

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps)(TodoList)