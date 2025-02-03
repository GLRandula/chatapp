import React, { useState } from 'react'

const SendMessage = () => {
  const [value, setValue] = useState("");
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <div className="w-full bg-neutral text-neutral-content items-center p-4 fixed bottom-0">
      <form onSubmit={handleSendMessage} className="containerWrap flex gap-2">
        <input
          value={value} onChange={e => setValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
        />
        <button type='submit' className="btn btn-outline btn-primary w-auto px-10">
          Send
        </button>
      </form>
    </div>
  )
}

export default SendMessage
