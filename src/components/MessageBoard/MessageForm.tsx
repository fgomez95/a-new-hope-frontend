import React from "react";

const messageForm = () => (
  <form>
    <input type="text" id="username" placeholder="username" />
    <textarea id="message" placeholder="message" />
    <input type="submit" id="submit" />
  </form>
);

export default messageForm;
