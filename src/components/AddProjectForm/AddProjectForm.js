import { useState } from "react";

import { Wrapper } from "./AddProjectForm.styles";

const AddProjectForm = ({ toggleModal, addProject, numberOfProjects }) => {
  const [values, setValues] = useState({
    title: "",
    backgroundUrl: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (values.title && values.backgroundUrl && values.description) {
      const newProject = {
        id: numberOfProjects,
        title: values.title,
        description: values.description,
        backdropPath: values.backgroundUrl,
        time: 0,
        tasks: [],
        tasksStats: {
          done: 0,
          undone: 0,
          deleted: 0,
        },
      };
      addProject(newProject);
      toggleModal();
    }
  };

  const handleTitleInputChange = (e) => {
    setValues({ ...values, title: e.target.value });
  };
  const handleBackgroundInputChange = (e) => {
    setValues({ ...values, backgroundUrl: e.target.value });
  };
  const handleDescriptionInputChange = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          value={values.title}
          onChange={handleTitleInputChange}
          name="title"
          type="text"
          placeholder="Name of the project"
          size="41"
        />
        {submitted && !values.title ? (
          <span>Please enter name of the project</span>
        ) : null}
        <input
          value={values.backgroundUrl}
          onChange={handleBackgroundInputChange}
          name="backgroundUrl"
          type="text"
          placeholder="Source for background picture"
          size="41"
        />
        {submitted && !values.backgroundUrl ? (
          <span>Please enter background url</span>
        ) : null}
        <textarea
          value={values.description}
          onChange={handleDescriptionInputChange}
          name="description"
          placeholder="Describe your project"
          rows="5"
          cols="40"
        ></textarea>
        {submitted && !values.description ? (
          <span>Please enter description of your project</span>
        ) : null}
        <input type="submit" value="Add project" />
      </form>
    </Wrapper>
  );
};

export default AddProjectForm;
