import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
export default function App() {
  const [imageSrc, setSrc] = useState(null);
  const imageRef = useRef(null);
  const changeImage = (e) => {
    if (e?.target?.files[0]) {
      const newSrc = URL.createObjectURL(e?.target?.files[0])
      setSrc(newSrc)
    }
  }
  const handleClickImage = () => {
    if (imageRef.current) {
      console.log(imageRef.current);
      imageRef.current.click()
    }
  }
  const removeImage = () => {
    if (imageRef.current) {
      console.log(imageRef.current);
      imageRef.current.value = null
      setSrc("")
    }
  }
  return (
    <>
      <div className="d-flex mt-1">
        <img src={imageSrc} alt="" onClick={handleClickImage} height={300} width={300}>
        </img>
        <input type="file" ref={imageRef} accept="image/*" onChange={changeImage} hidden></input>
      </div>
      <Button variant="danger" className="mt-1" onClick={removeImage}>clear</Button>
    </>)
}