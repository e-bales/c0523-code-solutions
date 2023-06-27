export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username <input autoComplete="hidden" name="username"></input>
      </label>
      <label>
        Password <input name="password" type="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
