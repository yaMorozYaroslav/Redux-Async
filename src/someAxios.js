import axios from 'axios';
import {selectFields}from'../utils/selectFields';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl=`${baseUrl}item/`;

export const getStory = async(storyDi)=>{
	const result =  await 
   axios
	.get(`${storyUrl+storyDi}.json`)
	.then(({data})=>selectFields(data));

	return result;
};

export const getStoryIds = async()=>{
	const result = await 
	            axios
	             .get(newStoriesUrl)
	             .then(({data})=>data);

	           return result;
}