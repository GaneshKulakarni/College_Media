const axios = require('axios');
const logger = require('../utils/logger');

// Piston API Configuration
const PISTON_API_URL = process.env.PISTON_API_URL || 'https://emkc.org/api/v2/piston';

class CodeExecutionService {
    /**
     * Execute code using Piston API
     * @param {string} language - Programming language (javascript, python, cpp, etc.)
     * @param {string} code - Source code
     * @param {string} version - Language version (optional)
     */
    static async execute(language, code, version = '*') {
        try {
            // Map common names to Piston runtimes
            const runtime = this.mapLanguage(language);

            const response = await axios.post(`${PISTON_API_URL}/execute`, {
                language: runtime.language,
                version: runtime.version,
                files: [
                    {
                        content: code
                    }
                ]
            });

            const { run } = response.data;

            return {
                success: true,
                output: run.output,
                statusCode: run.code,
                memory: run.memory,
                cpuTime: run.cpu_time
            };

        } catch (error) {
            logger.error('Code execution failed:', error.message);
            return {
                success: false,
                error: error.response?.data?.message || error.message
            };
        }
    }

    /**
     * Map frontend language names to Piston runtimes
     */
    static mapLanguage(lang) {
        const map = {
            'javascript': { language: 'javascript', version: '18.15.0' },
            'js': { language: 'javascript', version: '18.15.0' },
            'node': { language: 'javascript', version: '18.15.0' },
            'python': { language: 'python', version: '3.10.0' },
            'py': { language: 'python', version: '3.10.0' },
            'cpp': { language: 'c++', version: '10.2.0' },
            'c++': { language: 'c++', version: '10.2.0' },
            'java': { language: 'java', version: '15.0.2' },
            'go': { language: 'go', version: '1.16.2' }
        };

        return map[lang.toLowerCase()] || { language: lang, version: '*' };
    }
}

module.exports = CodeExecutionService;
