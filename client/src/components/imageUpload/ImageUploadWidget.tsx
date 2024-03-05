import { Button, Grid, Header } from "semantic-ui-react";
import ImageWidgetDropzone from "./ImageWidgetDropzone";
import { useEffect, useState } from "react";
import ImageWidgetCropper from "./ImageWidgetCropper";

interface Props {
  loading: boolean;
  uploadImage: (file: Blob) => void;
}

export default function ImageUploadWidget({ loading, uploadImage }: Props) {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();

  function onCrop() {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => uploadImage(blob!));
    }
  }

  useEffect(() => {
    return () => {
      files.forEach((file: object & { preview?: string }) =>
        URL.revokeObjectURL(file.preview!)
      );
    };
  }, [files]);

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header sub color="blue" content="Step 1 - Upload Image " />
        <ImageWidgetDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={4}>
        <Header sub color="blue" content="Step 2 - Crop Image " />
        {files && files.length > 0 && (
          <ImageWidgetCropper
            setCropper={setCropper}
            imagePreview={files[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={4}>
        <Header sub color="blue" content="Step 3 - Preview " />
        {files && files.length > 0 && (
          <>
            <div
              className="img-preview"
              style={{ minHeight: 200, overflow: "hidden" }}
            />
            <Button.Group widths={2}>
              <Button
                loading={loading}
                onClick={onCrop}
                positive
                content="Upload"
              />
              <Button
                disabled={loading}
                onClick={() => setFiles([])}
                content="Cancel"
              />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
}
