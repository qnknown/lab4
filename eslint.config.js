/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        rules: {
            // Здесь можно добавить ваши собственные правила
        },
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            // Убираем здесь parser, так как он уже определен выше
            // parser: require('@typescript-eslint/parser'),
        },
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
        },
        rules: {
            // Здесь можно добавить ваши собственные правила
        },
    },
];

module.exports = config;
