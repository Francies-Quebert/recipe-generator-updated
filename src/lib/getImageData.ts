export const getImageData = async (data: { name: string, url: string }[]) => {
    try {
        let imgData = {}
        for (let index = 0; index < data.length; index++) {
            // Fetch the image from the URL
            const response = await fetch(`${data[index].url}`).catch(err => {
                imgData = {
                    ...imgData, [data[index].name]: { base64data: 'error', blob: null }
                }
                return { blob: () => '' }
            });
            // if(!response) return
            const blob = await response.blob();
            // Convert the iclgmage data to Base64 encoding
            const reader = new FileReader();
            reader.onloadend = () => {

                const base64data = reader.result;

                imgData = {
                    ...imgData, [data[index].name]: { base64data, blob }
                }
            };
            if (blob) reader.readAsDataURL(blob);
        }
        return imgData;


    } catch (error) {
        console.error('Error fetching or storing the image:', error);
        return null;
    }
};