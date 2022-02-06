import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addPackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Package added successfully!!");
                reset();
            });
    };
    return (
        <div>
            <Container>
                <div className="row w-75 mx-auto">
                    <h3>Add Package</h3>
                    <br />
                    <div className="col">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Package Name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    placeholder="Pakcage Name"
                                    {...register("pakckageName")}
                                />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder=""
                                    {...register("price")}
                                />
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="image bb link"
                                    {...register("img")}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    class="form-control"
                                    rows="3"
                                    {...register("description")}
                                ></textarea>
                            </div>

                            <input
                                className="btn btn-info text-white my-3"
                                type="submit"
                                value="Add Pakcage"
                            />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddPackage;