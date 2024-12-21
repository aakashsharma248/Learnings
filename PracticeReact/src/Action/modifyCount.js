const modifyCount = (type, state) => {
    return {
        type: type,
        payload: state
    }
};

export default modifyCount;