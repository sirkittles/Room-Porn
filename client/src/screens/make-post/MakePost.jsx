import React, { useState } from "react";
// import { postPost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";

const MakePost = (props) => {
  const { currentUser, handlePostCreate } = props;

  const [formData, setFormData] = useState({
    img_url: "",
    content: "",
  });
  const { img_url, content } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Layout currentUser={currentUser} >
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          handlePostCreate(formData);
        }}>
          <h2>Create a Post</h2>
          <label>
            Img Url:
            <input
              type='text'
              name='img_url'
              value={img_url}
              onChange={handleChange}
            />
          </label>
          <label>
            Caption:
            <input
              type='text'
              name='content'
              value={content}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default MakePost;
