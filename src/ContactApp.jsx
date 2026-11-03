
const ContactApp = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const [ contacts, setContacts ] = useState(null);
  return (
    <div>

      <h2>Contact management App</h2>
      
      <ContactList contacts={state.contacts} />
    </div>
  );
};

export default ContactApp;