import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, CheckButton, DeleteButton, Content, StyledLink } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone, selectTasksByQuery
} from "../../tasksSlice";
import { useLocation } from "react-router-dom";

const TasksList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <CheckButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            <i className={task.done ? "icon-ok" : ""}></i>
          </CheckButton>
          <Content taskDone={task.done}><StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink></Content>
          <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
            <i className="icon-trash-empty"></i>
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
