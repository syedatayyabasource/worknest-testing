const {defineConfig}=require('vitest/config');module.exports=defineConfig({root:'server',test:{environment:'node',globals:true,include:['test/**/*.test.js']}});
