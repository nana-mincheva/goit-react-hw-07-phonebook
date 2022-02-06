import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { allFilteredContacts } from "../../redux/contacts/selector";
import operations from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactList = () => {
  const getContacts = useSelector(allFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {getContacts.map(({ name, phone, id }) => {
          return (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}:</p>
              <p className={s.text}>{phone}</p>
              <button
                className={s.button}
                type="button"
                onClick={() => dispatch(operations.deleteContacts(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default ContactList;
