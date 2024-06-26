import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { connect } from 'mongoose';
import connectToMongoDb from './db/connectToMongoDb.js';
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming request cookies

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Listen to the requests and connect to Mongo DB Atlas cluster
server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})
