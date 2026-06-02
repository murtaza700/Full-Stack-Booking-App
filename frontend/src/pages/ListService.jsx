import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import { useForm, Controller } from 'react-hook-form';

function ListService() {

    const API = import.meta.env.VITE_API_URL;

    const [allCat, setAllCat] = useState([]);

    const getCat = async () => {
        try {
            const res = await axios.get(
                `${API}/api/categories`,
                { withCredentials: true }
            );
            setAllCat(res.data.categories);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getCat();
    }, []);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('price', data.price);
            formData.append('category', data.category);
            formData.append('rating', data.rating);
            formData.append('image', data.image[0]);

            const res = await axios.post(
                `${API}/api/services`,
                formData,
                { withCredentials: true }
            );

            console.log(res.data);

            alert('Service Added Successfully');

            reset();

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };
    console.log(allCat);
    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className='py-10 md:py-[3%] px-[4%]'
        >

            <h1 className='text-4xl font-bold text-center text-Text-Primary'>
                List Your Service
            </h1>


            <div className='flex items-start flex-col w-full gap-1 my-2'>

                <label
                    htmlFor="title"
                    className='text-3xl font-medium'
                >
                    Title
                </label>

                <input
                    className="w-full placeholder:text-slate-400 text-Text-Primary text-sm border-2 border-black/20 rounded-md px-3 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-Primary hover:border-slate-300"
                    type="text"
                    id='title'
                    placeholder='Enter Title...'
                    {...register('title', {
                        required: 'Title is required'
                    })}
                />

                {errors.title && (
                    <p className='text-red-500 text-sm'>
                        {errors.title.message}
                    </p>
                )}

            </div>


            <div className='flex items-start flex-col w-full gap-1 my-2'>

                <label
                    htmlFor="description"
                    className='text-3xl font-medium'
                >
                    Description
                </label>

                <Controller
                    name="description"
                    control={control}
                    rules={{
                        required: 'Description is required'
                    }}
                    render={({ field }) => (
                        <ReactQuill
                            id='description'
                            className='w-full'
                            theme="snow"
                            value={field.value || ''}
                            onChange={field.onChange}
                        />
                    )}
                />

                {errors.description && (
                    <p className='text-red-500 text-sm'>
                        {errors.description.message}
                    </p>
                )}

            </div>


            <div className='flex items-start flex-col w-full gap-1 my-2'>

                <label htmlFor="cover">
                    Cover Image
                </label>

                <input
                    type="file"
                    id='cover'
                    accept='image/*'
                    {...register('image', {
                        required: 'Image is required'
                    })}
                />

                {errors.image && (
                    <p className='text-red-500 text-sm'>
                        {errors.image.message}
                    </p>
                )}

            </div>

            <div className='flex items-start justify-center gap-5 flex-col md:flex-row'>



                <div className='flex items-start flex-col w-full gap-1 my-2'>

                    <label
                        htmlFor="Price"
                        className='text-3xl font-medium'
                    >
                        Price
                    </label>

                    <input
                        className="w-full placeholder:text-slate-400 text-Text-Primary text-sm border-2 border-black/20 rounded-md px-3 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-Primary hover:border-slate-300"
                        type="number"
                        id='Price'
                        placeholder='Enter Price...'
                        {...register('price', {
                            required: 'Price is required'
                        })}
                    />

                    {errors.price && (
                        <p className='text-red-500 text-sm'>
                            {errors.price.message}
                        </p>
                    )}

                </div>


                <div className='flex items-start flex-col w-full gap-1 my-2'>

                    <label
                        htmlFor="Category"
                        className='text-3xl font-medium'
                    >
                        Category
                    </label>

                    <select
                        id="Category"
                        className="w-full placeholder:text-slate-400 text-Text-Primary text-sm border-2 border-black/20 rounded-md px-3 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-Primary hover:border-slate-300"
                        {...register('category', {
                            required: 'Category is required'
                        })}
                    >

                        <option value="">
                            Select Category
                        </option>

                        {allCat.map((c) => (
                            <option
                                value={c._id}
                                key={c._id}
                            >
                                {c.name}
                            </option>
                        ))}

                    </select>

                    {errors.category && (
                        <p className='text-red-500 text-sm'>
                            {errors.category.message}
                        </p>
                    )}

                </div>


                <div className='flex items-start flex-col w-full gap-1 my-2'>

                    <label
                        htmlFor="Rating"
                        className='text-3xl font-medium'
                    >
                        Rating
                    </label>

                    <input
                        className="w-full placeholder:text-slate-400 text-Text-Primary text-sm border-2 border-black/20 rounded-md px-3 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-Primary hover:border-slate-300"
                        type="number"
                        step="0.1"
                        id='Rating'
                        placeholder='Enter Rating...'
                        {...register('rating', {
                            required: 'Rating is required',
                            min: {
                                value: 1,
                                message: 'Minimum rating is 1'
                            },
                            max: {
                                value: 5,
                                message: 'Maximum rating is 5'
                            }
                        })}
                    />

                    {errors.rating && (
                        <p className='text-red-500 text-sm'>
                            {errors.rating.message}
                        </p>
                    )}

                </div>

            </div>

            <button
                type='submit'
                disabled={loading}
                className='bg-Primary hover:bg-Primary-Hover transition-all duration-300 text-white px-6 py-3 rounded-md mt-5'
            >
                {loading ? 'Loading...' : 'Add Service'}
            </button>

        </form>
    );
}

export default ListService;