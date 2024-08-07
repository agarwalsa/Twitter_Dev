const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
app.listen(3000,async ()=>{
    console.log('server started');
    await connect();
    console.log('mongo-db connected');
    
    // const tweet = await Tweet.create({
    //     content:'Second Tweet',
       
    // });
    // console.log(tweet);
    // const tweet = await Tweet.find({userEmail:'ag@a.com'});
    // console.log(tweet);
    // const tweet = await Tweet.findById('66b0fb54492bcf3436906408');
    // tweet.userEmail = 'arihant@gmail.com';
    // await tweet.save();
    // console.log(tweet);
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('66b36ca940e417afb95df1d7');
    console.log(tweet);
    // const tweet = await tweetRepo.create({content:'my tweet with the comment schema'});
    // const comment = await Comment.create({content: 'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    // console.log(tweet);
    // tweet.comments.push({content:'first comment'});
    // await tweet.save();
    // console.log(tweet);
     
});