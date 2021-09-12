import React from 'react';
import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <>
      <Task task={tasks[0]} />
      <Task task={tasks[1]} />
      <Task task={tasks[2]} />
      <Task task={tasks[3]} />
      <Task task={tasks[4]} />
      <Task task={tasks[5]} />
      <Task task={tasks[6]} />
      <Task task={tasks[7]} />
    </>
  );
};

export default Tasks;

      // {tasks.map((task) => {
      //   <Task key={task.id} task={task} />;
      // })}