import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  salt_round: process.env.BCRYPT_SALT,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_acces_exp: process.env.JWT_ACCESS_SECRET_EXP,
  jwt_refresh_exp: process.env.JWT_REFRESH_SECRET_EXP,
  nodemailer_gmail: process.env.NODEMAILER_GMAIL,
  nodemailer_gmail_pass: process.env.NODEMAILER_GMAIL_PASS,
  reset_password_link: process.env.RESET_UI_LINK,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_api_key: process.env.CLOUDINARY_API_KEY,
  cloud_api_secret: process.env.CLOUDINARY_API_SECRET,
};
