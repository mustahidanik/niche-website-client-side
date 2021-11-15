import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([])

    useEffect(() => {
        const url = `https://morning-dusk-61811.herokuapp.com/order?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])
    const handleDeleteOrder = id => {
        console.log(id);
        fetch(`https://morning-dusk-61811.herokuapp.com/order?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    window.location.reload()
                }
            })
    }
    return (
        <div>
            <h1>My Orders</h1>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services ">
                {

                    myOrder.map(myOrders => <MyOrders
                        key={myOrders._id}
                        myOrders={myOrders}
                        handleDeleteOrder={handleDeleteOrder}
                    ></MyOrders>)
                }

            </div>
        </div>
    );
};

export default MyOrder;