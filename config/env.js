import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {SERVER_URL ,PORT,NODE_ENV,DB_URL,JWT_SECRET,JWT_EXPIRES,ARCJET_KEY,ARCJET_ENV,
    QSTASH_URL,QSTASH_TOKEN,EMAIL_PASSWORD
}=process.env;
