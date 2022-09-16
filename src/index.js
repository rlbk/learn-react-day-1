import React from "react";
import ReactDOM from "react-dom/client";

import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={"Sam"}
          time="Today at 2:00pm"
          comment="Nice Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alice"
          time="Today at 4:00pm"
          comment="Keep it up!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tony"
          time="Yesterday at 12:40pm"
          comment="Awesome post. I really like it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
