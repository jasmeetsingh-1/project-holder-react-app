import NewTask from "./NewTask";

function TaskSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 mb-4">
        This project doesnt have nay tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}

export default TaskSection;
