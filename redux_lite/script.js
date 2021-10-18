let state = {
    user: "Andy",
    course: "Calc 1"
};

const changeCourse = {
    type: "change course",
    newCourse: "Organic Chem"
};

const changeName = {
    type: "change name",
    newName: "Alberto"
};

const courseReducer = (prevState = null, action) => {
    if(action.type === "change course"){
        return action.newCourse;
    }else if(action.type === "change name"){
        return action.newName;
    }else{
        return prevState;
    }
};

// courseReducer(state.course, changeCourse); // "Organic Chem"