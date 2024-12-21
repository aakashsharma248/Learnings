import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MyContext } from "./App";
import { useDispatch } from "react-redux";
import modifyCount from './Action/modifyCount';
// import "./Home.css"

const UserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  let navigate = useNavigate();
  const location = useLocation();
  const passedData = location.state;
  const dispatch = useDispatch();
  // console.log(passedData, "passedData");

  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    console.log("UserData component is mounted");

    if(data && data.length>0 && text===""){
      const itemPerPage = 10;
      const totalItems = data.length;
      setTotalNumberOfPages(Math.ceil(totalItems / itemPerPage));
      setCurrentItems(data.slice((currentPage - 1) * 10, currentPage * 10));
      setCurrentPageData(data.slice((currentPage - 1) * 10, currentPage * 10));
    }

    if (data && data.length === 0) {
      setIsLoading(true);
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((r) => {
          if (r) {
            setData(r.users);
            setIsLoading(false);
 
            const itemPerPage = 10;
            const totalItems = r.users.length;
            setTotalNumberOfPages(Math.ceil(totalItems / itemPerPage));
            // let currentItems =
            //   data &&
            //   data.length !== 0 &&
            //   data.slice((currentPage - 1) * 10, currentPage * 10);
              setCurrentItems(r.users.slice((currentPage - 1) * 10, currentPage * 10));
              setCurrentPageData(r.users.slice((currentPage - 1) * 10, currentPage * 10))
          }
        });
    }

    let timeoutId=null;
     const timeOut = () => {
        timeoutId = setTimeout(()=> {
            const filteredItems = currentPageData.filter((item)=>{
              return item.firstName.toLowerCase().startsWith(text.toLowerCase());
            })
            setCurrentItems(filteredItems);
            },2000) 
     }

     if(text!==""){
      timeOut();
     }

    return () => {
      console.log("UserData component is unmounted");
      clearTimeout(timeoutId);
    };
  }, [currentPage,text]);

  const headers = data && data[0] && Object.keys(data[0]);

  const onClickHandler = () => {
    console.log("UserData component onclick handler is called");
    dispatch(modifyCount('decrement',1))
    navigate("/");
  };

  const previousClickHandler = () => {
    console.log("previous click handler");
    if (currentPage > 1) {
      setText("");
      setCurrentPage((prev) => prev - 1);
      console.log(currentItems, "currentItems");
    }
  };

  const nextClickHandler = () => {
    console.log("next click handler");
    if (currentPage < totalNumberOfPages) {
      setText("");
      setCurrentPage((prev) => prev + 1);
      console.log(currentItems, "currentItems");
    }
  };

  const textChangeHandler = (e) => {
     setText(e.target.value);
     if(e.target.value===""){
      setCurrentItems(data.slice((currentPage - 1) * 10, currentPage * 10));
      setCurrentPageData(data.slice((currentPage - 1) * 10, currentPage * 10))
     }
  }

  const listItemHandler = (id) => {
     console.log(id,'listItemHandler');
     const filterData = data.filter((item)=>item.id === (id+1))
     console.log(filterData,'filterData');
     navigate(`/users/${id+1}`, {state: {filterData}})
  }

  return (
    <>
      {!isLoading ? (
        <>
          <h1 style={{display: "inline", marginTop: "8px"}}>This is a user component</h1>
          <button onClick={onClickHandler} style={{ border: "3px solid red", color: "white", backgroundColor: "black",padding: "8px", borderRadius: "4px", position: "fixed", right: "2vw", marginTop: "8px" }}>
            {" "}
            Redirect to the home component
          </button>

           <div style={{display: "flex", justifyContent: "center", padding: "35px", backgroundColor: "beige", width: "100%", marginTop: "15px"}}>
             <label htmlFor="name-input"><b style={{fontSize: "25px"}}>Filter with first name: &nbsp; </b></label>
             <input type="text" onChange={textChangeHandler} value={text} id="name-input" placeholder="Eg: Emma" />
           </div>
          <table style={{backgroundColor: "lightGrey"}}>
            <thead>
              {headers &&
                headers.length>0 &&
                headers.map((header, i) => {
                  return <th key={i}> {header} </th>;
                })}
            </thead>
            <tbody>
              {data &&
                data.length !== 0 &&
                currentItems.map((item,i) => {
                  return (
                      <tr key={i}>
                        {headers &&
                          headers.map((hItem,hIndex) => {
                            if (typeof item[hItem] !== "object") {
                              return (
                                  <td key={hIndex} onClick={() => listItemHandler(i)}>{item[hItem]}</td>
                              );
                            } else {
                              return <td> </td>;
                            }
                          })}
                      </tr>
                  );
                })}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              position: "fixed",
              bottom: 10,
              right: 50,  
            }}
          >
            <button onClick={previousClickHandler} style={{padding: "5px", borderRadius: "4px", minWidth: "70px", border: "3px solid red", color: "white", backgroundColor: "black"}}>Previous</button>
            <button style={{padding: "5px", borderRadius: "4px", minWidth: "70px",  border: "3px solid red", color: "white", backgroundColor: "black"}}>{currentPage}</button>
            <button onClick={nextClickHandler} style={{padding: "5px", borderRadius: "4px", minWidth: "70px",  border: "3px solid red", color: "white", backgroundColor: "black"}}>Next</button>
          </div>
        </>
      ) : (
        <h1> User Data is being loaded</h1>
      )}
    </>
  );
};
export default UserData;



