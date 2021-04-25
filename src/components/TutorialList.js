import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
retrieveTutorials,
findTutorialsByTitle,
deleteAllTutorials,
} from "../actions/tutorials";

const TutorialsList = () => {
const [currentTutorial, setCurrentTutorial] = useState(null);
const [currentIndex, setCurrentIndex] = useState(-1);
const [searchTitle, setSearchTitle] = useState("");

const tutorials = useSelector(state => state.tutorials);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(retrieveTutorials());
}, []);

const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
};

const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
};

const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
};

const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
    .then(response => {
        console.log(response);
        refreshData();
    })
    .catch(e => {
        console.log(e);
    });
};

const findByTitle = () => {
    refreshData();
    dispatch(findTutorialsByTitle(searchTitle));
};

return (
    <></>
);
};

export default TutorialsList;