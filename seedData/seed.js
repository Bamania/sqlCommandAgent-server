import { PrismaClient } from '../generated/prisma/index.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Only run seed in development
if (process.env.NODE_ENV === 'production') {
  console.log('Skipping seed in production environment');
  process.exit(0);
}

// Import the seed function from the generated JS file
import('./index.js')
  .then(async ({ default: SeedData }) => {
    console.log('Starting database seed...');
    try {
      await SeedData();
      console.log('Seed completed successfully');
      process.exit(0);
    } catch (error) {
      console.error('Error during seed operation:', error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Failed to import seed function:', error);
    process.exit(1);
  });
