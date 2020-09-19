import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonsContainer } from "../styled";
import { fetchExampleTasks, selectExampleTasksLoading } from "./../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectExampleTasksLoading);

    return (<>
        <ButtonsContainer>
            <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
        </ButtonsContainer>
            </>
    );
};
export default ExampleTasksButton;