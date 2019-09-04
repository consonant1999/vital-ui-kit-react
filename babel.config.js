module.exports = function(api) {
  api.cache(true);
  const config = {
    comments: false,
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', { modules: false }],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'babel-plugin-styled-components',
      [
        'astroturf/plugin',
        {
          tagName: 'css',
          extension: '.css',
          writeFiles: true, // Writes css files to disk using the result of `getFileName`
          getFileName(hostFilePath, pluginsOptions) {
            const basepath = join(
              dirname(hostFilePath),
              basename(hostFilePath, extname(hostFilePath)),
            );
            return `${basepath}__extracted_style${opts.extension}`;
          },
        },
      ],
    ],
    env: {
      development: {
        plugins: [
          'babel-plugin-styled-components',
          [
            'astroturf/plugin',
            {
              tagName: 'css',
              extension: '.css',
              writeFiles: true, // Writes css files to disk using the result of `getFileName`
              getFileName(hostFilePath, pluginsOptions) {
                const basepath = join(
                  dirname(hostFilePath),
                  basename(hostFilePath, extname(hostFilePath)),
                );
                return `${basepath}__extracted_style${
                  opts.extension
                }`;
              },
            },
          ],
        ],
      },
      test: {
        presets: [
          ['@babel/preset-env', { modules: 'commonjs' }],
          '@babel/preset-react',
        ],
        plugins: [
          'babel-plugin-styled-components',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
    overrides: [
      {
        test: '.storybook',
        plugins: [['babel-plugin-styled-components']],
      },
    ],
  };

  return config;
};
