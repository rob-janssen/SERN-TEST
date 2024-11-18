import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";
import Card from "../components/Card";
import EditCardModal from "../components/EditCardModal";
import { useState } from "react";

const tasksQuery = {
  queryKey: ["tasks"],
  queryFn: async () => {
    const { data } = await customFetch("tasks");
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(tasksQuery);
  } catch (error) {
    console.log(error);
  }
};

const AllTasks = () => {
  const { data: tasks, isLoading, isError, error } = useQuery(tasksQuery);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    console.log(`Edit task with id: ${task.task_id}`);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
        All tasks ({tasks.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <Card
            key={task.task_id}
            task={task}
            onEdit={() => handleEdit(task)}
          />
        ))}
      </div>
      {isModalOpen && (
        <EditCardModal
          isOpen={isModalOpen}
          task={selectedTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default AllTasks;
