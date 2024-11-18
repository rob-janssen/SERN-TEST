const Card = ({ onEdit, task }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-200 text-red-700";
      case "medium":
        return "bg-yellow-200 text-yellow-700";
      default:
        return "bg-green-200 text-green-700";
    }
  };

  const formatDate = (date) => new Date(date).toLocaleString();

  return (
    <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-gray-800">
          {task.title}
        </div>
        <p className="text-gray-600 text-base truncate">{task.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div>
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${getPriorityClass(
              task.priority
            )}`}
          >
            {task.priority}
          </span>
          <span className="text-gray-500 text-sm ml-2">
            Deadline: {task.deadline}
          </span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
          onClick={() => onEdit(task.id)}
        >
          Edit
        </button>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-500 text-sm">
          Assigned to: {task.assigned_to}
        </span>
        <span className="text-gray-500 text-sm">
          Updated at: {formatDate(task.updated_at)}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
            task.is_completed
              ? "bg-green-200 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {task.is_completed ? "Completed" : "Not Completed"}
        </span>
      </div>
    </div>
  );
};

export default Card;
