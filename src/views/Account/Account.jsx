import "./Account.scss";

const Account = ({ user, setUser }) => {
  const { firstName, lastName } = user;
  return (
    <section id="account">
      <h1 className="page-title">L&B - Mon compte</h1>

      <form className="account-form">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Prénom</label>
          <input type="text" name="lastName" id="lastName" value={lastName} />
        </div>
      </form>
    </section>
  );
};

export default Account;
