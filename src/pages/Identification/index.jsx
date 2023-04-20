import { useState, useEffect, useRef } from 'react';
import Layout from "../../components/Layout";
//import { useLatest } from "react-use";
import style from "./index.module.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
const Identification = () => {
    const [isModelLoading, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([])
    const [history, setHistory] = useState([])

    const imageRef = useRef()
    const textInputRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load()
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results)
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value)
        setResults([])
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])

    useEffect(() => {
        if (imageURL) {
            setHistory([imageURL, ...history])
        }
    }, [imageURL])

    if (isModelLoading) {
        return <h2> Model Loading...</h2>
    }

 return (
    <Layout>
      <h1 className={style.header}>Whale and Dolphin Species Identification</h1>
      <div className={style.inputHolder}>
        <input type='file' accept='image/*' capture='camera' className={style.uploadInput} onChange={uploadImage} ref={fileInputRef} />
        <button className={style.uploadImage} onClick={triggerUpload}> Upload Image OR  </button>
        <input type="text" placeholder='Paster image URL' ref={textInputRef} onChange={handleOnChange} />
      </div>
      <div className={style.mainWrapper}>
        <div className={style.mainContent}>
          <div className={style.imageHolder}>
            {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
          </div>
          {results.length > 0 && <div className={style.resultsHolder}>
            {results.map((result, index) => {
              return (
                <div className={style.result} key={result.className}>
                  <span className={style.name}>{result.className}</span>
                  <span className={style.confidence}>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className={style.bestGuess}>Best Guess</span>}</span>
                </div>
              )
            })}
          </div>}
        </div>
        {imageURL && <button className={style.button} onClick={identify}>Identify Image</button>}
      </div>
      {history.length > 0 && <div className={style.recentPredictions}>
        <h2>Recent Images</h2>
        <div className={style.recentImages}>
          {history.map((image, index) => {
            return (
              <div className={style.recentPrediction} key={`${image}${index}`}>
                <img src={image} alt='Recent Prediction' onClick={() => setImageURL(image)} />
              </div>
            )
          })}
        </div>
      </div>}
     </Layout>
  );
}

export default Identification;


 