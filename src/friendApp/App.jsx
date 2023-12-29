import { useState } from "react";
import FriendsList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import "./index.css";
// const faqs = [
//   {
//     title: "What is Javascript",
//     text: "lorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated text",
//   },
//   {
//     title: "What is Racts JS",
//     text: "lorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated text",
//   },
//   {
//     title: "What is Racts Props",
//     text: "lorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated text",
//   },
//   {
//     title: "How to Make Money with Coding",
//     text: "lorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated textlorme text ramdom generated text",
//   },
// ];

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriends, setshowAddFriends] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleToggle = () => {
    setshowAddFriends((show) => !show);
  };
  const handleAddFriends = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setshowAddFriends(false);
  };
  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setshowAddFriends(false);
  };

  const handleSplitBill = (value) => {
    //console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          Button={Button}
        />

        {showAddFriends && (
          <FormAddFriend onAddFriend={handleAddFriends} Button={Button} />
        )}
        <Button onClick={handleToggle}>
          {showAddFriends ? "Close" : "Add Friends"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          Button={Button}
        />
      )}
    </div>
  );
}

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
