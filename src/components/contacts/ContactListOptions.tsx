import "../../assets/css/ContactListOptions.css";

export const ContactListOptions = () => {
  return (
    <div className="contact-list-options">
      <a href="/" className="button">
        + Create New
      </a>
      {/*<button className="button">Only Favorites (todo)</button>*/}
      Todos: show only favorites / sort by firstname/lastname / display type:
      list, grid
    </div>
  );
};
