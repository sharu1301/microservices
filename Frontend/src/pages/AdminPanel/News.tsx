
import { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [newsData, setNewsData] = useState([]);

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
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/news_section",
        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => {
        setNewsData(res.data);
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
            title,
            url,
            image,
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
            title,
            url,
            image,
            description,
          },
        },
      ],
    };
  }

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setImage("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode && editItem) {
      setIsUpdating(true);

      axios
        .patch(
          `https://stackby.com/api/betav1/rowupdate/sthY4FT7hDG3xsbqTl/news_section`,
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
          "https://stackby.com/api/betav1/rowcreate/sthY4FT7hDG3xsbqTl/news_section",
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

  const handleDelete = (id) => {
    setIsLoading(true);

    axios
      .delete(
        `https://stackby.com/api/betav1/rowdelete/sthY4FT7hDG3xsbqTl/news_section?rowIds[]=${id}`,
        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => {
        if (res.status === 200) {
          setRefresh(true);
          setNewsData((prevData) => prevData.filter((data) => data.id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setEditMode = (item) => {
    setIsEditMode(true);
    setEditItem(item);
    openModal();
  };

  useEffect(() => {
    if (isEditMode && editItem) {
      console.log(editItem);
      setTitle(editItem.field.title);
      setUrl(editItem.field.url);
      setImage(
        editItem.field.image === null ? "" : editItem.field.image[0].url
      );
      setDescription(editItem.field.description);
    }
  }, [isEditMode, editItem]);

  function sideMenu() {
    var element = document.getElementById("adminpanel");
    element.classList.toggle("show");

  }


  return (
    <>
      
          {/* <SideAdminMenu /> */}
        
          <div className="rightheader">
            <button onClick={sideMenu} className="burger_icon"><i class="bi bi-list"></i></button>
            <button className="createBtn" type="button" onClick={openModal}>
              Create
            </button>
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden={!isModalOpen}
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="formBox">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="image">News Image URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="image"
                          placeholder="News image"
                          required
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="NewsTitle">News Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="NewsTitle"
                          placeholder="News Title"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description">News Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Description"
                          placeholder="Description"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="url">News URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="url"
                          placeholder="https://example.com"
                          required
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
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
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">URL</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {newsData.map((data, index) => (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.field.image && data.field.image[0].url}</td>
                      <td>{data.field.title}</td>
                      <td>{data.field.url}</td>
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
                  ))}
                </tbody>
              </table>
            )}
          </div>
        
    </>
  );
}
