import UseForm from "./useForm";
const ContactForm = () => {
    const { values,  handleChange } = UseForm({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("Form submitted:", values);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;