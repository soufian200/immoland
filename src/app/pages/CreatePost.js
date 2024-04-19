import axios from "axios";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [space, setSpace] = useState("");
  const [rooms, setRooms] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("space", space);
    formData.append("rooms", rooms);
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Post created:", response.data);
      navigate(-1);
      setLoading(false);
      // Handle successful post creation (e.g., notify the user, redirect, etc.)
    } catch (error) {
      console.error("Error creating post:", error.response.data);
      setError("failed to create a post");
      setLoading(false);
      // Handle error
    }
  };

  return (
    <Layout>
      <div className="bg-gray-100 pt-2 pb-10 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="shadow p-4 space-y-4 bg-white ">
            <h2 className="font-bold text-2xl">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  value={price}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>City:</label>
                <input
                  type="text"
                  value={city}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Space:</label>
                <input
                  type="number"
                  value={space}
                  onChange={(e) => setSpace(e.target.value)}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label>Rooms:</label>
                <input
                  type="number"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {loading ? (
                <Loader />
              ) : (
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    type="button"
                    className="text-sm font-bold rounded-lg bg-gray-200 hover:opacity-80 px-10 py-3 text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm font-bold rounded-lg bg-primary hover:opacity-80 px-10 py-3 text-white"
                  >
                    Create Post
                  </button>
                </div>
              )}
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreatePost;

// import React, { useState } from "react";
// import Layout from "../components/Layout";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// // Define validation schema using Yup
// const validationSchema = Yup.object({
//   images: Yup.array()
//     .min(1, "At least one image is required")
//     .required("Image upload is required"),
//   title: Yup.string()
//     .min(6, "Title must be at least 6 characters")
//     .required("Title is required"),
//   description: Yup.string()
//     .min(10, "description must be at least 10 characters")
//     .required("description is required"),
//   price: Yup.number().required("price is required"),
//   space: Yup.number().required("space is required"),
//   rooms: Yup.number().required("rooms is required"),
//   beds: Yup.number().required("beds is required"),
//   floors: Yup.number().required("floors is required"),
//   bathrooms: Yup.number().required("bathrooms is required"),
//   elevatorInBuilding: Yup.boolean().required(
//     "elevator In Building is required"
//   ),
//   parkingSpaceIncluded: Yup.boolean().required(
//     "parking Space Included is required"
//   ),
// });

// export default function CreatePost() {
//   // Define the initial form values
//   const initialValues = {
//     images: [],
//     title: "",
//     description: "",
//     price: 1000,
//     space: 50,
//     rooms: 1,
//   };

//   // Define the form submission handler
//   const handleSubmit = (values) => {
//     console.log("Form Submitted:", values);
//     // Add your login logic here (e.g., API calls)
//   };
//   const [imagePreviews, setImagePreviews] = useState([]);

//   return (
//     <Layout>
//       <div className="bg-gray-100 pt-2 pb-10 text-gray-700">
//         <div className="max-w-7xl mx-auto">
//           <div className="shadow p-4 space-y-4 bg-white ">
//             <h1 className="text-3xl font-bold">Create a new post</h1>
//             <div>
//               {/* Formik component */}
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ setFieldValue, errors, touched }) => (
//                   <Form>
//                     {/* drop or upload zone */}
//                     <div class="flex items-center justify-center w-full">
//                       <label
//                         htmlFor="images"
//                         class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//                       >
//                         <div class="flex flex-col items-center justify-center pt-5 pb-6">
//                           <svg
//                             class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 20 16"
//                           >
//                             <path
//                               stroke="currentColor"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               stroke-width="2"
//                               d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                             />
//                           </svg>
//                           <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                             <span class="font-semibold">Click to upload</span>{" "}
//                             or drag and drop
//                           </p>
//                           <p class="text-xs text-gray-500 dark:text-gray-400">
//                             SVG, PNG, JPG or GIF (MAX. 800x400px)
//                           </p>
//                         </div>
//                         <input
//                           type="file"
//                           id="images"
//                           name="images"
//                           multiple
//                           onChange={(event) => {
//                             const files = event.currentTarget.files;
//                             // Set the files array to the Formik field
//                             setFieldValue("images", Array.from(files));

//                             // Create image previews
//                             const previews = [];
//                             for (let i = 0; i < files.length; i++) {
//                               const file = files[i];
//                               const reader = new FileReader();
//                               reader.onload = (e) => {
//                                 previews.push(e.target.result);
//                                 if (previews.length === files.length) {
//                                   setImagePreviews(previews);
//                                 }
//                               };
//                               reader.readAsDataURL(file);
//                             }
//                           }}
//                           className="hidden"
//                         />
//                       </label>
//                       {errors.images && touched.images && (
//                         <div style={{ color: "red" }}>{errors.images}</div>
//                       )}
//                     </div>

//                     {/* Display image previews */}
//                     <div className="grid grid-cols-4 gap-2 my-3">
//                       {imagePreviews.map((preview, index) => (
//                         <div className=" ">
//                           <img
//                             key={index}
//                             src={preview}
//                             className="border rounded-md w-[200px] h-[200px]"
//                             alt={`Preview ${index + 1}`}
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="title">Title:</label>
//                       <Field
//                         type="text"
//                         id="title"
//                         name="title"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="Title"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="title"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="description">Description:</label>
//                       <Field
//                         type="description"
//                         id="description"
//                         name="description"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="Description"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="description"
//                         component="div"
//                       />
//                     </div>

//                     {/* <div className="mt-3">
//                       <label
//                         htmlFor="message"
//                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                       >
//                         Your message
//                       </label>
//                       <textarea
//                         id="message"
//                         rows="4"
//                         class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="Write your thoughts here..."
//                       ></textarea>
//                     </div> */}

//                     <div className="mt-3">
//                       <label htmlhtmlFor="price">Price:</label>
//                       <Field
//                         type="number"
//                         id="price"
//                         name="price"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="10,000 MAD"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="price"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="space">Space:</label>
//                       <Field
//                         type="number"
//                         id="space"
//                         name="space"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="90m2"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="space"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="rooms">Rooms:</label>
//                       <Field
//                         type="number"
//                         id="rooms"
//                         name="rooms"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="1"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="rooms"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="beds">Beds:</label>
//                       <Field
//                         type="number"
//                         id="beds"
//                         name="beds"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="1"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="beds"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="floors">Floors:</label>
//                       <Field
//                         type="number"
//                         id="floors"
//                         name="floors"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="1"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="floors"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="bathrooms">Bathrooms:</label>
//                       <Field
//                         type="number"
//                         id="bathrooms"
//                         name="bathrooms"
//                         className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="1"
//                       />
//                       <ErrorMessage
//                         className="text-red-500 text-xs"
//                         name="bathrooms"
//                         component="div"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="elevatorInBuilding">
//                         <Field
//                           type="checkbox"
//                           id="elevatorInBuilding"
//                           name="elevatorInBuilding"
//                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <span className="pl-1">Elevator In Building</span>
//                       </label>
//                     </div>

//                     <div className="mt-3">
//                       <label htmlhtmlFor="parkingSpaceIncluded">
//                         <Field
//                           type="checkbox"
//                           id="parkingSpaceIncluded"
//                           name="parkingSpaceIncluded"
//                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <span className="pl-1">Parking Space Included</span>
//                       </label>
//                     </div>

//                     <div className="mt-4 flex justify-end space-x-2">
//                       <button
//                         type="button"
//                         className="text-sm font-bold rounded-lg bg-gray-200 hover:opacity-80 px-10 py-3 text-black"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="text-sm font-bold rounded-lg bg-primary hover:opacity-80 px-10 py-3 text-white"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
