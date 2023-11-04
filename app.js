import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose
  .connect(`${process.env.MONGODB_CLUSTER}`)
  .then(() =>
    app.listen(port, () =>
      console.log(
        'Connected to MongoDB Database',
        '\n',
        `Listening on port ${port}...`
      )
    )
  )
  .catch((err) => console.log(err));
