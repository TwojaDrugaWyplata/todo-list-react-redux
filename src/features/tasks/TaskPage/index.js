import React from "react";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import "../../../fontello/css/fontello.css";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
    const { id }  = useParams();
  const task = useSelector((state) => getTaskById(state, id));
    return (
    <Container>
      <h1>Szczegóły zadania</h1>
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😐"}
        body={
            <>
                
            <strong>Ukończono:</strong>
            {task ? task.done ? "Tak" : "Nie" : "Brak"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
