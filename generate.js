import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

const prompt="cyberpunk night city on a heavy rainy night";
const result=await openai.images.generate({
    prompt,
    n:1,
    size:"1024x1024",
    user:"abhiram",
})

const url= result.data.data[0].url;
console.log(url);

const imageResult = await fetch(url);
const blob = await imageResult.blob();
const buffer=Buffer.from(await blob.arrayBuffer());
writeFileSync(`.img/${Dat.now().png}`,buffer);


// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const image = await openai.images.generate({ prompt: "tiger cub among kittens" });

//   console.log(image.data);
// }
// main();