import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';


const BookNow = (props) => {
    const { id, packageName } = props;
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    //Make order
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/booking", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("product added successfully!!");
            reset();
          });
    };
    
    return (
        <div>
            <Row>
                <Col>
                <h2 className="text-info my-3">BOOKING HERE</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="name"
                                className="form-control"
                                defaultValue={user?.displayName}
                                placeholder="Your Name"
                                {...register("userName", { required: true })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                defaultValue={user?.email}
                                {...register("email", { required: true })}
                            />
                            {/* <small id="emailHelp" className="form-text text-muted">
                                * We'll never share your email with anyone else.
                </small> */}
                        </div>
                        <div className="form-group">
                            <label>Package</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={packageName}
                                placeholder=""
                                {...register("package", { required: true })}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label>PackageID</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={id}
                                placeholder=""
                                disabled
                                {...register("id")}
                            />
                        </div> */}
                        <div className="form-group">
                            <label>Date</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={new Date().toLocaleString()}
                                placeholder=""
                                {...register("date", { required: true })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="number"
                                className="form-control"
                                defaultValue=""
                                placeholder=""
                                {...register("phone", { required: true })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                {...register("address", { required: true })}
                            ></textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <input className="btn btn-info text-white my-2" type="submit" value="Book Now" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default BookNow;