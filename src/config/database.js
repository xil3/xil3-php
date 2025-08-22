// Database configuration
// Currently using in-memory storage
// This can be extended to use MongoDB, PostgreSQL, MySQL, etc.

const databaseConfig = {
    // In the future, add database connection settings here
    // For now, using in-memory storage in models
    type: 'memory',
    
    // Example for future database integration:
    // mongodb: {
    //     url: process.env.MONGODB_URL || 'mongodb://localhost:27017/xil3',
    //     options: {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     }
    // }
};

module.exports = databaseConfig;