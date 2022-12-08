import { useState } from "react";

export const Input = ({ setList, list, inputValue, setInputValue }) => {
  const [status, setStatus] = useState(true);
  const onCompliteAll = () => {
    setStatus(!status);
    setList(
      list.map((item) => {
        item.complited = status;
        return item;
      })
    );
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setList([...list, { value: inputValue, complited: false }]);
    setInputValue("");
  };

  return (
    <div className='button-input'>
      <div className="button-complite-all" onClick={() => onCompliteAll()}>▿</div>
      <form className="flex flex-col" onSubmit={(event) => onSubmitForm(event)}>
        <label htmlFor="name" className="mb-2 italic">
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autocomplete="name"
          required
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className='main-input'
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
};
