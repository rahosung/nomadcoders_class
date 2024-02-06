import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: skyblue;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const [file, setFile] = useState<File | null>(null);
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("Are you sure you want to delete this tweet?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (error) {
      console.log(error);
    } finally {
      //
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  const fileOpen = () => {
    const ok = confirm("Are you sure you want to edit this tweet?");
    if (!ok) return;
    document.getElementById("editFileInput")?.click();
  };

  useEffect(() => {
    const onEdit = async () => {
      if (user?.uid !== userId) return;
      try {
        const editDoc = doc(db, "tweets", id);
        console.log(file);
        if (file) {
          console.log(file);
          const locationRef = ref(storage, `tweets/${user.uid}/${id}`);
          const result = await uploadBytes(locationRef, file);
          const url = await getDownloadURL(result.ref);
          console.log(url);
          await updateDoc(editDoc, {
            photo: url,
          });
        }
        setFile(null);
      } catch (error) {
        console.log(error);
      } finally {
        //
      }
    };
    if (file !== null) {
      onEdit();
    }
  }, [file, id, user?.uid, userId]);

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
        {user?.uid === userId ? (
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        ) : null}
        {user?.uid === userId ? (
          <EditButton onClick={fileOpen}>Edit</EditButton>
        ) : null}
      </Column>
      <Input
        onChange={onFileChange}
        id="editFileInput"
        type="file"
        accept="image/*"
      />
      <Column>{photo ? <Photo src={photo} /> : null}</Column>
    </Wrapper>
  );
}
