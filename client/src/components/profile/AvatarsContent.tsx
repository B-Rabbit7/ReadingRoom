import { observer } from "mobx-react-lite";
import { Photo, Profile } from "../../models/profile";
import { Card, Image, Header, Grid, Button } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { SyntheticEvent, useState } from "react";
import ImageUploadWidget from "../imageUpload/ImageUploadWidget";

interface Props {
  profile: Profile;
}

export default observer(function AvatarsContent({ profile }: Props) {
  const {
    profileStore: {
      isCurrentUser,
      uploadPhoto,
      uploading,
      loading,
      setMainPhoto,
      deletePhoto,
    },
  } = useStore();
  const [addImageMode, setAddImageMode] = useState(false);
  const [target, setTarget] = useState("");

  function handleImageUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddImageMode(false));
  }

  function handleSetMainPhoto(
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>
  ) {
    setTarget(e.currentTarget.name);
    setMainPhoto(photo);
  }

  function handleDeletePhoto(
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>
  ) {
    setTarget(e.currentTarget.name);
    deletePhoto(photo);
  }

  return (
    <div>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon="image" content="Avatars" />
          {isCurrentUser && (
            <Button
              floated="right"
              basic
              color="orange"
              content={addImageMode ? "Cancel" : "Upload Image"}
              onClick={() => setAddImageMode(!addImageMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {addImageMode ? (
            <ImageUploadWidget
              uploadImage={handleImageUpload}
              loading={uploading}
            />
          ) : (
            <Card.Group itemsPerRow={5}>
              {profile.photos?.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  {isCurrentUser && (
                    <Button.Group fluid widths={2}>
                      <Button
                        basic
                        color="green"
                        content="Main"
                        name={"main" + photo.id}
                        disabled={photo.isMain}
                        loading={target === "main" + photo.id && loading}
                        onClick={(e) => handleSetMainPhoto(photo, e)}
                      />
                      <Button
                        basic
                        color="red"
                        icon="trash"
                        loading={target === photo.id && loading}
                        onClick={(e) => handleDeletePhoto(photo, e)}
                        disabled={photo.isMain}
                        name={photo.id}
                      />
                    </Button.Group>
                  )}
                </Card>
              ))}
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
});
