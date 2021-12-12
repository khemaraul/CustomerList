import React, { useRef, useState, useEffect } from 'react';
import data from '../CustomerList/CustomerData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = (props) => {
    // let size = 10;
    const [count, setCount] = useState(20);
    const [listItems, setListItems] = useState(data.slice(0, 10));
    useEffect(() => {
        
    },[count])
    const listInnerRef = useRef();
    console.log("typeof", typeof(data));
    const onScroll = () => {
        if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        if (scrollTop + clientHeight === scrollHeight) {
            setCount(count+10)
            setTimeout(() => {
                // alert(count)
                // size += 10;
                setListItems(prevState => (data.slice(0, count)));
              }, 1000);
        }
        }
        // return size;
    };
    return (
        <div className='container'>
            <div
                onScroll={onScroll}
                ref={listInnerRef}
                style={{ height: "500px", overflowY: "auto" }}
            >
            <ul className="list-group mb-2">
                {listItems.map(listItem => <div class="shadow-lg p-3 mb-5 bg-white rounded"><li className="list-group-item">List Item Id : {listItem.id}</li>
                                            <li className="list-group-item">Name : {listItem.first_name} {listItem.last_name}</li>
                                            <li className="list-group-item">Mobile No. : {listItem.mobile_number}</li>
                                            <li className="list-group-item">Country : {listItem.country}</li>
                                            <img src={`images/${listItem.image}`} width={'50px'} height={'50px'} /></div>)}
                                            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                </div>
            </ul>
            </div>
        </div>
    )
}

export default HomePage;