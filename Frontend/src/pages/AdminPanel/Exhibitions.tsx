

import { useState, useEffect } from "react";
import axios from "axios";

export default function Exhibitions() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [exhibitionsData, setExhibitionsData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/upcoming_exhibitions",
        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
        .then((res) => {
          setExhibitionsData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }, [refresh]);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setIsEditMode(false);
      setEditItem(null);
      resetForm();
    };
  
    let payload = {};
  
    if (isEditMode && editItem) {
      payload = {
        records: [
          {
            id: editItem.id,
            field: {
              date,
              title,
              description,
            },
          },
        ],
      };
    } else {
      payload = {
        records: [
          {
            field: {
              date,
              title,
              description,
            },
          },
        ],
      };
    }
  
    const resetForm = () => {
      setTitle("");
      setDate("");
      setDescription("");
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
  
      if (isEditMode && editItem) {
        setIsUpdating(true);
  
        axios
          .post(
            `https://stackby.com/api/betav1/rowupdate/sthY4FT7hDG3xsbqTl/upcoming_exhibitions`,
            payload,
            { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
          )
          .then((res) => {
            if (res.status === 200) {
              setRefresh((prevRefresh) => !prevRefresh);
              closeModal();
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsUpdating(false);
          });
      } else {
        setIsAdding(true);
        axios
          .post(
            "https://stackby.com/api/betav1/rowcreate/sthY4FT7hDG3xsbqTl/upcoming_exhibitions",
            payload,
            { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
          )
          .then((res) => {
            if (res.status === 200) {
              setRefresh((prevRefresh) => !prevRefresh);
              resetForm();
              closeModal();
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsAdding(false);
          });
      }
    };
  
    const handleDelete = (id: string) => {
      setIsLoading(true);
  
      axios
        .delete(
          `https://stackby.com/api/betav1/rowdelete/sthY4FT7hDG3xsbqTl/upcoming_exhibitions?rowIds[]=${id}`,
          { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
        )
        .then((res) => {
          if (res.status === 200) {
            setRefresh(true);
            setExhibitionsData((prevData: any) => prevData.filter((data: any) => data.id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  
    const setEditMode = (item: {}) => {
      setIsEditMode(true);
      setEditItem(item);
      openModal();
    };
  
    useEffect(() => {
      if (isEditMode && editItem) {
        console.log(editItem);
        setTitle(editItem.field.title);
        setDate(editItem.field.date);
        setDescription(editItem.field.description);
      }
    }, [isEditMode, editItem]);

    
    function sideMenu() {
      var element = document.getElementById("adminpanel");
      element.classList.toggle("show");
  
    }
  return (
    <>
     
      
        
          {/* <SideAdminMenu/> */}

        
          <div className="rightheader">
          <button onClick={sideMenu} className="burger_icon"><i className="bi bi-list"></i></button>
          <button className="createBtn" type="button" onClick={openModal}>
              Create
            </button>
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden={!isModalOpen}
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="formBox">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="date">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id=""
                          placeholder="Date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="title"> Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Title"
                          placeholder="Title"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          placeholder="Description"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      {isAdding ? (
                        <p>Adding...</p>
                      ) : isUpdating ? (
                        <p>Updating...</p>
                      ) : (
                        <div>
                          <button type="submit" className="btn submitBtn">
                            {isEditMode ? "Update" : "Add"}
                          </button>
                          <button
                            type="button"
                            className="btn cancelBtn"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="admintable">
          {isLoading ? (
              <p>Loading...</p>
            ) : (
              <table className="table">
              <thead>
                <tr>
                <th scope="col">S. No.</th>
                  <th scope="col">Date</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
              {exhibitionsData && exhibitionsData.map((data, index) => {
                return <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{data.field.date}</td>
                  <td>{data.field.title}</td>
                  <td>{data.field.description}</td>
                  <td className="align_center">
                        <button
                          className="bTn"
                          onClick={() => setEditMode(data)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </td>
                      <td className="align_center">
                        <button
                          className="bTn delete"
                          onClick={() => handleDelete(data.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </td>
                </tr>
              })}
              </tbody>
            </table>
            )}

            
          </div>
        
 

    </>
  );
}
