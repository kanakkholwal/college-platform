import mongoose from 'mongoose';
import { ScrapeResult } from 'src/controllers/scraper';
import Result from 'src/models/result';

// const dbURI = "mongodb+srv://<username>:<password>@<cluster>.<clusterId>.mongodb.net/development";

// Connect to the MongoDB database
// mongoose.connect(dbURI, {
    
// })
//     .then(() => console.log('Connected to database'))
//     .catch((error) => console.error('Error connecting to database:', error.message));

// Define a function to scrape and update a single result
async function scrapeAndUpdateResult(rollNo) {
    try {
        const result = await ScrapeResult(rollNo);
        const resultData = await Result.findOne({ rollNo });

        if (resultData) {
            resultData.semesters = result.semesters;
            await resultData.save();
            console.log(`Updated ${rollNo}`);
        } else {
            console.log(`Result not found for ${rollNo}`);
        }
    } catch (error) {
        console.error(`Error scraping ${rollNo}: ${error.message}`);
    }
}

// Fetch all documents from the collection and scrape each result
async function scrapeAndUpdateAllResults() {
    try {
        console.log('Fetching results from database...');
        const results = await Result.find({});
        // for await (const result of results) {
        //     console.log(`Scraping ${result.rollNo}...`);
        //     await scrapeAndUpdateResult(result.rollNo);
        // }
        const chunkSize = 50; // Process 50 documents at a time

        // Split the documents into chunks
        const chunks = [];
        for (let i = 0; i < results.length; i += chunkSize) {
            chunks.push(results.slice(i, i + chunkSize));
        }

        // Process each chunk sequentially
        for await(const chunk of chunks) {
            const promises = chunk.map(result => scrapeAndUpdateResult(result.rollNo));
            await Promise.all(promises);
        }
    } catch (error) {
        console.error('Error fetching results from database:', error.message);
    } finally {
        mongoose.disconnect();
    }
}

// Call the function to scrape and update all results
// scrapeAndUpdateAllResults();