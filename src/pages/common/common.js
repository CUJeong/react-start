// 함수를 다른 파일에서 import 로 불러다 쓸 수 있도록 export를 붙여준다
export function currentDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth()).padStart(2, "0");
    let date = String(today.getDate()).padStart(2, "0");

    return `${year}.${month}.${date}`;
}
