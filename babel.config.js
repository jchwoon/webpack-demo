module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "10",
        },
        useBuiltIns: "usage",
        corejs: { version: "3.8", proposals: true },
      },
    ],
    "@babel/preset-react",
  ];

  const plugins = ["@babel/plugin-proposal-class-properties"];

  return {
    presets,
    plugins,
  };
};
