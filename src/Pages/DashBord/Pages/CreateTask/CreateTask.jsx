import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const CreateTask = () => {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data);

        const addTask = {
            taskTittle: data.taskTittle,
            description:data.description,
            deadlines:data.deadlines,
            taskpriority:data.taskpriority
        }
        const allTask = await axios.post('http://localhost:5000/api/v1/all-task',addTask)
        if(allTask.data.insertedId){
            reset()
            toast.success("Task Added Sucessfully")
        }
    }
    return (
        <div>
            <h2 className="text-4xl text-center mb-4">Add Your Task</h2>
            <div className="ml-8 mb-4 bg-red-400 border rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Task Tittle*</label>
                        <input
                            type="text"
                            placeholder="Task Tittle"
                            {...register('taskTittle', { required: true })}
                            required
                            className="input w-full"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Task Description</label>
                        <textarea {...register('description')} className="textarea w-full" placeholder="Description"></textarea>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Deadlines*</label>
                            <input
                                type="text"
                                placeholder="deadlines"
                                {...register('deadlines', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Task Priority*</label>
                            <input
                                type="text"
                                placeholder="task priority"
                                {...register('taskpriority', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <button className="btn mb-2">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;