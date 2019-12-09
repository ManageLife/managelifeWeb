import { ENV } from '../../../environment'
const {
   REACT_APP_CLOUDINARY_CLOUD_NAME: cloudName,
   REACT_APP_CLOUDINARY_UPLOAD_PRESET: uploadPreset,
} = ENV.dev

const cloudinaryApiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
const cloudinaryUploadPreset = uploadPreset

export { cloudinaryApiUrl, cloudinaryUploadPreset }
