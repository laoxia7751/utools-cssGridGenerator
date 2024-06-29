/*
 * @Author: xiajitao xiajitao@genew.com
 * @Date: 2024-06-29 22:27:20
 * @LastEditors: xiajitao xiajitao@genew.com
 * @LastEditTime: 2024-06-29 22:27:22
 * @FilePath: falseutools-cssGridGeneratorfalsesourcefalsebabel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = (api) => {
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };
  }

  return {
    presets: ['@vue/app'],
  };
};
