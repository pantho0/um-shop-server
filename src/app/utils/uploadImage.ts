import cloudinary from 'cloudinary';
import config from '../config';

cloudinary.v2.config({
  cloud_name: config.cloud_name,
  api_key: config.cloud_api_key,
  api_secret: config.cloud_api_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: 'auto' as const,
};

export const uploadImage =  (image: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        return resolve(result.secure_url);
      }
      return reject({ message: error?.message });
    });
  });
};
