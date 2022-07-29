import NoPhoto from "../resources/images/no-photo.jpg";

export const onErrorLoading = (event) => {
    if(event) {
        event.target.src = NoPhoto
    }
}