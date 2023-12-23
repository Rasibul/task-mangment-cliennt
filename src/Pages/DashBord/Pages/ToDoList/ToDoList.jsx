
import { useLoaderData } from 'react-router-dom';
import { MdDeleteSweep } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';

const ToDoList = () => {
    const allTasks = useLoaderData()
    // console.log(allTasks)

    const handelDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios(`http://localhost:5000/api/v1/all-task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success',
                            );
                            // Optionally, you can update your local state or reload the data
                            // to reflect the changes after successful deletion.
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting task:', error);
                        // Handle errors, e.g., show an error message to the user.
                    });
            }
        });
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Todo</h1>
            {
                allTasks.map(task => {
                    const { _id, description, taskTittle, taskpriority, deadlines } = task
                    return (
                        <div key={_id} className='bg-orange-200 p-2 rounded-lg flex justify-between items-center text-center my-2'>
                            <h3 className="font-semibold">{taskTittle}</h3> <p>{task.description}</p>{" "}
                            <p>{description}</p>
                            <p>{deadlines}</p>
                            <p>{taskpriority}</p>
                            <button >
                                <MdDeleteSweep onClick={() => handelDelete(_id)} className="text-xl text-black-500" />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;