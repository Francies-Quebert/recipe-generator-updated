import { create } from 'zustand'
import createSelectors from '../lib/createSelectors';

type defaultImgDataType = { base64data: string, blob: string }
type base64TypeData = { [key: string]: defaultImgDataType }

export type imgDataType = {
    ingredients: base64TypeData,
    meals: base64TypeData,
}
interface ImageStoreInterface {
    imgData: imgDataType;
    setImgData: (imgData: imgDataType) => void
}

const useImageStoreBase = create<ImageStoreInterface>()((set) => ({
    imgData: { ingredients: {}, meals: {} },
    setImgData: (imgData: imgDataType) => set({ imgData }),
}))

export const useImageStore = createSelectors(useImageStoreBase)
