import React from "react";
import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons"
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import "../../../fontello/css/fontello.css";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie"
        extraContent={<ExampleTasksButton />}
        body={<Form />} />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        extraContent={<Buttons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
