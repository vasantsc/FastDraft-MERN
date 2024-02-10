import React from "react";
import MainScreen from "../../components/mainScreen/mainScreen";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
import { notes } from "../data";

const MyNotes = () => {
 const deleteHandler = (id) =>{
    if(window.confirm("Are you Sure")){
        console.log(id);
    }
 }
  return (
    <MainScreen title="Welcome back Vasant C">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

        {notes.map((note) => {
        return <Card>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {note?.title}
            </span>
            <div>
            <Link to={`/note/${note._id}`}> <Button >Edit</Button></Link>
            <Button variant="danger" className="mx-2" onClick={()=>deleteHandler(note._id)}>
              Delete
            </Button>
          </div>
          </Card.Header>
          <Card.Body>
            <h4>
                <Badge bg="success" className="text-white" variant="success">Category - {note.catergory}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">Created on - date</footer>
            </blockquote>
          </Card.Body>
        </Card>;
      })}
      
    </MainScreen>
  );
};

export default MyNotes;
