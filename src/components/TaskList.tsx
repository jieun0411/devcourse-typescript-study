import styled from "@emotion/styled"
import { useSelector } from "react-redux";
import Task from "./Task";
import { RootState } from "../redux";

const TaskList = () => {
    const tasks = useSelector((store: RootState) => store.tasks)

    return (
        <UnorderedList>
            {tasks.map(item => (
                <Task key={item.id}
                    id={item.id}
                    content={item.content}
                    complete={item.complete}
                />
            ))}
        </UnorderedList>
    )
}

export default TaskList;

const UnorderedList = styled.ul`
    width: 400px;
    margin: 0;
    padding: 0;

    & > li {
        &:not(:first-of-type) {
            margin-top: 8px;
        }
    }
`