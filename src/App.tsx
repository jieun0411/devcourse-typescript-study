import styled from "@emotion/styled";
import TaskProvider from "./contexts/TaskProvider";
import NewTaskForm from './components/NewTaskForm';
import Header from './components/Header';
import TaskList from "./components/TaskList";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

const App = () => {
  return (
    <TaskProvider>
    <Container>
      <Header>Todo</Header>
      <NewTaskForm />
      <TaskList css={{ marginTop: 16 }} />
    </Container>
    </TaskProvider>
  );
}

export default App;
