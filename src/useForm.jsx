import { useState } from "react";
const UseForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return { values, errors, handleChange };
};
export default UseForm;