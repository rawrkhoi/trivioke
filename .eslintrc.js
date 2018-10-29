module.exports = {
    extends: "airbnb",
    env: { browser: true },
    globals: {
        angular: true,
    },
    rules: {
        "no-console": ["warn", { "allow": ["warn", "error"] }],
        'import/extensions': 0,
        'react/destructuring-assignment': 1,
        'react/jsx-one-expression-per-line': 0, 
        'class-methods-use-this': 0,
    }
};
