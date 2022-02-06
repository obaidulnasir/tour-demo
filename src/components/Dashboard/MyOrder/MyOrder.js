import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [myOrder]);
    // console.log(myOrder)

    //Delete request
    const handleDelete = (id) => {
        // console.log(id);
        const toDelete = window.confirm('Are you sure to delete your booking??')
        if(toDelete){
          fetch(`http://localhost:5000/deleteBooking/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                
            } else {
           
            }
          });
        };
        
      };
    return (
        <div>
            <Container>
                <div>
                    <h3 className=" text-center fw-bold">MY ORDER</h3>
                </div>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {myOrder?.map((mo, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{mo?.package}</td>
                                    <td>{mo?.email}</td>
                                    <td>{mo?.date}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                ;
                                            }}
                                            className="btn bg-success p-2 mx-1"
                                        >Success</button>
                                        <button
                                            onClick={() => {handleDelete(mo._id)} }
                                            className="btn bg-danger p-2"
                                        >Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyOrder;