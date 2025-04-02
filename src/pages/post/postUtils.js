export function getPost(paramNo) {
    const postData = JSON.parse(localStorage.getItem("postData"));
    console.log(postData);

    for (let i = 0; i < postData.length; i++) {
        if (postData[i].no == paramNo) {
            return postData[i];
        }
    }
}

export function getPostData() {
    return JSON.parse(localStorage.getItem("postData"));
}
